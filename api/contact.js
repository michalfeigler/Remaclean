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

  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ success: false, error: 'server_misconfigured' });
  }

  const ip =
    req.headers['cf-connecting-ip'] ||
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    '';

  const verifyParams = new URLSearchParams({ secret, response: token });
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

  const submission = {
    ...formData,
    _subject: 'REMACLEAN/UNICLEAN | poptávka',
    _template: 'table',
    _replyto: formData.email || '',
  };

  let formResult;
  try {
    const formRes = await fetch('https://formsubmit.co/ajax/michal.feigler@rematiptop.cz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://remaclean.vercel.app',
        Referer: 'https://remaclean.vercel.app/',
      },
      body: JSON.stringify(submission),
    });
    formResult = await formRes.json();
  } catch {
    return res.status(502).json({ success: false, error: 'mail_provider_unreachable' });
  }

  const ok = formResult.success === true || formResult.success === 'true';
  if (!ok) {
    return res.status(502).json({ success: false, error: 'mail_send_failed', detail: formResult.message });
  }

  return res.status(200).json({ success: true });
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
