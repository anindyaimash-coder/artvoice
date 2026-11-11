export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const targetEmail = process.env.SUPPORT_EMAIL || 'anindyaimash@gmail.com';
    const origin = req.headers.origin || 'https://artvoice-psi.vercel.app';
    const referer = req.headers.referer || 'https://artvoice-psi.vercel.app/';

    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: origin,
        Referer: referer,
        'User-Agent': req.headers['user-agent'] || 'ArtVoice-BugReporter/1.0'
      },
      body: JSON.stringify({
        _subject: body.subject || '[BUG ARTVOICE] Laporan Kendala',
        _template: 'table',
        _captcha: 'false',
        Kategori: body.category || '-',
        Pelapor: body.sender || 'Pengguna ArtVoice (Anonim)',
        Detail_Kendala: body.desc || '-',
        Halaman_Aktif: body.activeView || '-',
        Perangkat_Layar: body.screenInfo || '-',
        Browser: body.ua || '-',
        Waktu: body.timestamp || new Date().toISOString()
      })
    });

    const rawText = await response.text();
    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      data = { raw: rawText };
    }
    if (!response.ok) {
      return res.status(502).json({ ok: false, status: response.status, data });
    }
    return res.status(200).json({ ok: true, status: response.status, data });
  } catch (err) {
    return res.status(502).json({ ok: false, error: err.message });
  }
}
