/* REMACLEAN/UNICLEAN microsite | interactivity + bilingual i18n (CZ default / EN) */
(() => {
  'use strict';

  /* =========================================================
     1. TRANSLATION DICTIONARY
     Czech (cs) is default. Audience: engineers, plant managers,
     vulcanizing specialists. Tone: authoritative, specific,
     "makes life easier, not more complex".
     ========================================================= */
  const I18N = {
    cs: {
      'meta.title':       'REMACLEAN & UNICLEAN | Stěrače dopravníkových pásů | REMA TIP TOP',
      'meta.description': 'Stěrače dopravníkových pásů REMACLEAN a UNICLEAN. Méně prostojů, předvídatelné náklady na údržbu, servis ve 150+ zemích od REMA TIP TOP.',
      'lang.aria':        'Volba jazyka',

      'nav.why':        'Proč čistit',
      'nav.products':   'Produkty',
      'nav.process':    'Postup',
      'nav.faq':        'FAQ',
      'nav.cta':        'Vyžádat nabídku',


      'hero.eyebrow': 'REMACLEAN & UNICLEAN | Stěrače dopravníkových pásů',
      'hero.h1':      'Konec zanešeného dopravníku a znečištění v provozu.<br>Méně odstávek, <span class="accent">efektivnější provoz.</span>',
      'hero.sub':     'Stěrače dopravníkových pásů REMACLEAN a UNICLEAN dodáváme vždy přesně na míru vašemu dopravníku. Německá výroba, profesionálně proškolení technici a reference z více než 150 zemí zaručují dokonalý výsledek v každém provozu.',
      'hero.cta1':    'Domluvte si konzultaci s technikem',
      'hero.cta2':    'Prohlédnout portfolio',
      'hero.imgAlt':  'Průmyslový dopravníkový systém',

      'stat1.label': 'Maximální rychlost pásu',
      'stat2.label': 'Provozní teplota',
      'stat3.label': 'Zemí, kde je REMACLEAN nasazen',
      'stat4.label': 'Dostupnost většiny výrobků',
      'stat4.unit':  'dní',

      'problem.eyebrow': 'Skrytá cena znečištěného pásu',
      'problem.h2':      'Znečištěný pás je tichou, ale zato <strong>vysokou daní pro celý provoz.</strong>',
      'problem.sub':     'Neplánované odstávky, ušlý zisk, opotřebení komponent, mimořádné investice, bezpečnostní rizika pro personál, hodiny strávené zbytečným úklidem. Vše má společného jmenovatele: špatný stírací systém.',
      'problem.c1.h':    'Prostoje a ušlý zisk',
      'problem.c1.p':    'Špatně navržený nebo instalovaný stěrač změní desetiminutovou výměnu lišty v hodinovou odstávku a čas, který již nedostanete zpět. Stěrače REMACLEAN se instalují vždy během plánované odstávky, a to bez demontáže hnacího bubnu. Jejich údržba je pak minimální a počítá se v řádu minut.',
      'problem.c2.h':    'Bezpečnost a škody na majetku',
      'problem.c2.p':    'Rozsypaný materiál pod dopravníkem vytváří riziko pracovního úrazu, urychluje opotřebení válečků, ložisek a krycí vrstvy pásu. Stěrače REMACLEAN jsou šetrné k pásu i spojům a zásadně tak prodlužují životnost celého zařízení.',
      'problem.c3.h':    'Rozpočet a plánování',
      'problem.c3.p':    'Předvídatelná dostupnost náhradních dílů. Jednoduchá výměna stíracích lišt. Jednobodové nastavení přítlaku. Zaškolení personálu během instalace. Se systémy REMACLEAN má běžná údržba jasný plán a rozpočet.',

      'products.eyebrow': 'Portfolio',
      'products.h2':      'Šest stěračových typů. <strong>Jeden standard kvality.</strong>',
      'products.sub':     'Od nejjemnějšího písku až po mokré a abrazivní nánosy, systémy REMACLEAN a UNICLEAN zvládnou očistit každý dopravník. Jejich efektivita je prokázána jak na šachtách a povrchových dolech, tak v cementárnách, pískovnách a ostatních náročných provozech.',

      'spec.speed': 'Rychlost',
      'spec.temp':  'Teplota',

      'prod1.tag': 'Primární stěrač',
      'prod1.p':   'Vysoce otěruvzdorný polyuretanový stěrač pro univerzální předčištění u hnacího bubnu (Ø 500–1 000 mm). Standardní červený PUR i tepelně odolná modrá varianta (až +100 °C, krátkodobě 120 °C). Poradí si jak s reverzním provozem, tak s mechanickými spojovači.',
      'prod2.tag': 'Sekundární stěrač',
      'prod2.p':   'Modulární sekundární stěrač z karbidu wolframu s pružně uloženými, individuálně se přizpůsobujícími segmenty. Vřetenové upínací zařízení (M30) drží konstantní přítlak i při postupném opotřebení břitů.',
      'prod3.tag': 'Reverzní karbid wolframu',
      'prod3.p':   'Reverzní sekundární stěrač z karbidu wolframu pro abrazivní a vlhké materiály. K dispozici ve dvou rychlostních provedeních: Typ 70 do 3,5 m/s, Typ 85 do 6,5 m/s.',
      'prod4.tag': 'U hnacího bubnu',
      'prod4.p':   'Stěrač u hnacího bubnu se segmenty z karbidu wolframu (HM-F2) nebo z polyuretanu (HM-F2-PUR). Reverzní provoz, montáž na buben Ø 160–1 050 mm. Tepelně odolná verze HM-F2 HR až do +120 °C.',
      'prod5.tag': 'Vratná větev a stírací lišty',
      'prod5.p':   'Stěrače pro vratnou větev a stírací lišty. RB-IGP-S: pluhový stěrač s lištou z otěruvzdorného PE pro šetrné čištění vnitřní strany pásu. KWA: pryžová stírací lišta se třemi otočnými břity, trojnásobná životnost a vynikající poměr cena/výkon.',
      'prod6.tag': 'Lehký dopravník',
      'prod6.p':   'Účinné a šetrné čištění lehkých dopravníkových pásů do šíře 1 200 mm. Řada F (PUR-FH, PUR-FH 90) pro hnací buben, řada U (HM-UG, HM-UT, PUR-UT) pro vratnou větev. Univerzálně použitelné: písek, štěrk, uhlí, cement, rudy.',

      'compare.label':       'Porovnání jednotlivých stěračů',
      'compare.f.title':     'REMACLEAN F-série | na hnacím bubnu',
      'compare.u.title':     'REMACLEAN U-série | na vratné větvi',
      'compare.brush.title': 'REMACLEAN | kartáčové stěrače',
      'compare.i.title':     'REMACLEAN I-série | čištění vnitřní strany pásu',
      'compare.bar.title':   'REMACLEAN | stírací lišty',
      'compare.uni.title':   'UNICLEAN | lehké pásy',
      'compare.col.type':      'Typ',
      'compare.col.width':     'Šířka pásu [mm]',
      'compare.col.drum':      'Ø bubnu [mm]',
      'compare.col.speed':     'Rychlost [m/s]',
      'compare.col.temp':      'Teplota [°C]',
      'compare.col.reverse':   'Reverzní',
      'compare.col.atex':      'ATEX',
      'compare.col.fasteners': 'Mech. spojovače',
      'compare.col.material':  'Materiál',
      'material.rubber':       'pryž',
      'material.rubberCab':    'pryž (CAB)',
      'compare.legend':      '<strong>Legenda:</strong>  V = primární (předčistič), H = sekundární (hlavní), G = hrubé čištění, F = jemné čištění, S = segmenty, D = spojitá lišta, HM = karbid wolframu, PUR = polyuretan, PE = polyetylen. <span class="compare__note">*</span> = za určitých podmínek, <span class="compare__note">**</span> = volitelně dostupné.',

      'proc.eyebrow': 'Jak postupujeme',
      'proc.h2':      'Od <strong>návštěvy</strong> po instalaci stěrače. <strong>Týdny, ne měsíce.</strong>',
      'proc.sub':     'Každý dopravník je jiný a každý si zaslouží stírací systém na míru. Naši technici volí z desítek alternativ na základě osobní prohlídky pásu, specifikace provozu, přepravovaného materiálu a architektury dopravníku. Stěrače sami nainstalujeme a vyladíme. Jak prodej, tak instalace probíhá vždy pod dozorem stejného technika, který zná váš provoz a personál.',
      'proc.s1.h':    'Návštěva provozu',
      'proc.s1.p':    'Návštěva technika REMA TIP TOP INCO u vás v provozu. Inspekce pásu, zaznamenání všech jeho parametrů (šířka, rychlost, materiál, typy spojů, stav stávajícího stěrače, hnacího bubnu a pásu…). Bezplatně a bez závazků.',
      'proc.s2.h':    'Návrh řešení',
      'proc.s2.p':    'Konkrétní návrh a konfigurace řešení na míru napříč celým portfoliem stěračů REMACLEAN. Jasná cena, datum dodání a návrh instalace.',
      'proc.s3.h':    'Instalace a uvedení do provozu',
      'proc.s3.p':    'Naši servisní technici stěrače nainstalují, vyladí přítlak, předvedou a na klíč předají. Zároveň zaškolí personál a naplánují kontrolní návštěvu.',
      'proc.s4.h':    'Vyhodnocení a další postup',
      'proc.s4.p':    'Audit po 30 a 90 dnech: zkoumáme stav pásu, zbytky materiálu na dopravníku i mimo něj, opotřebení břitů a přítlak. Na místě upravíme, co je třeba, a v případě nutných oprav zajistíme jejich naplánování na další plánovanou odstávku.',

      'cta.eyebrow': 'Domluvte si konzultaci',
      'cta.h2':      'Osobní návštěva. Návrh řešení na míru. <strong>Nabídka do pěti pracovních dní.</strong>',
      'cta.p':       'Vyplňte poptávkový formulář a náš technik se vám obratem ozve, aby si s vámi dohodnul osobní schůzku, při které vyberete to nejvhodnější řešení na míru přímo vašemu provozu.',
      'cta.perk1':   'Osobní návštěva vašeho provozu a prohlídka dopravníku bez závazků a nákupního tlaku.',
      'cta.perk2':   'Řešení z řad REMACLEAN a UNICLEAN volíme vždy na základě specifik vašeho provozu.',
      'cta.perk3':   'Nabídku obdržíte do pěti pracovních dní. Každá nabídka je individuálně vypracovaná přímo technikem, který váš provoz navštívil.',
      'cta.perk4':   'Doprava, instalace a zaškolení personálu je samozřejmou součástí každé naší nabídky.',

      'form.title':       'Řekněte nám o vašem dopravníku',
      'form.lbl.name':    'Jméno',
      'form.lbl.company': 'Společnost',
      'form.lbl.email':   'Pracovní e-mail',
      'form.lbl.phone':   'Telefon',
      'form.lbl.width':   'Šířka pásu',
      'form.lbl.material':'Dopravovaný materiál',
      'form.lbl.message': 'Jaký problém řešíte (volitelné)',
      'form.opt.select':  'Vybrat…',
      'form.ph.material': 'např. cement, písek, štěrk',
      'form.ph.message':  'Zanešený dopravník, materiál kolem pásu, náročná údržba…',
      'form.consent':     'Souhlasím s tím, aby mě společnost REMA TIP TOP kontaktovala ohledně této poptávky. Souhlas mohu kdykoliv odvolat.',
      'form.submit':      'Odeslat poptávku',
      'form.submit.busy': 'Odesílám…',
      'form.legal':       'Obvyklá doba odpovědi: do 5 pracovních dní. Vaše údaje nikdy nesdílíme.',

      'faq.eyebrow': 'Časté dotazy',
      'faq.h2':      'Nejčastější dotazy, <strong>jasné odpovědi.</strong>',
      'faq.q1':      'Jak si vybrat mezi REMACLEAN PUR (polyuretan) a REMACLEAN HM (karbid wolframu)?',
      'faq.a1':      'REMACLEAN PUR je šetrný k pásu, cenově efektivní a ideální pro primární předčištění vlhkých sypkých materiálů při rychlostech do 3,5 m/s. REMACLEAN HM je správnou volbou pro vysokorychlostní dopravníky (až 6,5 m/s), jemné abrazivní částice, lepivé zbytky a provozy, kde je dlouhá životnost stěrače kritická. Většina provozů kombinuje primární PUR se sekundárním HM stěračem. Právě při kombinaci obou řešení má systém REMACLEAN nejvyšší návratnost. Konkrétní doporučení vám potvrdíme při osobní návštěvě.',
      'faq.q2':      'Lze REMACLEAN instalovat na náš stávající dopravník?',
      'faq.a2':      'Ano. Naše stěrače jsou navrženy tak, aby jejich instalace byla co nejvíce komfortní a maximálně se při ní využívaly stávající technologie. U většiny dopravníků tak odpadá nutnost výroby nových prvků a zbytečné vícepráce. Naši technici vám při návštěvě navrhnou to nejlepší umístění systémů REMACLEAN tak, aby byla jejich stírací schopnost co nejvyšší.',
      'faq.q3':      'Jak konkrétně probíhá bezplatná návštěva provozu?',
      'faq.a3':      'Náš technik si s vámi domluví termín, kdy přijede do vašeho provozu, projde s vámi linku, změří vše, co potřebuje (šířka, rychlost a materiál pásu, typ spojů, průměr bubnu, stav stávajících stěračů, stav krycí vrstvy pásu) a do pěti pracovních dní vám zašle konfiguraci stěračů na míru přímo pro váš provoz a předběžnou cenu celého řešení včetně instalace. Návštěva trvá obvykle 60–90 minut a nevyžaduje žádné přípravy z vaší strany.',
      'faq.q4':      'Jak rychle jsou k dispozici náhradní díly? Máte je skladem?',
      'faq.a4':      'Náhradní díly máme k dispozici skladem u výrobce a u většiny případů je standardní dodací doba dva týdny od objednání. Pro náročné provozy nabízíme možnost individuální domluvy skladování kritických dílů, které jsou tak okamžitě k dispozici.',

      'foot.brand_p':      'je již 35 let spolehlivým dodavatelem technologií nejvyšší kvality v oblasti průmyslového pogumování a dopravníkových pásů. Jsme výhradním partnerem německé společnosti REMA TIP TOP AG v Česku a na Slovensku.',
      'foot.h.brand':      'REMA\u00a0TIP\u00a0TOP INCO',
      'foot.h.products':   'Produkty',
      'foot.h.engagement': 'Spolupráce',
      'foot.h.contact':    'Kontakt',
      'foot.eng1':         'Návštěva provozu',
      'foot.eng2':         'Dodávka a instalace',
      'foot.eng3':         'Nejčastější dotazy',
      'foot.bottom_left':  '© REMA TIP TOP INCO-CZ spol. s r.o. · REMA TIP TOP AG',
      'sticky.cta': 'Domluvte si konzultaci s technikem'
    },

    en: {
      'meta.title':       'REMACLEAN & UNICLEAN | Belt Cleaning Systems | REMA TIP TOP',
      'meta.description': 'REMACLEAN and UNICLEAN belt cleaning systems. Less carryback, predictable maintenance cost, service across 150+ countries by REMA TIP TOP.',
      'lang.aria':        'Language',

      'nav.why':        'Why clean',
      'nav.products':   'Products',
      'nav.process':    'Process',
      'nav.faq':        'FAQ',
      'nav.cta':        'Request a quote',


      'hero.eyebrow': 'REMACLEAN & UNICLEAN | Belt Cleaning Systems',
      'hero.h1':      'No more belt fouling or in-plant contamination.<br>Fewer shutdowns, <span class="accent">more efficient operation.</span>',
      'hero.sub':     'We always supply REMACLEAN and UNICLEAN belt cleaning systems tailored precisely to your conveyor. German manufacturing, professionally trained technicians and references from more than 150 countries guarantee perfect results in every operation.',
      'hero.cta1':    'Book an engineer consultation',
      'hero.cta2':    'Browse portfolio',
      'hero.imgAlt':  'Heavy industrial conveyor system',

      'stat1.label': 'Maximum belt speed',
      'stat2.label': 'Service temperature',
      'stat3.label': 'Countries where REMACLEAN is installed',
      'stat4.label': 'Standard product availability',
      'stat4.unit':  'days',

      'problem.eyebrow': 'The hidden cost of a dirty belt',
      'problem.h2':      'A dirty belt is a quiet but <strong>expensive tax on the entire operation.</strong>',
      'problem.sub':     'Unplanned shutdowns, lost revenue, component wear, emergency capital expenditure, safety risks for personnel, hours spent on unnecessary cleanup. They all share one denominator: a poor cleaning system.',
      'problem.c1.h':    'Downtime and lost revenue',
      'problem.c1.p':    'A poorly designed or installed cleaner turns a 10-minute blade change into an hour-long shutdown, time you will never get back. REMACLEAN cleaners are always installed during planned downtime, with no removal of the head pulley. Ongoing maintenance is minimal and measured in minutes.',
      'problem.c2.h':    'Safety & equipment damage',
      'problem.c2.p':    'Spilled material under the conveyor creates a workplace-injury risk and accelerates wear on idlers, bearings and the belt cover. REMACLEAN cleaners are gentle on the belt and its splices, significantly extending the service life of the whole system.',
      'problem.c3.h':    'Budget and planning',
      'problem.c3.p':    'Predictable spare-parts availability. Easy blade replacement. Single-point pressure adjustment. Crew training during installation. With REMACLEAN systems, routine maintenance has a clear plan and a clear budget.',

      'products.eyebrow': 'Portfolio',
      'products.h2':      'Six scraper types. <strong>One quality standard.</strong>',
      'products.sub':     'From the finest sand to wet and abrasive deposits, REMACLEAN and UNICLEAN systems clean every conveyor. Their effectiveness is proven in underground and surface mines, cement plants, sand quarries and other demanding operations.',

      'spec.speed': 'Speed',
      'spec.temp':  'Temp',

      'prod1.tag': 'Primary cleaner',
      'prod1.p':   'Highly abrasion-resistant polyurethane scraper bar for universal pre-cleaning at the head pulley (Ø 500–1,000 mm). Standard red PUR plus heat-resistant blue PUR (to +100 °C, short-term 120 °C). Handles both reversible operation and mechanical fasteners.',
      'prod2.tag': 'Secondary cleaner',
      'prod2.p':   'Modular tungsten-carbide secondary cleaner with elastically supported, individually adjusting segments. M30 spindle tensioner holds consistent contact pressure even as the blades gradually wear.',
      'prod3.tag': 'Reversible carbide',
      'prod3.p':   'Reversible tungsten-carbide secondary cleaner for abrasive, moist materials. Available in two speed grades: Type 70 to 3.5 m/s, Type 85 to 6.5 m/s.',
      'prod4.tag': 'Head pulley',
      'prod4.p':   'Head-pulley cleaner with tungsten carbide segments (HM-F2) or polyurethane segments (HM-F2-PUR). Reversible, fits pulleys Ø 160–1,050 mm. Heat-resistant version HM-F2 HR up to +120 °C.',
      'prod5.tag': 'Return-side & wiper bars',
      'prod5.p':   'Cleaners for the return run and wiper bars. RB-IGP-S: plug scraper with abrasion-resistant PE bar for gentle cleaning of the belt’s inner side. KWA: three-blade rubber wiper bar with rotatable blades, triple service life and excellent cost-to-performance ratio.',
      'prod6.tag': 'Light conveyor',
      'prod6.p':   'Effective, belt-friendly cleaning for light conveyor belts up to 1,200 mm wide. F-series (PUR-FH, PUR-FH 90) for head-pulley use; U-series (HM-UG, HM-UT, PUR-UT) for the return run. Universally applicable: sand, gravel, coal, cement, ores.',

      'compare.label':       'Compare individual cleaners',
      'compare.f.title':     'REMACLEAN F-series | head pulley',
      'compare.u.title':     'REMACLEAN U-series | return run',
      'compare.brush.title': 'REMACLEAN | cleaning brushes',
      'compare.i.title':     'REMACLEAN I-series | inner belt cleaners',
      'compare.bar.title':   'REMACLEAN | cleaning bars',
      'compare.uni.title':   'UNICLEAN | light-duty belts',
      'compare.col.type':      'Type',
      'compare.col.width':     'Belt width [mm]',
      'compare.col.drum':      'Pulley Ø [mm]',
      'compare.col.speed':     'Speed [m/s]',
      'compare.col.temp':      'Temp [°C]',
      'compare.col.reverse':   'Reversible',
      'compare.col.atex':      'ATEX',
      'compare.col.fasteners': 'Mech. fasteners',
      'compare.col.material':  'Material',
      'material.rubber':       'rubber',
      'material.rubberCab':    'rubber (CAB)',
      'compare.legend':      '<strong>Legend:</strong>  V = primary (pre-cleaner), H = secondary (main cleaner), G = coarse cleaning, F = fine cleaning, S = segments, D = continuous strip, HM = tungsten carbide, PUR = polyurethane, PE = polyethylene. <span class="compare__note">*</span> = under certain conditions, <span class="compare__note">**</span> = optionally available.',



      'proc.eyebrow': 'How we engage',
      'proc.h2':      'From <strong>visit</strong> to installed cleaner. <strong>Weeks, not months.</strong>',
      'proc.sub':     'Every conveyor is different and every one deserves a tailored cleaning system. Our technicians choose from dozens of alternatives based on a personal belt inspection, the specifics of the operation, the conveyed material and the conveyor’s architecture. We install and tune the cleaners ourselves. Sales and installation always run under the same technician who knows your operation and your crew.',
      'proc.s1.h':    'Site visit',
      'proc.s1.p':    'A REMA TIP TOP INCO technician visits your operation. Belt inspection and capture of every parameter (width, speed, material, splice types, condition of the current cleaner, head pulley and belt…). Free of charge, no obligation.',
      'proc.s2.h':    'Engineered specification',
      'proc.s2.p':    'A concrete proposal and tailored configuration across the full REMACLEAN portfolio. A clear price, delivery date and installation plan.',
      'proc.s3.h':    'Installation & commissioning',
      'proc.s3.p':    'Our service technicians install the cleaner, tune the contact pressure, demonstrate it and hand over a turnkey solution. They also train the personnel and schedule a follow-up visit.',
      'proc.s4.h':    'Review & next steps',
      'proc.s4.p':    'Audit at 30 and 90 days: we check belt condition, material residue on and around the conveyor, blade wear and contact pressure. We adjust whatever is needed on the spot, and any required repairs are scheduled for the next planned downtime.',

      'cta.eyebrow': 'Book a consultation',
      'cta.h2':      'On-site visit. Tailored solution. <strong>Quote in five business days.</strong>',
      'cta.p':       'Fill in the form and our technician will get back to you promptly to set up an on-site meeting, at which you’ll select the right solution tailored to your operation.',
      'cta.perk1':   'An on-site visit and conveyor walkthrough, with no obligation and no buying pressure.',
      'cta.perk2':   'Solutions from the REMACLEAN and UNICLEAN families are always chosen based on the specifics of your operation.',
      'cta.perk3':   'You’ll receive your quote within five business days. Every quote is prepared individually by the engineer who visited your site.',
      'cta.perk4':   'Delivery, installation and crew training are included as standard with every quote.',

      'form.title':       'Tell us about your conveyor',
      'form.lbl.name':    'Name',
      'form.lbl.company': 'Company',
      'form.lbl.email':   'Work email',
      'form.lbl.phone':   'Phone',
      'form.lbl.width':   'Belt width',
      'form.lbl.material':'Conveyed material',
      'form.lbl.message': 'Tell us what you’re seeing (optional)',
      'form.opt.select':  'Select…',
      'form.ph.material': 'e.g. cement, sand, gravel',
      'form.ph.message':  'Carryback symptoms, current cleaner, downtime impact…',
      'form.consent':     'I agree to be contacted by REMA TIP TOP regarding this enquiry. I can unsubscribe at any time.',
      'form.submit':      'Request my quote',
      'form.submit.busy': 'Sending…',
      'form.legal':       'Typical response time: under 5 business days. We’ll never share your details.',

      'faq.eyebrow': 'Frequently asked',
      'faq.h2':      'Frequently asked, <strong>clearly answered.</strong>',
      'faq.q1':      'How do I choose between REMACLEAN PUR (polyurethane) and REMACLEAN HM (tungsten carbide)?',
      'faq.a1':      'REMACLEAN PUR is belt-friendly, cost-effective and ideal for primary pre-cleaning of moist, granular materials at speeds up to 3.5 m/s. REMACLEAN HM is the right choice for high-speed conveyors (up to 6.5 m/s), fine abrasive particles, sticky residues and operations where long cleaner service life is critical. Most plants combine a primary PUR with a secondary HM cleaner. That combination is exactly where the REMACLEAN system delivers the strongest ROI. We confirm the specific recommendation during an on-site visit.',
      'faq.q2':      'Can REMACLEAN be installed on our existing conveyor?',
      'faq.a2':      'Yes. Our cleaners are designed so installation is as comfortable as possible and reuses your existing equipment as much as we can. On most conveyors this eliminates the need to fabricate new parts and the rework that comes with it. During the visit our technicians recommend the best position for the REMACLEAN systems so cleaning performance is at its highest.',
      'faq.q3':      'How does the free site visit work?',
      'faq.a3':      'Our technician schedules a visit, walks the line with you, takes the measurements they need (belt width, speed and material, splice type, pulley diameter, current cleaner state, belt cover condition) and within five business days sends you a tailored cleaner configuration for your operation and a budgetary price for the full solution including installation. The visit typically takes 60–90 minutes and requires no preparation on your side.',
      'faq.q4':      'How fast are spare parts available? Do you keep them in stock?',
      'faq.a4':      'We keep spare parts at the factory; for most cases the standard lead time is two weeks from order. For demanding operations we offer the option of an individual arrangement to stock critical parts so they are immediately available.',

      'foot.brand_p':      'has been a trusted supplier of premium technologies for industrial rubber lining and conveyor belts for 35 years. We are the exclusive partner of Germany’s REMA TIP TOP AG in the Czech Republic and Slovakia.',
      'foot.h.brand':      'REMA\u00a0TIP\u00a0TOP INCO',
      'foot.h.products':   'Products',
      'foot.h.engagement': 'Engagement',
      'foot.h.contact':    'Contact',
      'foot.eng1':         'Site assessment',
      'foot.eng2':         'Delivery and installation',
      'foot.eng3':         'Frequently asked questions',
      'foot.bottom_left':  '© REMA TIP TOP INCO-CZ spol. s r.o. · REMA TIP TOP AG',
      'sticky.cta': 'Book an engineer consultation'
    }
  };

  const STORAGE_KEY = 'rtt-microsite-lang';
  const SUPPORTED   = ['cs', 'en'];
  const DEFAULT     = 'cs';

  /* =========================================================
     2. RENDER: walk DOM, swap textContent / innerHTML / attrs
     ========================================================= */
  function applyLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });

    ['placeholder','alt','content','aria-label','title'].forEach(attr => {
      const dataAttr = 'data-i18n-' + attr;
      document.querySelectorAll('[' + dataAttr + ']').forEach(el => {
        const k = el.getAttribute(dataAttr);
        if (dict[k] !== undefined) el.setAttribute(attr, dict[k]);
      });
    });

    document.documentElement.setAttribute('lang', lang);
    if (dict['meta.title']) document.title = dict['meta.title'];

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function detectInitialLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (_) {}
    return DEFAULT;
  }

  /* 3. Lang-switch handlers */
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (SUPPORTED.includes(lang)) applyLang(lang);
    });
  });
  applyLang(detectInitialLang());

  /* 4. Mobile nav */
  const nav = document.getElementById('primary-nav');
  const navToggle = nav && nav.querySelector('.nav__toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* 5. Fade-up on scroll */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
  }

  /* 6. Form busy-state */
  const form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      if (btn && btn.dataset.busy !== '1') {
        btn.dataset.busy = '1';
        btn.style.opacity = '.7';
        const lang = document.documentElement.getAttribute('lang') || DEFAULT;
        const busy = (I18N[lang] || I18N[DEFAULT])['form.submit.busy'] || 'Sending…';
        btn.innerHTML = busy + ' <span class="arrow">→</span>';
      }
    });
  }
})();
