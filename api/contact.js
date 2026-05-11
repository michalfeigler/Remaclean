export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const { token, ...formData } = body;

  if (!token) {
    return res.status(400).json({ success: false, error: 'missing_captcha_token' });
  }

  const captchaSecret = process.env.HCAPTCHA_SECRET_KEY;
  const resendKey     = process.env.RESEND_API_KEY;
  if (!captchaSecret || !resendKey) {
    return res.status(500).json({ success: false, error: 'server_misconfigured' });
  }

  const ip =
    req.headers['cf-connecting-ip'] ||
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    '';

  const verifyParams = new URLSearchParams({ secret: captchaSecret, response: token });
  if (ip) verifyParams.set('remoteip', ip);

  let verifyData;
  try {
    const verifyRes = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verifyParams,
    });
    verifyData = await verifyRes.json();
  } catch {
    return res.status(502).json({ success: false, error: 'captcha_verify_unreachable' });
  }
  if (!verifyData.success) {
    return res.status(400).json({ success: false, error: 'captcha_failed' });
  }

  const customerEmail = (formData.email || '').trim();
  const html = renderEmailHtml(formData);
  const text = renderEmailText(formData);

  let sendRes, sendBody;
  try {
    sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'REMACLEAN poptávkový formulář <onboarding@resend.dev>',
        to: ['michal.feigler@rematiptop.cz'],
        subject: 'REMACLEAN/UNICLEAN | poptávka',
        ...(customerEmail ? { reply_to: customerEmail } : {}),
        html,
        text,
      }),
    });
    sendBody = await sendRes.text();
  } catch (err) {
    return res.status(502).json({ success: false, error: 'mail_provider_unreachable', detail: String(err) });
  }

  if (!sendRes.ok) {
    return res.status(502).json({
      success: false,
      error: 'mail_send_failed',
      mailStatus: sendRes.status,
      mailBody: sendBody.slice(0, 500),
    });
  }

  return res.status(200).json({ success: true });
}

function renderEmailHtml(d) {
  const row = (label, value) =>
    value
      ? `<tr><td style="padding:8px 14px;font-weight:600;color:#555;background:#f7f7f5;border-bottom:1px solid #eee;width:160px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 14px;border-bottom:1px solid #eee;">${esc(value).replace(/\n/g, '<br>')}</td></tr>`
      : '';
  return `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#222;max-width:640px;margin:0 auto;padding:24px;">
<h2 style="color:#c10000;margin:0 0 16px;">Nová poptávka REMACLEAN / UNICLEAN</h2>
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;border:1px solid #eee;font-size:14px;">
${row('Jméno', d.name)}
${row('Společnost', d.company)}
${row('E-mail', d.email)}
${row('Telefon', d.phone)}
${row('Šířka pásu', d.belt_width)}
${row('Materiál', d.material)}
${row('Zpráva', d.message)}
${row('Souhlas GDPR', d.consent ? 'Ano' : '')}
</table>
<p style="font-size:12px;color:#999;margin-top:16px;">Odesláno z formuláře na remaclean.vercel.app. Pokud kliknete na Odpovědět, odpověď půjde přímo zákazníkovi.</p>
</body></html>`;
}

function renderEmailText(d) {
  const lines = [
    'Nová poptávka REMACLEAN / UNICLEAN',
    '',
    `Jméno:       ${d.name || '-'}`,
    `Společnost:  ${d.company || '-'}`,
    `E-mail:      ${d.email || '-'}`,
    `Telefon:     ${d.phone || '-'}`,
    `Šířka pásu:  ${d.belt_width || '-'}`,
    `Materiál:    ${d.material || '-'}`,
    `Souhlas:     ${d.consent ? 'Ano' : '-'}`,
    '',
    'Zpráva:',
    d.message || '(žádná)',
  ];
  return lines.join('\n');
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
