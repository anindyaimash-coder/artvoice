/**
 * KreatorKit — Aplikasi Pembuat Invoice, Kontrak Kerja Kreatif (SPK), & Kalkulator Tarif
 * Dirancang khusus untuk Ilustrator Pemula, Komisioner Art, & Freelance Desainer.
 * Mendukung Bahasa Indonesia (ID) & Bahasa Inggris (EN) secara instan.
 */

const state = {
  docLang: 'id', // 'id' | 'en'
  accentColor: '#4f46e5',
  items: [
    {
      id: 1,
      desc: 'Ilustrasi Karakter Maskot Full-Body (3 Pose Ekspresi + Shading Detail)',
      qty: 1,
      price: 850000
    },
    {
      id: 2,
      desc: 'Desain Layout Kemasan Pouch Kopi 250g (File Siap Cetak CMYK)',
      qty: 2,
      price: 450000
    },
    {
      id: 3,
      desc: 'Lisensi Penggunaan Komersial Terbatas (Media Sosial & Kemasan UMKM)',
      qty: 1,
      price: 350000
    }
  ]
};

// Preset Proyek Kreatif untuk memudahkan pemula
const PRESETS = {
  vtuber: {
    projectTitle: 'Character Illustration & VTuber / Commission Art Package',
    currency: 'IDR',
    dpPercent: 50,
    licenseType: 'personal',
    maxSketchRev: 3,
    maxFinalRev: 1,
    extraRevFee: 'Rp 75.000 / titik revisi',
    deliveryDays: '7 - 14 Hari Kerja',
    deliverablesSpec: 'High-Res PNG (Transparan & Background), 300 DPI (3000x4000 px)',
    sourceFilePolicy: 'excluded',
    items: [
      { id: 101, desc: 'Full-Body Character Illustration (Full Render & Lighting)', qty: 1, price: 650000 },
      { id: 102, desc: 'Tambahan Ekspresi Wajah (Toggle Expression Set)', qty: 3, price: 75000 },
      { id: 103, desc: 'Simple Custom Background & Dekorasi Properti', qty: 1, price: 150000 }
    ]
  },
  branding: {
    projectTitle: 'Desain Logo & Paket Identitas Visual Brand (Brand Identity)',
    currency: 'IDR',
    dpPercent: 50,
    licenseType: 'exclusive_transfer',
    maxSketchRev: 3,
    maxFinalRev: 2,
    extraRevFee: 'Rp 150.000 / putaran revisi',
    deliveryDays: '10 - 14 Hari Kerja',
    deliverablesSpec: 'Master Vector (AI, EPS, SVG), High-Res PNG Transparan, & PDF Brand Mini Guideline',
    sourceFilePolicy: 'included',
    items: [
      { id: 201, desc: 'Eksplorasi 3 Konsep Logo Utama + Presentasi Filosofi', qty: 1, price: 1200000 },
      { id: 202, desc: 'Palet Warna, Tipografi, & Mini Brand Guideline (PDF)', qty: 1, price: 500000 },
      { id: 203, desc: 'Desain Kartu Nama & Kop Surat (Stationery Kit)', qty: 1, price: 300000 }
    ]
  },
  merch: {
    projectTitle: 'Ilustrasi Eksklusif Merchandise (Kaos / Tote Bag / Sticker Pack)',
    currency: 'IDR',
    dpPercent: 50,
    licenseType: 'commercial_full',
    maxSketchRev: 3,
    maxFinalRev: 2,
    extraRevFee: 'Rp 100.000 / revisi',
    deliveryDays: '7 - 10 Hari Kerja',
    deliverablesSpec: 'High-Res PNG (pisah layer warna siap sablon/DTF) + PSD Preview',
    sourceFilePolicy: 'excluded',
    items: [
      { id: 301, desc: 'Ilustrasi Utama Desain Kaos / Apparel (Detail Tinggi)', qty: 1, price: 900000 },
      { id: 302, desc: 'Ilustrasi Chibi / Die-Cut Sticker Pack (Set 5 Karakter)', qty: 1, price: 500000 },
      { id: 303, desc: 'Commercial Merchandise Buyout License (Cetak Massal)', qty: 1, price: 700000 }
    ]
  },
  uiux: {
    projectTitle: 'Desain UI Landing Page & Social Media Visual Kit',
    currency: 'IDR',
    dpPercent: 50,
    licenseType: 'commercial_limited',
    maxSketchRev: 2,
    maxFinalRev: 2,
    extraRevFee: 'Rp 125.000 / revisi tambahan',
    deliveryDays: '5 - 7 Hari Kerja',
    deliverablesSpec: 'Link Figma Rapi (Auto-Layout) + Export PNG/SVG Assets',
    sourceFilePolicy: 'included',
    items: [
      { id: 401, desc: 'Desain UI Landing Page (Desktop & Mobile Responsive)', qty: 1, price: 1500000 },
      { id: 402, desc: 'Custom Spot Illustrations / Ikon Vektor Pendukung Web', qty: 4, price: 150000 },
      { id: 403, desc: 'Template Feed & Story Instagram (9 Frame Modular)', qty: 1, price: 450000 }
    ]
  }
};

// Kamus Bahasa Dokumen (Indonesia & Inggris)
const I18N = {
  id: {
    invoiceTitle: 'INVOICE TAGIHAN',
    contractTitle: 'PERJANJIAN KERJA KREATIF (SPK)',
    contractSub: 'Syarat, Ketentuan, & Lisensi Hak Cipta Desain/Ilustrasi',
    billTo: 'Ditagihkan Kepada (Klien)',
    creatorLabel: 'Ilustrator / Desainer Pelaksana',
    issueDate: 'Tanggal Terbit',
    dueDate: 'Jatuh Tempo',
    projectTitle: 'Judul Proyek',
    licenseBadge: 'Cakupan Lisensi',
    colDesc: 'Deskripsi Pekerjaan & Deliverables',
    colQty: 'Qty',
    colUnit: 'Harga Satuan',
    colAmount: 'Subtotal',
    subtotal: 'Subtotal Pekerjaan',
    discount: 'Potongan Diskon',
    tax: 'Pajak / PPN',
    grandTotal: 'Total Nilai Proyek',
    dueNowDP: 'Tagihan DP Saat Ini',
    dueNowFinal: 'Sisa Pelunasan Saat Ini',
    dueNowFull: 'Total Tagihan Saat Ini',
    dueNowPaid: 'Status Pembayaran: LUNAS',
    remainingBalance: 'Sisa Pembayaran Setelah DP',
    paymentMethod: 'Metode & Rekening Pembayaran',
    accountHolder: 'Atas Nama',
    notesTitle: 'Catatan & Info Pengiriman File',
    stageBadges: {
      dp: 'TAGIHAN DOWN PAYMENT (DP)',
      final: 'TAGIHAN PELUNASAN AKHIR',
      full: 'TAGIHAN PEMBAYARAN PENUH',
      paid: 'LUNAS / PAID IN FULL'
    },
    licenses: {
      personal: {
        name: 'Penggunaan Pribadi (Personal / Non-Commercial Use)',
        desc: 'Klien hanya berhak menggunakan karya untuk keperluan pribadi/non-komersial. Karya dilarang keras diperjualbelikan kembali, dicetak pada barang dagangan (merchandise), atau digunakan untuk iklan komersial perusahaan tanpa peningkatan lisensi tertulis.'
      },
      commercial_limited: {
        name: 'Lisensi Komersial Terbatas (Promosi & UMKM)',
        desc: 'Klien berhak menggunakan karya untuk identitas visual, media sosial, kemasan usaha, atau promosi digital. Hak cipta moral tetap melekat pada Kreator. Dilarang menjual ulang file gambar mentah secara terpisah.'
      },
      commercial_full: {
        name: 'Lisensi Komersial Penuh & Merchandise (Full Commercial Buyout)',
        desc: 'Klien mendapatkan hak komersial penuh untuk memproduksi, mencetak massal (merchandise/apparel), mendistribusikan, dan menayangkan karya di berbagai media komersial tanpa batas waktu.'
      },
      exclusive_transfer: {
        name: 'Penyerahan Hak Milik Eksklusif (Full Copyright Transfer)',
        desc: 'Setelah pembayaran lunas 100%, hak penggunaan eksklusif atas karya yang disepakati beralih sepenuhnya kepada Klien. Kreator menjamin karya adalah orisinal dan tidak akan menjual ulang karya tersebut kepada pihak lain.'
      }
    },
    clauses: {
      scopeTitle: '1. Ruang Lingkup, File Akhir, & File Mentah (Source Files)',
      sourceExcluded: 'Biaya proyek hanya mencakup file hasil akhir siap pakai. File kerja mentah berlapis (PSD/AI/Procreate/Figma master) TIDAK termasuk kecuali dibeli dengan biaya tambahan.',
      sourceIncluded: 'Biaya proyek sudah mencakup penyerahan file kerja mentah (Source/Master File) yang akan dikirimkan setelah pelunasan 100% diterima.',
      paymentTitle: '2. Tahapan Pembayaran & Jaminan Pekerjaan',
      paymentBody: (dp) => `Pengerjaan proyek dimulai setelah Klien membayarkan Down Payment (DP) sebesar ${dp}%. File hasil akhir resolusi penuh (tanpa watermark) hanya akan diserahkan setelah sisa pelunasan dibayarkan secara penuh.`,
      revisionTitle: '3. Kuota Revisi & Perubahan Konsep',
      revisionBody: (sketch, finalRev, fee) => `Harga mencakup maksimal ${sketch}x revisi pada tahap sketsa/konsep kasar dan ${finalRev}x revisi minor (warna/detail kecil) pada tahap final. Revisi tambahan di luar kuota atau perubahan konsep total setelah sketsa disetujui akan dikenakan biaya tambahan (${fee}).`,
      licenseTitle: '4. Hak Cipta & Lisensi Penggunaan',
      killFeeTitle: '5. Pembatalan Sepihak (Kill Fee)',
      killFeeBody: 'Apabila Klien membatalkan proyek secara sepihak setelah pengerjaan dimulai, maka Down Payment (DP) yang telah masuk bersifat non-refundable (tidak dapat dikembalikan) sebagai kompensasi waktu dan jam kerja Kreator.',
      aiTitle: '6. Larangan Generative AI & NFT',
      aiBody: 'Klien maupun pihak ketiga dilarang memasukkan sketsa, progres, atau karya akhir ke dalam sistem Generative AI (dataset training, img2img, LoRA) maupun mencetaknya sebagai aset kripto/NFT tanpa izin tertulis.',
      portfolioTitle: '7. Hak Publikasi Portofolio Kreator',
      portfolioBody: 'Kreator berhak menampilkan karya yang telah selesai (dengan resolusi pratinjau/watermark) pada portofolio pribadi atau media sosial Kreator sebagai bukti karya, kecuali disepakati NDA tertulis.',
      ghostingTitle: '8. Batas Waktu Respons & Konfirmasi Klien',
      ghostingBody: 'Apabila Klien tidak memberikan kabar atau umpan balik revisi selama lebih dari 14 hari kalender berturut-turut, jadwal penyelesaian otomatis disesuaikan atau proyek dapat dinyatakan selesai sesuai tahap terakhir.'
    },
    preamble: {
      intro: (date) => `Pada tanggal ${date || '-'}, yang bertanda tangan di bawah ini:`,
      party1Title: 'I. PIHAK PERTAMA (Pelaksana Pekerjaan / Kreator)',
      party1NameLabel: 'Nama / Studio',
      party1ContactLabel: 'No. HP / Email',
      party1PortfolioLabel: 'Portofolio',
      party1Note: 'Selanjutnya dalam perjanjian ini disebut sebagai PIHAK PERTAMA.',
      party2Title: 'II. PIHAK KEDUA (Pemberi Tugas / Klien)',
      party2NameLabel: 'Nama / Instansi',
      party2ContactLabel: 'No. HP / Email / Alamat',
      party2Note: 'Selanjutnya dalam perjanjian ini disebut sebagai PIHAK KEDUA.',
      transition: 'PIHAK PERTAMA dan PIHAK KEDUA dengan ini menerangkan bahwa kedua belah pihak sepakat untuk mengikatkan diri dalam Perjanjian Kerja Kreatif (SPK) dengan ketentuan dan syarat-syarat sebagai berikut:'
    },
    sigCreator: 'Pihak Pertama (Ilustrator / Desainer)',
    sigClient: 'Pihak Kedua (Klien / Pemesan)',
    sigAgreeText: 'Dengan menandatangani dokumen ini atau melakukan pembayaran DP, kedua belah pihak menyetujui seluruh rincian biaya dan ketentuan kontrak di atas.'
  },
  en: {
    invoiceTitle: 'INVOICE',
    contractTitle: 'CREATIVE SERVICE AGREEMENT & TERMS',
    contractSub: 'Scope of Work, Revision Policy, & Copyright Licensing Terms',
    billTo: 'Billed To (Client)',
    creatorLabel: 'Creative Provider (Illustrator / Designer)',
    issueDate: 'Issue Date',
    dueDate: 'Due Date',
    projectTitle: 'Project Title',
    licenseBadge: 'License Tier',
    colDesc: 'Item Description & Deliverables',
    colQty: 'Qty',
    colUnit: 'Unit Price',
    colAmount: 'Amount',
    subtotal: 'Subtotal',
    discount: 'Discount',
    tax: 'Tax / VAT',
    grandTotal: 'Total Project Fee',
    dueNowDP: 'Amount Due Now (Deposit / DP)',
    dueNowFinal: 'Final Balance Due Now',
    dueNowFull: 'Total Amount Due Now',
    dueNowPaid: 'Payment Status: PAID IN FULL',
    remainingBalance: 'Remaining Balance After Deposit',
    paymentMethod: 'Payment Instructions',
    accountHolder: 'Account Holder',
    notesTitle: 'Notes & File Delivery Info',
    stageBadges: {
      dp: 'DEPOSIT INVOICE (DOWN PAYMENT)',
      final: 'FINAL BALANCE INVOICE',
      full: 'FULL PAYMENT INVOICE',
      paid: 'PAID IN FULL / RECEIPT'
    },
    licenses: {
      personal: {
        name: 'Personal / Non-Commercial License',
        desc: 'Client is granted the right to use the artwork strictly for personal, non-commercial display. The artwork may NOT be resold, printed on merchandise for profit, or used in commercial advertising without upgrading the license.'
      },
      commercial_limited: {
        name: 'Limited Commercial License (Brand & Digital Promo)',
        desc: 'Client may use the artwork for brand identity, social media promotion, streaming channels, or small-batch packaging. Moral authorship remains with the Creator. Reselling the standalone asset is prohibited.'
      },
      commercial_full: {
        name: 'Full Commercial & Merchandise Buyout',
        desc: 'Client is granted worldwide, perpetual commercial rights to reproduce, print on physical merchandise/apparel, distribute, and monetize the artwork across commercial media.'
      },
      exclusive_transfer: {
        name: 'Exclusive Copyright Transfer (Full Buyout)',
        desc: 'Upon 100% full payment, exclusive commercial and ownership rights transfer to the Client. The Creator warrants the artwork is original and will not resell or license the same asset to any third party.'
      }
    },
    clauses: {
      scopeTitle: '1. Deliverables, Timeline, & Source Files',
      sourceExcluded: 'Project fee covers final flattened/export files only. Layered working files (PSD/AI/Procreate/Figma source) are NOT included unless purchased separately.',
      sourceIncluded: 'Project fee includes layered working/master source files, delivered upon receipt of 100% full payment.',
      paymentTitle: '2. Payment Schedule & Release of Files',
      paymentBody: (dp) => `Work commences after the ${dp}% non-refundable deposit is received. High-resolution, unwatermarked final files will be delivered strictly after the remaining balance is paid in full.`,
      revisionTitle: '3. Revision Policy & Redraw Fees',
      revisionBody: (sketch, finalRev, fee) => `Includes up to ${sketch} revision rounds during the rough sketch/concept stage and ${finalRev} minor tweak rounds (colors/small details) at the final stage. Major structural changes after sketch approval or extra revisions incur an additional fee (${fee}).`,
      licenseTitle: '4. Copyright & Usage License',
      killFeeTitle: '5. Cancellation & Kill Fee',
      killFeeBody: 'If the Client cancels the project after work has commenced, the initial deposit (Down Payment) is strictly non-refundable to compensate for the Creator’s reserved schedule and completed stages.',
      aiTitle: '6. Prohibition of Generative AI & NFT Minting',
      aiBody: 'Neither the Client nor any third party may feed any sketches, work-in-progress, or final deliverables into Generative AI models (training, img2img, LoRA) or mint them as NFTs without prior written consent.',
      portfolioTitle: '7. Creator Portfolio Display Rights',
      portfolioBody: 'The Creator retains the right to showcase low-resolution/watermarked versions of the completed work in their portfolio and social media for self-promotion, unless a separate NDA is signed.',
      ghostingTitle: '8. Client Response & Feedback Timeframe',
      ghostingBody: 'If the Client fails to provide feedback or communication for more than 14 consecutive calendar days, the delivery timeline will be extended accordingly or the project may be closed at the current milestone.'
    },
    preamble: {
      intro: (date) => `This Creative Service Agreement is entered into as of ${date || '-'}, by and between:`,
      party1Title: 'I. FIRST PARTY (Creator / Service Provider)',
      party1NameLabel: 'Name / Studio',
      party1ContactLabel: 'Phone / Email',
      party1PortfolioLabel: 'Portfolio',
      party1Note: 'Hereinafter referred to as the FIRST PARTY.',
      party2Title: 'II. SECOND PARTY (Client / Commissioning Party)',
      party2NameLabel: 'Name / Company',
      party2ContactLabel: 'Phone / Email / Address',
      party2Note: 'Hereinafter referred to as the SECOND PARTY.',
      transition: 'Both parties hereby mutually agree to be bound by the creative scope, payment schedule, and copyright licensing terms set forth below:'
    },
    sigCreator: 'First Party (Creator / Illustrator / Designer)',
    sigClient: 'Second Party (Client / Authorized Representative)',
    sigAgreeText: 'By signing below or submitting the initial deposit payment, both parties agree to the invoice breakdown and creative contract terms above.'
  }
};

// Format angka mata uang
function formatMoney(amount, currency = 'IDR') {
  const num = Number(amount) || 0;
  const map = {
    IDR: { locale: 'id-ID', currency: 'IDR', maxFraction: 0 },
    USD: { locale: 'en-US', currency: 'USD', maxFraction: 2 },
    SGD: { locale: 'en-SG', currency: 'SGD', maxFraction: 2 },
    EUR: { locale: 'de-DE', currency: 'EUR', maxFraction: 2 }
  };
  const cfg = map[currency] || map.IDR;
  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.currency,
    maximumFractionDigits: cfg.maxFraction
  }).format(num);
}

// Escape HTML untuk mencegah XSS saat merender input
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Menampilkan notifikasi Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Inisialisasi tanggal hari ini dan +7 hari
function initDefaultDates() {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const toISO = (d) => d.toISOString().split('T')[0];
  const issueInput = document.getElementById('issueDate');
  const dueInput = document.getElementById('dueDate');
  if (issueInput && !issueInput.value) issueInput.value = toISO(today);
  if (dueInput && !dueInput.value) dueInput.value = toISO(nextWeek);
}

// Render baris item di bagian editor kiri
function renderLineItemsEditor() {
  const container = document.getElementById('lineItemsContainer');
  if (!container) return;

  container.innerHTML = state.items
    .map(
      (item, idx) => `
      <div class="line-item-row" data-id="${item.id}">
        <input type="text" class="item-desc-input" value="${esc(item.desc)}" placeholder="Nama item pekerjaan / ukuran / resolusi" aria-label="Deskripsi Item ${idx + 1}" />
        <input type="number" class="item-qty-input" value="${item.qty}" min="1" max="999" aria-label="Jumlah Item ${idx + 1}" />
        <input type="number" class="item-price-input" value="${item.price}" min="0" step="1000" aria-label="Harga Satuan Item ${idx + 1}" />
        <button type="button" class="btn-remove-item" title="Hapus baris" ${state.items.length <= 1 ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>×</button>
      </div>
    `
    )
    .join('');

  // Attach listeners
  container.querySelectorAll('.line-item-row').forEach((row) => {
    const id = Number(row.dataset.id);
    const itemObj = state.items.find((i) => i.id === id);
    if (!itemObj) return;

    row.querySelector('.item-desc-input').addEventListener('input', (e) => {
      itemObj.desc = e.target.value;
      renderDocumentPreview();
      saveWorkingDraft();
    });
    row.querySelector('.item-qty-input').addEventListener('input', (e) => {
      itemObj.qty = Math.max(1, Number(e.target.value) || 1);
      renderDocumentPreview();
      saveWorkingDraft();
    });
    row.querySelector('.item-price-input').addEventListener('input', (e) => {
      itemObj.price = Math.max(0, Number(e.target.value) || 0);
      renderDocumentPreview();
      saveWorkingDraft();
    });
    row.querySelector('.btn-remove-item').addEventListener('click', () => {
      if (state.items.length <= 1) return;
      state.items = state.items.filter((i) => i.id !== id);
      renderLineItemsEditor();
      renderDocumentPreview();
      saveWorkingDraft();
    });
  });
}

// Ambil seluruh data formulir saat ini
function getFormData() {
  const val = (id) => document.getElementById(id)?.value || '';
  const num = (id) => Number(document.getElementById(id)?.value) || 0;
  const chk = (id) => Boolean(document.getElementById(id)?.checked);

  const subtotal = state.items.reduce((acc, item) => acc + item.qty * item.price, 0);
  const discount = Math.max(0, num('discountAmount'));
  const afterDiscount = Math.max(0, subtotal - discount);
  const taxPercent = Math.max(0, num('taxPercent'));
  const taxAmount = (afterDiscount * taxPercent) / 100;
  const grandTotal = afterDiscount + taxAmount;

  const dpPercent = Math.min(100, Math.max(0, num('dpPercent')));
  const dpAmount = (grandTotal * dpPercent) / 100;
  const remainingAmount = Math.max(0, grandTotal - dpAmount);

  return {
    docMode: val('docMode'),
    currency: val('currency'),
    invoiceNumber: val('invoiceNumber'),
    paymentStage: val('paymentStage'),
    issueDate: val('issueDate'),
    dueDate: val('dueDate'),
    creatorName: val('creatorName'),
    creatorRole: val('creatorRole'),
    creatorEmail: val('creatorEmail'),
    creatorPortfolio: val('creatorPortfolio'),
    clientName: val('clientName'),
    clientCompany: val('clientCompany'),
    clientContact: val('clientContact'),
    projectTitle: val('projectTitle'),
    dpPercent,
    discount,
    discountAmount: discount,
    taxPercent,
    taxAmount,
    subtotal,
    grandTotal,
    dpAmount,
    remainingAmount,
    licenseType: val('licenseType'),
    maxSketchRev: num('maxSketchRev'),
    maxFinalRev: num('maxFinalRev'),
    extraRevFee: val('extraRevFee'),
    deliveryDays: val('deliveryDays'),
    deliverablesSpec: val('deliverablesSpec'),
    sourceFilePolicy: val('sourceFilePolicy'),
    clauseKillFee: chk('clauseKillFee'),
    clauseNoAI: chk('clauseNoAI'),
    clausePortfolio: chk('clausePortfolio'),
    clauseGhosting: chk('clauseGhosting'),
    bankName: val('bankName'),
    bankAccountNo: val('bankAccountNo'),
    bankAccountName: val('bankAccountName'),
    customNotes: val('customNotes'),
    items: JSON.parse(JSON.stringify(state.items))
  };
}

// Render Live Preview Kertas A4 (Invoice & Kontrak)
function renderDocumentPreview() {
  const data = getFormData();
  const t = I18N[state.docLang] || I18N.id;
  const cur = data.currency;

  const invoiceSheet = document.getElementById('invoiceSheet');
  const contractSheet = document.getElementById('contractSheet');

  // Atur visibilitas berdasarkan docMode
  if (data.docMode === 'invoice') {
    invoiceSheet.style.display = 'block';
    contractSheet.style.display = 'none';
  } else if (data.docMode === 'contract') {
    invoiceSheet.style.display = 'none';
    contractSheet.style.display = 'block';
    contractSheet.classList.remove('page-break-before');
  } else {
    invoiceSheet.style.display = 'block';
    contractSheet.style.display = 'block';
    contractSheet.classList.add('page-break-before');
  }

  // Tentukan badge status & nominal yang ditagihkan saat ini
  let stampClass = 'stamp-dp';
  let dueLabel = `${t.dueNowDP} (${data.dpPercent}%)`;
  let dueNominal = data.dpAmount;

  if (data.paymentStage === 'final') {
    stampClass = 'stamp-final';
    dueLabel = `${t.dueNowFinal} (${100 - data.dpPercent}%)`;
    dueNominal = data.remainingAmount;
  } else if (data.paymentStage === 'full') {
    stampClass = 'stamp-final';
    dueLabel = t.dueNowFull;
    dueNominal = data.grandTotal;
  } else if (data.paymentStage === 'paid') {
    stampClass = 'stamp-paid';
    dueLabel = t.dueNowPaid;
    dueNominal = 0;
  }

  const licenseInfo = t.licenses[data.licenseType] || t.licenses.commercial_limited;

  // 1. RENDER INVOICE SHEET
  invoiceSheet.innerHTML = `
    <div class="doc-top-bar">
      <div>
        <div class="doc-type-label">${t.invoiceTitle}</div>
        <div class="doc-number-mono">#${esc(data.invoiceNumber)}</div>
        <span class="status-stamp ${stampClass}">${t.stageBadges[data.paymentStage]}</span>
      </div>
      <div class="creator-header-right">
        <h4>${esc(data.creatorName || 'Nama Kreator')}</h4>
        <p>${esc(data.creatorRole)}</p>
        <p>${esc(data.creatorEmail)}</p>
        <p>${esc(data.creatorPortfolio)}</p>
      </div>
    </div>

    <div class="parties-grid">
      <div class="party-box">
        <small>${t.billTo}</small>
        <strong>${esc(data.clientName || 'Nama Klien')}</strong>
        <p>${esc(data.clientCompany)}</p>
        <p>${esc(data.clientContact)}</p>
      </div>
      <div class="meta-dates-grid">
        <div class="meta-row">
          <span>${t.issueDate}:</span>
          <strong>${esc(data.issueDate || '-')}</strong>
        </div>
        <div class="meta-row">
          <span>${t.dueDate}:</span>
          <strong>${esc(data.dueDate || '-')}</strong>
        </div>
        <div class="meta-row">
          <span>${t.licenseBadge}:</span>
          <strong>${esc(licenseInfo.name.split('(')[0])}</strong>
        </div>
      </div>
    </div>

    <div class="project-banner">
      <small>${t.projectTitle}</small>
      <h3>${esc(data.projectTitle)}</h3>
    </div>

    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 52%;">${t.colDesc}</th>
          <th class="num" style="width: 10%;">${t.colQty}</th>
          <th class="num" style="width: 19%;">${t.colUnit}</th>
          <th class="num" style="width: 19%;">${t.colAmount}</th>
        </tr>
      </thead>
      <tbody>
        ${data.items
          .map(
            (item) => `
          <tr>
            <td><strong>${esc(item.desc)}</strong></td>
            <td class="num">${item.qty}</td>
            <td class="num">${formatMoney(item.price, cur)}</td>
            <td class="num"><strong>${formatMoney(item.qty * item.price, cur)}</strong></td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>

    <div class="doc-summary-grid">
      <div>
        <div class="payment-info-box">
          <h5>${t.paymentMethod}</h5>
          <div class="bank-highlight">${esc(data.bankName)} — ${esc(data.bankAccountNo)}</div>
          <p style="font-size: 0.78rem; color: #334155; margin-top: 2px;">${t.accountHolder}: <strong>${esc(data.bankAccountName)}</strong></p>
        </div>
        ${
          data.customNotes
            ? `
          <div style="margin-top: 0.85rem;">
            <strong style="font-size: 0.75rem; text-transform: uppercase; color: #64748b;">${t.notesTitle}:</strong>
            <p style="font-size: 0.79rem; color: #334155; margin-top: 2px;">${esc(data.customNotes)}</p>
          </div>
        `
            : ''
        }
      </div>

      <div class="totals-box">
        <div class="total-line">
          <span>${t.subtotal}</span>
          <strong>${formatMoney(data.subtotal, cur)}</strong>
        </div>
        ${
          data.discount > 0
            ? `
          <div class="total-line" style="color: #e11d48;">
            <span>${t.discount}</span>
            <strong>- ${formatMoney(data.discount, cur)}</strong>
          </div>
        `
            : ''
        }
        ${
          data.taxPercent > 0
            ? `
          <div class="total-line">
            <span>${t.tax} (${data.taxPercent}%)</span>
            <strong>${formatMoney(data.taxAmount, cur)}</strong>
          </div>
        `
            : ''
        }
        <div class="total-line grand-total">
          <span>${t.grandTotal}</span>
          <span>${formatMoney(data.grandTotal, cur)}</span>
        </div>
        <div class="total-line due-now">
          <span>${dueLabel}</span>
          <span>${data.paymentStage === 'paid' ? '✓' : formatMoney(dueNominal, cur)}</span>
        </div>
        ${
          data.paymentStage === 'dp'
            ? `
          <div class="total-line" style="font-size: 0.76rem; margin-top: 2px;">
            <span>${t.remainingBalance} (${100 - data.dpPercent}%)</span>
            <strong>${formatMoney(data.remainingAmount, cur)}</strong>
          </div>
        `
            : ''
        }
      </div>
    </div>
  `;

  // 2. RENDER CONTRACT / SPK SHEET
  const sourcePolicyText =
    data.sourceFilePolicy === 'included' ? t.clauses.sourceIncluded : t.clauses.sourceExcluded;

  contractSheet.innerHTML = `
    <div class="doc-top-bar">
      <div>
        <div class="doc-type-label">${t.contractTitle}</div>
        <p style="font-size: 0.8rem; color: #475569; margin-top: 2px;">${t.contractSub}</p>
        <div class="doc-number-mono">Ref: #${esc(data.invoiceNumber)} · ${esc(data.issueDate)}</div>
      </div>
      <div class="creator-header-right">
        <h4>${esc(data.creatorName)}</h4>
        <p>${esc(data.creatorRole)}</p>
      </div>
    </div>

    <div style="margin-bottom: 1.15rem; font-size: 0.83rem; color: var(--text-body); line-height: 1.55;">
      <p style="margin-bottom: 0.75rem;">${esc(t.preamble.intro(data.issueDate))}</p>

      <div class="parties-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 0.75rem;">
        <div class="party-box">
          <small style="color: var(--navy);">${esc(t.preamble.party1Title)}</small>
          <strong>${esc(data.creatorName || '-')}${data.creatorRole ? ` — ${esc(data.creatorRole)}` : ''}</strong>
          <p style="margin-top: 0.2rem;"><strong>${esc(t.preamble.party1ContactLabel)}:</strong> ${esc(data.creatorEmail || '-')}</p>
          ${data.creatorPortfolio ? `<p><strong>${esc(t.preamble.party1PortfolioLabel)}:</strong> ${esc(data.creatorPortfolio)}</p>` : ''}
          <p style="font-style: italic; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.3rem;">${esc(t.preamble.party1Note)}</p>
        </div>
        <div class="party-box">
          <small style="color: var(--navy);">${esc(t.preamble.party2Title)}</small>
          <strong>${esc(data.clientName || '-')}${data.clientCompany ? ` (${esc(data.clientCompany)})` : ''}</strong>
          <p style="margin-top: 0.2rem;"><strong>${esc(t.preamble.party2ContactLabel)}:</strong> ${esc(data.clientContact || '-')}</p>
          <p style="font-style: italic; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.3rem;">${esc(t.preamble.party2Note)}</p>
        </div>
      </div>

      <p>${esc(t.preamble.transition)}</p>
    </div>

    <div class="contract-clauses">
      <div class="clause-item">
        <h5>${t.clauses.scopeTitle}</h5>
        <p>
          <strong>${t.projectTitle}:</strong> ${esc(data.projectTitle)}<br/>
          <strong>Deliverables:</strong> ${esc(data.deliverablesSpec)} · <strong>Timeline:</strong> ${esc(data.deliveryDays)}.<br/>
          ${sourcePolicyText}
        </p>
      </div>

      <div class="clause-item">
        <h5>${t.clauses.paymentTitle}</h5>
        <p>${t.clauses.paymentBody(data.dpPercent)}</p>
      </div>

      <div class="clause-item">
        <h5>${t.clauses.revisionTitle}</h5>
        <p>${t.clauses.revisionBody(data.maxSketchRev, data.maxFinalRev, esc(data.extraRevFee))}</p>
      </div>

      <div class="clause-item">
        <h5>${t.clauses.licenseTitle} — ${esc(licenseInfo.name)}</h5>
        <p>${licenseInfo.desc}</p>
      </div>

      ${
        data.clauseKillFee
          ? `
        <div class="clause-item">
          <h5>${t.clauses.killFeeTitle}</h5>
          <p>${t.clauses.killFeeBody}</p>
        </div>
      `
          : ''
      }

      ${
        data.clauseNoAI
          ? `
        <div class="clause-item">
          <h5>${t.clauses.aiTitle}</h5>
          <p>${t.clauses.aiBody}</p>
        </div>
      `
          : ''
      }

      ${
        data.clausePortfolio
          ? `
        <div class="clause-item">
          <h5>${t.clauses.portfolioTitle}</h5>
          <p>${t.clauses.portfolioBody}</p>
        </div>
      `
          : ''
      }

      ${
        data.clauseGhosting
          ? `
        <div class="clause-item">
          <h5>${t.clauses.ghostingTitle}</h5>
          <p>${t.clauses.ghostingBody}</p>
        </div>
      `
          : ''
      }
    </div>

    <p style="font-size: 0.76rem; color: #64748b; font-style: italic;">${t.sigAgreeText}</p>

    <div class="signature-grid">
      <div class="sig-box">
        <div class="sig-role">${t.sigCreator}</div>
        <div class="sig-space"></div>
        <div class="sig-name">${esc(data.creatorName)}</div>
      </div>
      <div class="sig-box">
        <div class="sig-role">${t.sigClient}</div>
        <div class="sig-space"></div>
        <div class="sig-name">${esc(data.clientName)}</div>
      </div>
    </div>
  `;
  // Update Navy Summary Banner in Editor View
  const liveTotalEl = document.getElementById('liveTotalBanner');
  const liveDpEl = document.getElementById('liveDpBanner');
  if (liveTotalEl) {
    liveTotalEl.textContent = formatMoney(data.grandTotal, cur);
  }
  if (liveDpEl) {
    const langLabel = state.docLang === 'en' ? 'English (EN)' : 'Indonesia (ID)';
    liveDpEl.textContent = `Tagihan DP (${data.dpPercent}%): ${formatMoney(data.dpAmount, cur)} · Bahasa Kertas: ${langLabel}`;
  }
}

// ==========================================
// FITUR KALKULATOR HARGA PEMULA
// ==========================================
function updateRateCalculator() {
  const hourly = Number(document.getElementById('calcHourlyRate')?.value) || 50000;
  const hours = Number(document.getElementById('calcHours')?.value) || 8;
  const complexity = Number(document.getElementById('calcComplexity')?.value) || 1;
  const licenseMult = Number(document.getElementById('calcLicense')?.value) || 0;
  const rushMult = Number(document.getElementById('calcRush')?.value) || 0;
  const sourceMult = Number(document.getElementById('calcSourceFile')?.value) || 0;

  const baseProduction = Math.round((hourly * hours * complexity) / 5000) * 5000;
  const licenseFee = Math.round((baseProduction * licenseMult) / 5000) * 5000;
  const addonFee = Math.round((baseProduction * (rushMult + sourceMult)) / 5000) * 5000;
  const totalRecommended = baseProduction + licenseFee + addonFee;

  const minRange = Math.round((totalRecommended * 0.9) / 5000) * 5000;
  const maxRange = Math.round((totalRecommended * 1.2) / 5000) * 5000;
  const dpRecommended = Math.round(totalRecommended * 0.5);

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt('calcBaseProduction', formatMoney(baseProduction, 'IDR'));
  setTxt('calcLicenseFee', formatMoney(licenseFee, 'IDR'));
  setTxt('calcAddonFee', formatMoney(addonFee, 'IDR'));
  setTxt('calcTotalDisplay', formatMoney(totalRecommended, 'IDR'));
  setTxt(
    'calcRangeDisplay',
    `Rentang aman: ${formatMoney(minRange, 'IDR')} – ${formatMoney(maxRange, 'IDR')} · Wajib DP 50%: ${formatMoney(dpRecommended, 'IDR')}`
  );

  return {
    category: document.getElementById('calcCategory')?.value || 'Proyek Ilustrasi & Desain',
    baseProduction,
    licenseFee,
    addonFee,
    totalRecommended,
    licenseKey:
      document.getElementById('calcLicense')?.selectedOptions[0]?.dataset.licenseKey || 'commercial_limited',
    includeSource: sourceMult > 0
  };
}

// ==========================================
// PENYIMPANAN PROYEK & AUTO-SAVE DRAF AKTIF DI LOCALSTORAGE
// ==========================================
const STORAGE_KEY = 'kreatorkit_saved_projects_v1';
const DRAFT_STORAGE_KEY = 'artvoice_working_draft_v1';

const FORM_FIELD_IDS = [
  'docMode',
  'currency',
  'invoiceNumber',
  'paymentStage',
  'issueDate',
  'dueDate',
  'creatorName',
  'creatorRole',
  'creatorEmail',
  'creatorPortfolio',
  'clientName',
  'clientCompany',
  'clientContact',
  'projectTitle',
  'dpPercent',
  'discountAmount',
  'taxPercent',
  'licenseType',
  'maxSketchRev',
  'maxFinalRev',
  'extraRevFee',
  'deliveryDays',
  'deliverablesSpec',
  'sourceFilePolicy',
  'bankName',
  'bankAccountNo',
  'bankAccountName',
  'customNotes'
];

const CHECKBOX_FIELD_IDS = ['clauseKillFee', 'clauseNoAI', 'clausePortfolio', 'clauseGhosting'];
const CALC_FIELD_IDS = [
  'calcCategory',
  'calcHourlyRate',
  'calcHours',
  'calcComplexity',
  'calcLicense',
  'calcRush',
  'calcSourceFile'
];

// Simpan otomatis semua ketikan terakhir agar tidak hilang saat keluar aplikasi / tutup window
function saveWorkingDraft() {
  try {
    const data = getFormData();
    const calcState = {};
    CALC_FIELD_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) calcState[id] = el.value;
    });
    const activeNav = document.querySelector('.nav-pill.active');
    const draft = {
      ...data,
      docLang: state.docLang,
      activeView: activeNav?.dataset?.view || 'editor',
      calcState,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  } catch {
    // Ignore storage quota errors
  }
}

// Pulihkan ketikan terakhir secara otomatis saat aplikasi dibuka kembali
function restoreWorkingDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return false;
    const draft = JSON.parse(raw);
    if (!draft || typeof draft !== 'object') return false;

    FORM_FIELD_IDS.forEach((f) => {
      const el = document.getElementById(f);
      const val = draft[f] !== undefined ? draft[f] : f === 'discountAmount' ? draft.discount : undefined;
      if (el && val !== undefined) el.value = val;
    });

    CHECKBOX_FIELD_IDS.forEach((chkId) => {
      const el = document.getElementById(chkId);
      if (el && draft[chkId] !== undefined) el.checked = Boolean(draft[chkId]);
    });

    if (Array.isArray(draft.items) && draft.items.length > 0) {
      state.items = JSON.parse(JSON.stringify(draft.items));
    }

    if (draft.docLang === 'id' || draft.docLang === 'en') {
      state.docLang = draft.docLang;
      document.querySelectorAll('.lang-btn[data-doc-lang]').forEach((b) => {
        b.classList.toggle('active', b.dataset.docLang === state.docLang);
      });
    }

    if (draft.calcState && typeof draft.calcState === 'object') {
      CALC_FIELD_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && draft.calcState[id] !== undefined) {
          el.value = draft.calcState[id];
        }
      });
    }

    if (draft.activeView && ['editor', 'preview', 'calculator', 'saved'].includes(draft.activeView)) {
      document.querySelectorAll('.nav-pill').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.view === draft.activeView);
      });
      document.querySelectorAll('.view-section').forEach((sec) => {
        sec.classList.toggle('active', sec.id === `view-${draft.activeView}`);
      });
    }

    return true;
  } catch {
    return false;
  }
}

function getSavedProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCurrentProject() {
  const data = getFormData();
  const list = getSavedProjects();
  const existingIdx = list.findIndex((p) => p.invoiceNumber === data.invoiceNumber);

  const record = {
    ...data,
    savedAt: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    list[existingIdx] = record;
  } else {
    list.unshift(record);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  saveWorkingDraft();
  renderSavedProjectsTracker();
  showToast(`Tersimpan: #${data.invoiceNumber}`);
}

function loadProjectIntoEditor(invoiceNumber) {
  const list = getSavedProjects();
  const found = list.find((p) => p.invoiceNumber === invoiceNumber);
  if (!found) return;

  FORM_FIELD_IDS.forEach((f) => {
    const el = document.getElementById(f);
    const val = found[f] !== undefined ? found[f] : f === 'discountAmount' ? found.discount : undefined;
    if (el && val !== undefined) el.value = val;
  });

  CHECKBOX_FIELD_IDS.forEach((chkId) => {
    const el = document.getElementById(chkId);
    if (el && found[chkId] !== undefined) el.checked = Boolean(found[chkId]);
  });

  if (Array.isArray(found.items) && found.items.length > 0) {
    state.items = JSON.parse(JSON.stringify(found.items));
  }

  renderLineItemsEditor();
  renderDocumentPreview();
  switchView('editor');
  saveWorkingDraft();
  showToast(`Proyek #${found.invoiceNumber} dibuka`);
}

function renderSavedProjectsTracker() {
  const list = getSavedProjects();
  const badge = document.getElementById('savedCountBadge');
  if (badge) badge.textContent = list.length;

  const container = document.getElementById('savedProjectsList');
  const statsBox = document.getElementById('trackerStats');
  if (!container || !statsBox) return;

  const totalIdr = list
    .filter((p) => p.currency === 'IDR')
    .reduce((acc, p) => acc + (Number(p.grandTotal) || 0), 0);

  statsBox.innerHTML = `
    <div class="stat-pill">
      <span>Proyek Tersimpan</span>
      <strong>${list.length} Dokumen</strong>
    </div>
    <div class="stat-pill">
      <span>Total Nilai (IDR)</span>
      <strong>${formatMoney(totalIdr, 'IDR')}</strong>
    </div>
  `;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="saved-card" style="grid-column: 1 / -1; text-align: center; padding: 2.5rem;">
        <h3>Belum ada dokumen yang disimpan</h3>
        <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 0.35rem;">
          Klik tombol <strong>"Simpan"</strong> pada kotak biru tua di halaman Buat Dokumen untuk menyimpan arsip klien.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map(
      (item) => `
      <div class="saved-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span class="doc-number-mono">#${esc(item.invoiceNumber)}</span>
            <span class="step-pill">${esc(item.paymentStage.toUpperCase())}</span>
          </div>
          <h3 style="font-size: 1.05rem; margin-bottom: 0.25rem;">${esc(item.projectTitle)}</h3>
          <p style="font-size: 0.84rem; color: var(--text-body);">Klien: <strong>${esc(item.clientName)}</strong></p>
          <p style="font-family: 'Fraunces', serif; font-size: 1.2rem; font-weight: 700; color: var(--navy); margin-top: 0.6rem;">
            ${formatMoney(item.grandTotal, item.currency)}
          </p>
        </div>
        <div class="saved-card-actions">
          <button type="button" class="btn-pill btn-soft btn-load-proj" data-inv="${esc(item.invoiceNumber)}" style="flex:1;">
            Buka
          </button>
          <button type="button" class="btn-pill btn-soft btn-del-proj" data-inv="${esc(item.invoiceNumber)}">
            Hapus
          </button>
        </div>
      </div>
    `
    )
    .join('');

  container.querySelectorAll('.btn-load-proj').forEach((btn) => {
    btn.addEventListener('click', () => loadProjectIntoEditor(btn.dataset.inv));
  });

  container.querySelectorAll('.btn-del-proj').forEach((btn) => {
    btn.addEventListener('click', () => {
      const inv = btn.dataset.inv;
      const filtered = getSavedProjects().filter((p) => p.invoiceNumber !== inv);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      renderSavedProjectsTracker();
      showToast(`Dihapus: #${inv}`);
    });
  });
}

// ==========================================
// NAVIGASI VIEW SEDERHANA & EVENT LISTENERS
// ==========================================
function switchView(viewId) {
  document.querySelectorAll('.nav-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });
  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === `view-${viewId}`);
  });
  saveWorkingDraft();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyPreset(presetKey) {
  const p = PRESETS[presetKey];
  if (!p) return;

  document.getElementById('projectTitle').value = p.projectTitle;
  document.getElementById('currency').value = p.currency;
  document.getElementById('dpPercent').value = p.dpPercent;
  document.getElementById('licenseType').value = p.licenseType;
  document.getElementById('maxSketchRev').value = p.maxSketchRev;
  document.getElementById('maxFinalRev').value = p.maxFinalRev;
  document.getElementById('extraRevFee').value = p.extraRevFee;
  document.getElementById('deliveryDays').value = p.deliveryDays;
  document.getElementById('deliverablesSpec').value = p.deliverablesSpec;
  document.getElementById('sourceFilePolicy').value = p.sourceFilePolicy;

  state.items = JSON.parse(JSON.stringify(p.items));
  renderLineItemsEditor();
  renderDocumentPreview();
  saveWorkingDraft();
  showToast('Contoh proyek diterapkan');
}

function copyWhatsAppSummary() {
  const data = getFormData();
  const cur = data.currency;
  const isEN = state.docLang === 'en';

  const text = isEN
    ? `Hello ${data.clientName},\n\nHere is the summary for our creative project:\n• Project: ${data.projectTitle}\n• Invoice Ref: #${data.invoiceNumber}\n• Total Fee: ${formatMoney(data.grandTotal, cur)}\n• Deposit (${data.dpPercent}%): ${formatMoney(data.dpAmount, cur)}\n• Timeline: ${data.deliveryDays}\n\nPayment: ${data.bankName} — ${data.bankAccountNo} (${data.bankAccountName})\n\nThank you!`
    : `Halo Kak ${data.clientName},\n\nBerikut ringkasan untuk proyek kreatif kita:\n• Proyek: ${data.projectTitle}\n• No. Invoice: #${data.invoiceNumber}\n• Total Biaya: ${formatMoney(data.grandTotal, cur)}\n• Tagihan DP (${data.dpPercent}%): ${formatMoney(data.dpAmount, cur)}\n• Estimasi: ${data.deliveryDays}\n\nPembayaran: ${data.bankName} — ${data.bankAccountNo} (a.n. ${data.bankAccountName})\n\nTerima kasih!`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Teks ringkasan disalin ke clipboard');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDefaultDates();
  restoreWorkingDraft();
  renderLineItemsEditor();
  renderDocumentPreview();
  updateRateCalculator();
  renderSavedProjectsTracker();

  // Top Pill Nav
  document.querySelectorAll('.nav-pill').forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  document.getElementById('btnGoHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('editor');
  });

  document.getElementById('btnJumpPreview')?.addEventListener('click', () => switchView('preview'));
  document.getElementById('btnBottomPreview')?.addEventListener('click', () => switchView('preview'));
  document.getElementById('btnBackToEdit')?.addEventListener('click', () => switchView('editor'));

  // Bilingual Switcher (ID / EN)
  document.querySelectorAll('.lang-btn[data-doc-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.docLang = btn.dataset.docLang;
      document.querySelectorAll('.lang-btn[data-doc-lang]').forEach((b) => {
        b.classList.toggle('active', b.dataset.docLang === state.docLang);
      });
      renderDocumentPreview();
      saveWorkingDraft();
      showToast(state.docLang === 'en' ? 'Bahasa cetakan: English' : 'Bahasa cetakan: Indonesia');
    });
  });

  // Form inputs live update + real-time auto-save
  const handleFormUpdate = () => {
    renderDocumentPreview();
    saveWorkingDraft();
  };
  document.getElementById('docForm')?.addEventListener('input', handleFormUpdate);
  document.getElementById('docForm')?.addEventListener('change', handleFormUpdate);
  document.getElementById('docMode')?.addEventListener('change', handleFormUpdate);

  // Pastikan tersimpan saat pengguna pindah aplikasi, minimize, atau menutup window/tab
  window.addEventListener('pagehide', saveWorkingDraft);
  window.addEventListener('beforeunload', saveWorkingDraft);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveWorkingDraft();
    }
  });

  // Add new line item
  document.getElementById('btnAddItem')?.addEventListener('click', () => {
    state.items.push({
      id: Date.now(),
      desc: state.docLang === 'en' ? 'Additional Design / Illustration Item' : 'Item Ilustrasi / Desain Tambahan',
      qty: 1,
      price: 250000
    });
    renderLineItemsEditor();
    renderDocumentPreview();
    saveWorkingDraft();
  });

  // Pastel Preset Cards
  document.querySelectorAll('.pastel-card[data-preset]').forEach((card) => {
    card.addEventListener('click', () => applyPreset(card.dataset.preset));
  });

  // Reset form (Kosongkan data proyek & klien saja, profil kreator & rekening tetap tersimpan)
  document.getElementById('btnResetForm')?.addEventListener('click', () => {
    document.getElementById('projectTitle').value = 'Proyek Desain / Ilustrasi Baru';
    document.getElementById('clientName').value = '';
    document.getElementById('clientCompany').value = '';
    document.getElementById('clientContact').value = '';
    document.getElementById('discountAmount').value = '0';
    state.items = [{ id: Date.now(), desc: 'Jasa Ilustrasi / Desain Kreatif', qty: 1, price: 500000 }];
    renderLineItemsEditor();
    renderDocumentPreview();
    saveWorkingDraft();
    showToast('Data proyek dikosongkan (profil & rekening Anda tetap aman)');
  });

  // Copy WhatsApp summary
  document.getElementById('btnCopySummary')?.addEventListener('click', copyWhatsAppSummary);

  // ==========================================
  // GENERATOR FILE PDF LANGSUNG (GABUNG 1 FILE / PISAH 2 FILE)
  // ==========================================
  function sanitizeFilename(str) {
    return String(str || 'DOKUMEN')
      .trim()
      .replace(/[^a-zA-Z0-9_-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'DOKUMEN';
  }

  function wrapCanvasText(ctx, text, maxWidth) {
    const rawLines = String(text || '').split('\n');
    const lines = [];
    for (const rawLine of rawLines) {
      const words = rawLine.split(/\s+/).filter(Boolean);
      if (words.length === 0) {
        lines.push('');
        continue;
      }
      let current = words[0];
      for (let i = 1; i < words.length; i++) {
        const test = current + ' ' + words[i];
        if (ctx.measureText(test).width <= maxWidth) {
          current = test;
        } else {
          lines.push(current);
          current = words[i];
        }
      }
      lines.push(current);
    }
    return lines;
  }

  function drawRoundedRect(ctx, x, y, w, h, r, fillStyle, strokeStyle) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function renderInvoiceA4Canvas(data) {
    const W = 1488;
    const H = 2105;
    const PAD = 110;
    const CONTENT_W = W - PAD * 2;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const t = I18N[state.docLang] || I18N.id;
    const cur = data.currency;
    const licenseInfo = t.licenses[data.licenseType] || t.licenses.commercial_limited;

    // White A4 background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    ctx.textBaseline = 'top';

    let y = PAD;

    // 1. Header Left: Title + Invoice No + Status Stamp
    ctx.fillStyle = '#16263B';
    ctx.font = '700 44px Fraunces, Georgia, serif';
    ctx.fillText(t.invoiceTitle, PAD, y);

    ctx.fillStyle = '#6E7A8A';
    ctx.font = '600 23px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(`#${data.invoiceNumber}`, PAD, y + 56);

    let stampBg = '#F7E4C8';
    let stampFg = '#8C5319';
    let dueLabel = `${t.dueNowDP} (${data.dpPercent}%)`;
    let dueNominal = data.dpAmount;

    if (data.paymentStage === 'final') {
      stampBg = '#E5E0FA';
      stampFg = '#362878';
      dueLabel = `${t.dueNowFinal} (${100 - data.dpPercent}%)`;
      dueNominal = data.remainingAmount;
    } else if (data.paymentStage === 'full') {
      stampBg = '#E5E0FA';
      stampFg = '#362878';
      dueLabel = t.dueNowFull;
      dueNominal = data.grandTotal;
    } else if (data.paymentStage === 'paid') {
      stampBg = '#D8EAE6';
      stampFg = '#19574B';
      dueLabel = t.dueNowPaid;
      dueNominal = 0;
    }

    const badgeText = t.stageBadges[data.paymentStage] || 'INVOICE';
    ctx.font = '700 19px "DM Sans", -apple-system, sans-serif';
    const badgeW = ctx.measureText(badgeText).width + 38;
    drawRoundedRect(ctx, PAD, y + 94, badgeW, 38, 19, stampBg, null);
    ctx.fillStyle = stampFg;
    ctx.fillText(badgeText, PAD + 19, y + 103);

    // Header Right: Creator Info
    ctx.textAlign = 'right';
    ctx.fillStyle = '#16263B';
    ctx.font = '700 28px Fraunces, Georgia, serif';
    ctx.fillText(data.creatorName || 'Nama Kreator', W - PAD, y);

    ctx.fillStyle = '#4A5568';
    ctx.font = '400 21px "DM Sans", -apple-system, sans-serif';
    let ry = y + 38;
    [data.creatorRole, data.creatorEmail, data.creatorPortfolio].filter(Boolean).forEach((line) => {
      ctx.fillText(line, W - PAD, ry);
      ry += 28;
    });
    ctx.textAlign = 'left';

    y += 162;
    ctx.strokeStyle = '#EAE5DC';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    // 2. Parties & Dates Box
    y += 36;
    const boxH = 186;
    drawRoundedRect(ctx, PAD, y, CONTENT_W, boxH, 24, '#FAF8F3', null);

    // Left Party: Client
    const col1X = PAD + 34;
    ctx.fillStyle = '#6E7A8A';
    ctx.font = '700 18px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.billTo.toUpperCase(), col1X, y + 26);

    ctx.fillStyle = '#16263B';
    ctx.font = '700 26px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(data.clientName || 'Nama Klien', col1X, y + 54);

    ctx.fillStyle = '#4A5568';
    ctx.font = '400 21px "DM Sans", -apple-system, sans-serif';
    if (data.clientCompany) ctx.fillText(data.clientCompany, col1X, y + 90);
    if (data.clientContact) ctx.fillText(data.clientContact, col1X, y + 120);

    // Vertical divider in box
    const midX = PAD + CONTENT_W * 0.54;
    ctx.strokeStyle = '#EAE5DC';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(midX, y + 26);
    ctx.lineTo(midX, y + boxH - 26);
    ctx.stroke();

    // Right Meta Dates
    const metaRows = [
      [t.issueDate + ':', data.issueDate || '-'],
      [t.dueDate + ':', data.dueDate || '-'],
      [t.licenseBadge + ':', (licenseInfo.name.split('(')[0] || '').trim()]
    ];
    let my = y + 36;
    metaRows.forEach(([label, val]) => {
      ctx.fillStyle = '#6E7A8A';
      ctx.font = '400 21px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(label, midX + 32, my);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#16263B';
      ctx.font = '700 21px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(val, W - PAD - 34, my);
      ctx.textAlign = 'left';
      my += 42;
    });

    // 3. Project Title Banner
    y += boxH + 40;
    ctx.fillStyle = '#6E7A8A';
    ctx.font = '700 18px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.projectTitle.toUpperCase(), PAD, y);

    ctx.fillStyle = '#16263B';
    ctx.font = '700 31px Fraunces, Georgia, serif';
    const projLines = wrapCanvasText(ctx, data.projectTitle || '-', CONTENT_W);
    y += 28;
    projLines.forEach((pl) => {
      ctx.fillText(pl, PAD, y);
      y += 38;
    });

    // 4. Items Table
    y += 22;
    const colDescW = CONTENT_W * 0.52;
    const colQtyX = PAD + CONTENT_W * 0.61;
    const colUnitX = PAD + CONTENT_W * 0.80;
    const colTotalX = W - PAD;

    ctx.fillStyle = '#6E7A8A';
    ctx.font = '700 19px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.colDesc.toUpperCase(), PAD, y);
    ctx.textAlign = 'right';
    ctx.fillText(t.colQty.toUpperCase(), colQtyX, y);
    ctx.fillText(t.colUnit.toUpperCase(), colUnitX, y);
    ctx.fillText(t.colAmount.toUpperCase(), colTotalX, y);
    ctx.textAlign = 'left';

    y += 34;
    ctx.strokeStyle = '#16263B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    y += 20;
    data.items.forEach((item) => {
      ctx.font = '600 22px "DM Sans", -apple-system, sans-serif';
      const descLines = wrapCanvasText(ctx, item.desc || '-', colDescW - 20);
      const rowH = Math.max(46, descLines.length * 30 + 18);

      ctx.fillStyle = '#16263B';
      descLines.forEach((dl, idx) => {
        ctx.fillText(dl, PAD, y + idx * 30);
      });

      ctx.textAlign = 'right';
      ctx.font = '400 22px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(String(item.qty), colQtyX, y);
      ctx.fillText(formatMoney(item.price, cur), colUnitX, y);
      ctx.font = '700 22px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(formatMoney(item.qty * item.price, cur), colTotalX, y);
      ctx.textAlign = 'left';

      y += rowH;
      ctx.strokeStyle = '#EAE5DC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(PAD, y);
      ctx.lineTo(W - PAD, y);
      ctx.stroke();
      y += 20;
    });

    // 5. Summary & Payment Info Grid
    y += 22;
    const leftW = CONTENT_W * 0.50;
    const rightX = PAD + CONTENT_W * 0.55;
    const rightW = CONTENT_W * 0.45;

    // Left: Payment Box
    drawRoundedRect(ctx, PAD, y, leftW, 145, 20, '#FAF8F3', null);
    ctx.fillStyle = '#6E7A8A';
    ctx.font = '700 18px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.paymentMethod.toUpperCase(), PAD + 28, y + 24);

    ctx.fillStyle = '#16263B';
    ctx.font = '700 24px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(`${data.bankName} — ${data.bankAccountNo}`, PAD + 28, y + 56);

    ctx.fillStyle = '#4A5568';
    ctx.font = '400 21px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(`${t.accountHolder}: ${data.bankAccountName}`, PAD + 28, y + 94);

    if (data.customNotes) {
      let ny = y + 172;
      ctx.fillStyle = '#6E7A8A';
      ctx.font = '700 18px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(t.notesTitle.toUpperCase() + ':', PAD, ny);
      ny += 26;
      ctx.fillStyle = '#4A5568';
      ctx.font = '400 20px "DM Sans", -apple-system, sans-serif';
      wrapCanvasText(ctx, data.customNotes, leftW).forEach((nl) => {
        ctx.fillText(nl, PAD, ny);
        ny += 28;
      });
    }

    // Right: Totals Box
    let ty = y + 6;
    const drawTotalRow = (label, val, isBold = false, color = '#16263B') => {
      ctx.fillStyle = color;
      ctx.font = `${isBold ? '700' : '400'} 22px "DM Sans", -apple-system, sans-serif`;
      ctx.fillText(label, rightX, ty);
      ctx.textAlign = 'right';
      ctx.font = '700 22px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(val, W - PAD, ty);
      ctx.textAlign = 'left';
      ty += 38;
    };

    drawTotalRow(t.subtotal, formatMoney(data.subtotal, cur));
    if (data.discount > 0) {
      drawTotalRow(t.discount, `- ${formatMoney(data.discount, cur)}`, false, '#E11D48');
    }
    if (data.taxPercent > 0) {
      drawTotalRow(`${t.tax} (${data.taxPercent}%)`, formatMoney(data.taxAmount, cur));
    }

    ty += 6;
    ctx.strokeStyle = '#16263B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rightX, ty);
    ctx.lineTo(W - PAD, ty);
    ctx.stroke();
    ty += 16;

    ctx.fillStyle = '#16263B';
    ctx.font = '700 26px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.grandTotal, rightX, ty);
    ctx.textAlign = 'right';
    ctx.fillText(formatMoney(data.grandTotal, cur), W - PAD, ty);
    ctx.textAlign = 'left';
    ty += 48;

    // Due Now Highlight Pill
    drawRoundedRect(ctx, rightX, ty, rightW, 56, 16, '#D8EAE6', null);
    ctx.fillStyle = '#16263B';
    ctx.font = '700 22px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(dueLabel, rightX + 20, ty + 16);
    ctx.textAlign = 'right';
    ctx.fillText(data.paymentStage === 'paid' ? 'LUNAS ✓' : formatMoney(dueNominal, cur), W - PAD - 20, ty + 16);
    ctx.textAlign = 'left';
    ty += 70;

    if (data.paymentStage === 'dp') {
      ctx.fillStyle = '#4A5568';
      ctx.font = '500 20px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(`${t.remainingBalance} (${100 - data.dpPercent}%)`, rightX, ty);
      ctx.textAlign = 'right';
      ctx.font = '700 20px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(formatMoney(data.remainingAmount, cur), W - PAD, ty);
      ctx.textAlign = 'left';
    }

    return canvas;
  }

  function renderContractA4Canvas(data) {
    const W = 1488;
    const H = 2105;
    const PAD = 96;
    const CONTENT_W = W - PAD * 2;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const t = I18N[state.docLang] || I18N.id;
    const licenseInfo = t.licenses[data.licenseType] || t.licenses.commercial_limited;
    const sourcePolicyText =
      data.sourceFilePolicy === 'included' ? t.clauses.sourceIncluded : t.clauses.sourceExcluded;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    ctx.textBaseline = 'top';

    let y = 86;

    // 1. Top Bar
    ctx.fillStyle = '#16263B';
    ctx.font = '700 36px Fraunces, Georgia, serif';
    ctx.fillText(t.contractTitle, PAD, y);

    ctx.fillStyle = '#4A5568';
    ctx.font = '400 20px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.contractSub, PAD, y + 44);

    ctx.fillStyle = '#6E7A8A';
    ctx.font = '600 20px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(`Ref: #${data.invoiceNumber} · ${data.issueDate}`, PAD, y + 74);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#16263B';
    ctx.font = '700 25px Fraunces, Georgia, serif';
    ctx.fillText(data.creatorName || 'Nama Kreator', W - PAD, y);
    ctx.fillStyle = '#4A5568';
    ctx.font = '400 20px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(data.creatorRole || '', W - PAD, y + 34);
    ctx.textAlign = 'left';

    y += 114;
    ctx.strokeStyle = '#EAE5DC';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    // 2. Formal SPK Preamble & Parties Box
    y += 22;
    ctx.fillStyle = '#4A5568';
    ctx.font = '400 19px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.preamble.intro(data.issueDate), PAD, y);

    y += 32;
    const boxH = 198;
    drawRoundedRect(ctx, PAD, y, CONTENT_W, boxH, 20, '#FAF8F3', null);

    const col1X = PAD + 28;
    const col2X = PAD + CONTENT_W / 2 + 18;
    const colMaxW = CONTENT_W / 2 - 42;

    // Vertical divider between Party 1 & Party 2
    ctx.strokeStyle = '#EAE5DC';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD + CONTENT_W / 2, y + 20);
    ctx.lineTo(PAD + CONTENT_W / 2, y + boxH - 20);
    ctx.stroke();

    ctx.fillStyle = '#16263B';
    ctx.font = '700 16px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.preamble.party1Title, col1X, y + 20);
    ctx.fillText(t.preamble.party2Title, col2X, y + 20);

    const p1Name = data.creatorRole
      ? `${data.creatorName || '-'} (${data.creatorRole})`
      : data.creatorName || '-';
    const p2Name = data.clientCompany
      ? `${data.clientName || '-'} (${data.clientCompany})`
      : data.clientName || '-';

    ctx.fillStyle = '#16263B';
    ctx.font = '700 21px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(wrapCanvasText(ctx, p1Name, colMaxW)[0] || '-', col1X, y + 48);
    ctx.fillText(wrapCanvasText(ctx, p2Name, colMaxW)[0] || '-', col2X, y + 48);

    ctx.fillStyle = '#4A5568';
    ctx.font = '400 18px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(
      wrapCanvasText(ctx, `${t.preamble.party1ContactLabel}: ${data.creatorEmail || '-'}`, colMaxW)[0] || '',
      col1X,
      y + 82
    );
    if (data.creatorPortfolio) {
      ctx.fillText(
        wrapCanvasText(ctx, `${t.preamble.party1PortfolioLabel}: ${data.creatorPortfolio}`, colMaxW)[0] || '',
        col1X,
        y + 110
      );
    }

    const p2ContactLines = wrapCanvasText(
      ctx,
      `${t.preamble.party2ContactLabel}: ${data.clientContact || '-'}`,
      colMaxW
    );
    ctx.fillText(p2ContactLines[0] || '', col2X, y + 82);
    if (p2ContactLines[1]) {
      ctx.fillText(p2ContactLines[1], col2X, y + 108);
    }

    ctx.fillStyle = '#6E7A8A';
    ctx.font = 'italic 17px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.preamble.party1Note, col1X, y + 154);
    ctx.fillText(t.preamble.party2Note, col2X, y + 154);

    y += boxH + 20;
    ctx.fillStyle = '#4A5568';
    ctx.font = '400 19px "DM Sans", -apple-system, sans-serif';
    wrapCanvasText(ctx, t.preamble.transition, CONTENT_W).forEach((tl) => {
      ctx.fillText(tl, PAD, y);
      y += 26;
    });

    // 3. Clauses List
    y += 14;

    const clauses = [
      {
        title: t.clauses.scopeTitle,
        body: `${t.projectTitle}: ${data.projectTitle} | Deliverables: ${data.deliverablesSpec} | Timeline: ${data.deliveryDays}. ${sourcePolicyText}`
      },
      {
        title: t.clauses.paymentTitle,
        body: t.clauses.paymentBody(data.dpPercent)
      },
      {
        title: t.clauses.revisionTitle,
        body: t.clauses.revisionBody(data.maxSketchRev, data.maxFinalRev, data.extraRevFee)
      },
      {
        title: `${t.clauses.licenseTitle} — ${licenseInfo.name}`,
        body: licenseInfo.desc
      }
    ];

    if (data.clauseKillFee) {
      clauses.push({ title: t.clauses.killFeeTitle, body: t.clauses.killFeeBody });
    }
    if (data.clauseNoAI) {
      clauses.push({ title: t.clauses.aiTitle, body: t.clauses.aiBody });
    }
    if (data.clausePortfolio) {
      clauses.push({ title: t.clauses.portfolioTitle, body: t.clauses.portfolioBody });
    }
    if (data.clauseGhosting) {
      clauses.push({ title: t.clauses.ghostingTitle, body: t.clauses.ghostingBody });
    }

    clauses.forEach((c) => {
      ctx.fillStyle = '#16263B';
      ctx.font = '700 20px "DM Sans", -apple-system, sans-serif';
      ctx.fillText(c.title, PAD, y);
      y += 26;

      ctx.fillStyle = '#4A5568';
      ctx.font = '400 18.5px "DM Sans", -apple-system, sans-serif';
      const lines = wrapCanvasText(ctx, c.body, CONTENT_W);
      lines.forEach((line) => {
        ctx.fillText(line, PAD, y);
        y += 24;
      });
      y += 13;
    });

    // 4. Agreement Note & Signatures
    y += 6;
    ctx.fillStyle = '#6E7A8A';
    ctx.font = 'italic 18px "DM Sans", -apple-system, sans-serif';
    wrapCanvasText(ctx, t.sigAgreeText, CONTENT_W).forEach((al) => {
      ctx.fillText(al, PAD, y);
      y += 24;
    });

    y = Math.max(y + 24, H - 250);
    ctx.strokeStyle = '#EAE5DC';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    y += 26;
    const sig1Center = PAD + CONTENT_W * 0.25;
    const sig2Center = PAD + CONTENT_W * 0.75;

    ctx.textAlign = 'center';
    ctx.fillStyle = '#6E7A8A';
    ctx.font = '400 19px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(t.sigCreator, sig1Center, y);
    ctx.fillText(t.sigClient, sig2Center, y);

    const lineY = y + 108;
    ctx.strokeStyle = '#C5BFB3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sig1Center - 190, lineY);
    ctx.lineTo(sig1Center + 190, lineY);
    ctx.moveTo(sig2Center - 190, lineY);
    ctx.lineTo(sig2Center + 190, lineY);
    ctx.stroke();

    ctx.fillStyle = '#16263B';
    ctx.font = '700 21px "DM Sans", -apple-system, sans-serif';
    ctx.fillText(data.creatorName || '-', sig1Center, lineY + 14);
    ctx.fillText(data.clientName || '-', sig2Center, lineY + 14);
    ctx.textAlign = 'left';

    return canvas;
  }

  function dataUrlToUint8Array(dataUrl) {
    const base64 = dataUrl.split(',')[1] || '';
    const bin = atob(base64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    return bytes;
  }

  // Membuat file biner .PDF standar (PDF-1.4 A4) dari 1 atau beberapa Canvas tanpa library eksternal
  function buildPdfFromCanvases(canvases) {
    const encoder = new TextEncoder();
    const chunks = [];
    let offset = 0;
    const offsets = [0]; // index 0 unused

    const pushStr = (str) => {
      const b = encoder.encode(str);
      chunks.push(b);
      offset += b.length;
    };
    const pushBytes = (b) => {
      chunks.push(b);
      offset += b.length;
    };

    pushStr('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n');

    const numPages = canvases.length;
    const pageObjIds = [];
    for (let i = 0; i < numPages; i++) {
      pageObjIds.push(3 + i * 3);
    }

    // Object 1: Catalog
    offsets[1] = offset;
    pushStr('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

    // Object 2: Pages
    offsets[2] = offset;
    pushStr(`2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${numPages} >>\nendobj\n`);

    const PAGE_W_PT = 595.28;
    const PAGE_H_PT = 841.89;

    for (let i = 0; i < numPages; i++) {
      const canvas = canvases[i];
      const jpegBytes = dataUrlToUint8Array(canvas.toDataURL('image/jpeg', 0.94));
      const pageObjId = 3 + i * 3;
      const contentObjId = pageObjId + 1;
      const imgObjId = pageObjId + 2;

      // Page Object
      offsets[pageObjId] = offset;
      pushStr(
        `${pageObjId} 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /XObject << /Im0 ${imgObjId} 0 R >> >> /MediaBox [0 0 ${PAGE_W_PT} ${PAGE_H_PT}] /Contents ${contentObjId} 0 R >>\nendobj\n`
      );

      // Content Stream
      const contentStream = `q ${PAGE_W_PT} 0 0 ${PAGE_H_PT} 0 0 cm /Im0 Do Q`;
      offsets[contentObjId] = offset;
      pushStr(
        `${contentObjId} 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`
      );

      // Image XObject
      offsets[imgObjId] = offset;
      pushStr(
        `${imgObjId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
      );
      pushBytes(jpegBytes);
      pushStr('\nendstream\nendobj\n');
    }

    const totalObjs = 2 + numPages * 3 + 1;
    const xrefOffset = offset;
    pushStr(`xref\n0 ${totalObjs}\n0000000000 65535 f \n`);
    for (let id = 1; id < totalObjs; id++) {
      const offStr = String(offsets[id] || 0).padStart(10, '0');
      pushStr(`${offStr} 00000 n \n`);
    }
    pushStr(`trailer\n<< /Size ${totalObjs} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

    const out = new Uint8Array(offset);
    let pos = 0;
    for (const c of chunks) {
      out.set(c, pos);
      pos += c.length;
    }
    return out;
  }

  function triggerPdfFileDownload(pdfBytes, filename) {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 4000);
  }

  const pdfExportDialog = document.getElementById('pdfExportDialog');
  const openPdfExportModal = () => {
    saveWorkingDraft();
    renderDocumentPreview();
    if (pdfExportDialog && typeof pdfExportDialog.showModal === 'function') {
      pdfExportDialog.showModal();
    } else {
      // Fallback langsung unduh gabungan
      downloadPdfByMode('combined');
    }
  };

  async function downloadPdfByMode(mode) {
    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch {
      // Continue with fallback fonts
    }

    const data = getFormData();
    const cleanInv = sanitizeFilename(data.invoiceNumber || 'INV-001');
    const cleanClient = sanitizeFilename(data.clientName || 'Klien');

    if (mode === 'combined') {
      const invCanvas = renderInvoiceA4Canvas(data);
      const spkCanvas = renderContractA4Canvas(data);
      const pdfBytes = buildPdfFromCanvases([invCanvas, spkCanvas]);
      const filename = `Invoice-dan-SPK-${cleanInv}-${cleanClient}.pdf`;
      triggerPdfFileDownload(pdfBytes, filename);
      pdfExportDialog?.close();
      showToast(`✅ Diunduh: ${filename} (Gabung 1 File)`);
    } else if (mode === 'separate') {
      const invCanvas = renderInvoiceA4Canvas(data);
      const spkCanvas = renderContractA4Canvas(data);
      const invBytes = buildPdfFromCanvases([invCanvas]);
      const spkBytes = buildPdfFromCanvases([spkCanvas]);
      const invFile = `Invoice-${cleanInv}-${cleanClient}.pdf`;
      const spkFile = `SPK-Kontrak-${cleanInv}-${cleanClient}.pdf`;

      triggerPdfFileDownload(invBytes, invFile);
      setTimeout(() => {
        triggerPdfFileDownload(spkBytes, spkFile);
      }, 450);

      pdfExportDialog?.close();
      showToast('✅ 2 File PDF Terpisah (Invoice & SPK) berhasil diunduh!');
    } else if (mode === 'invoice') {
      const invCanvas = renderInvoiceA4Canvas(data);
      const invBytes = buildPdfFromCanvases([invCanvas]);
      const invFile = `Invoice-${cleanInv}-${cleanClient}.pdf`;
      triggerPdfFileDownload(invBytes, invFile);
      pdfExportDialog?.close();
      showToast(`✅ Diunduh: ${invFile}`);
    } else if (mode === 'contract') {
      const spkCanvas = renderContractA4Canvas(data);
      const spkBytes = buildPdfFromCanvases([spkCanvas]);
      const spkFile = `SPK-Kontrak-${cleanInv}-${cleanClient}.pdf`;
      triggerPdfFileDownload(spkBytes, spkFile);
      pdfExportDialog?.close();
      showToast(`✅ Diunduh: ${spkFile}`);
    }
  }

  // Save & PDF Export triggers
  document.getElementById('btnSaveDraft')?.addEventListener('click', saveCurrentProject);
  document.getElementById('btnPrintTop')?.addEventListener('click', openPdfExportModal);
  document.getElementById('btnPrintDoc')?.addEventListener('click', openPdfExportModal);

  document.getElementById('btnDownloadCombinedPdf')?.addEventListener('click', () => downloadPdfByMode('combined'));
  document.getElementById('btnDownloadSeparatePdfs')?.addEventListener('click', () => downloadPdfByMode('separate'));
  document.getElementById('btnDownloadInvoiceOnlyPdf')?.addEventListener('click', () => downloadPdfByMode('invoice'));
  document.getElementById('btnDownloadContractOnlyPdf')?.addEventListener('click', () => downloadPdfByMode('contract'));

  document.getElementById('btnSystemPrintDialog')?.addEventListener('click', () => {
    pdfExportDialog?.close();
    switchView('preview');
    setTimeout(() => window.print(), 150);
  });

  document.getElementById('btnClosePdfModal')?.addEventListener('click', () => pdfExportDialog?.close());
  document.getElementById('btnCancelPdfModal')?.addEventListener('click', () => pdfExportDialog?.close());
  pdfExportDialog?.addEventListener('click', (e) => {
    if (e.target === pdfExportDialog) pdfExportDialog.close();
  });

  // Rate Calculator listeners + auto-save
  const handleCalcUpdate = () => {
    updateRateCalculator();
    saveWorkingDraft();
  };
  CALC_FIELD_IDS.forEach((id) => {
    document.getElementById(id)?.addEventListener('input', handleCalcUpdate);
    document.getElementById(id)?.addEventListener('change', handleCalcUpdate);
  });

  // Apply Calculator Result to Invoice
  document.getElementById('btnApplyCalcToInvoice')?.addEventListener('click', () => {
    const res = updateRateCalculator();
    document.getElementById('projectTitle').value = res.category;
    document.getElementById('currency').value = 'IDR';
    document.getElementById('licenseType').value = res.licenseKey;
    document.getElementById('sourceFilePolicy').value = res.includeSource ? 'included' : 'excluded';

    const newItems = [
      {
        id: Date.now() + 1,
        desc: `${res.category} — Produksi Visual & Revisi Standar`,
        qty: 1,
        price: res.baseProduction
      }
    ];

    if (res.licenseFee > 0) {
      newItems.push({
        id: Date.now() + 2,
        desc: 'Biaya Lisensi Penggunaan Komersial',
        qty: 1,
        price: res.licenseFee
      });
    }

    if (res.addonFee > 0) {
      newItems.push({
        id: Date.now() + 3,
        desc: 'Biaya Tambahan (Express / File Mentah)',
        qty: 1,
        price: res.addonFee
      });
    }

    state.items = newItems;
    renderLineItemsEditor();
    renderDocumentPreview();
    switchView('editor');
    saveWorkingDraft();
    showToast('Harga dimasukkan ke Invoice');
  });

  // Register Service Worker & Handle Multi-Platform Install Prompt (PWA)
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  let deferredInstallPrompt = null;
  const btnInstall = document.getElementById('btnInstallApp');
  const installDialog = document.getElementById('installDialog');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });

  btnInstall?.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        showToast('ArtVoice berhasil di-install!');
      }
      deferredInstallPrompt = null;
    } else if (installDialog && typeof installDialog.showModal === 'function') {
      installDialog.showModal();
    } else {
      showToast('Gunakan menu File -> Add to Dock (Safari) atau ikon Install di kanan atas Chrome');
    }
  });

  document.getElementById('btnCloseInstallModal')?.addEventListener('click', () => installDialog?.close());
  document.getElementById('btnOkInstallModal')?.addEventListener('click', () => installDialog?.close());
  installDialog?.addEventListener('click', (e) => {
    if (e.target === installDialog) installDialog.close();
  });

  // ==========================================
  // SISTEM LISENSI & GENERATOR KODE UNIK (LYNK.ID / KARYAKARSA)
  // ==========================================
  const LICENSE_STORAGE_KEY = 'artvoice_license_unlocked_v1';
  const MASTER_KEYS = new Set([
    'ARTVOICE-PRO-2026',
    'ARTVOICE-LYNK-VIP',
    'ARTVOICE-KREATOR-ID'
  ]);

  // Fungsi membuat checksum 4 karakter dari 4 karakter acak (tanpa database server)
  function computeKeyBlock2(block1) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let sum = 19;
    for (let i = 0; i < block1.length; i++) {
      sum = (sum * 31 + block1.charCodeAt(i)) % 99991;
    }
    let out = '';
    for (let i = 0; i < 4; i++) {
      out += chars[(sum + i * 17) % chars.length];
      sum = Math.floor(sum / 3) + 11;
    }
    return out;
  }

  function generateUniqueBuyerKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let block1 = '';
    for (let i = 0; i < 4; i++) {
      block1 += chars[Math.floor(Math.random() * chars.length)];
    }
    const block2 = computeKeyBlock2(block1);
    return `ARTVOICE-${block1}-${block2}`;
  }

  function isValidLicenseKey(rawKey) {
    const clean = String(rawKey || '').trim().toUpperCase();
    if (MASTER_KEYS.has(clean)) return true;
    const match = /^ARTVOICE-([A-Z0-9]{4})-([A-Z0-9]{4})$/.exec(clean);
    if (!match) return false;
    return computeKeyBlock2(match[1]) === match[2];
  }

  const licenseGate = document.getElementById('licenseGate');
  const appShell = document.getElementById('appShell');
  const licenseForm = document.getElementById('licenseForm');
  const licenseInput = document.getElementById('licenseInput');
  const licenseError = document.getElementById('licenseError');
  const adminKeyDialog = document.getElementById('adminKeyDialog');

  function setAppUnlocked(unlocked) {
    if (licenseGate) licenseGate.hidden = unlocked;
    if (appShell) appShell.hidden = !unlocked;
  }

  // Cek apakah sudah pernah di-unlock, membuka parameter ?admin=owner, atau membeli lewat Link Khusus (?key=...)
  const urlParams = new URLSearchParams(window.location.search);
  const urlKey = urlParams.get('key') || urlParams.get('kode') || '';

  if (urlParams.get('admin') === 'owner') {
    localStorage.setItem(LICENSE_STORAGE_KEY, 'ARTVOICE-PRO-2026');
  } else if (urlKey && isValidLicenseKey(urlKey)) {
    localStorage.setItem(LICENSE_STORAGE_KEY, urlKey.trim().toUpperCase());
    // Bersihkan parameter ?key= dari address bar setelah berhasil disimpan agar link terlihat bersih
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    setTimeout(() => showToast('🎉 Lisensi VIP Aktif! Selamat datang di ArtVoice.'), 300);
  }

  setAppUnlocked(Boolean(localStorage.getItem(LICENSE_STORAGE_KEY)));

  if (urlParams.get('admin') === 'owner' && adminKeyDialog) {
    setTimeout(() => adminKeyDialog.showModal(), 250);
  }

  licenseForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = licenseInput?.value || '';
    if (isValidLicenseKey(code)) {
      localStorage.setItem(LICENSE_STORAGE_KEY, code.trim().toUpperCase());
      setAppUnlocked(true);
      if (licenseError) licenseError.hidden = true;
      showToast('🎉 Kode Akses Valid! Selamat datang di ArtVoice.');
    } else {
      if (licenseError) licenseError.hidden = false;
    }
  });

  // Pintasan Rahasia Pemilik: Klik 5x pada titik oranye logo ArtVoice untuk membuka Generator Kode
  let brandTapCount = 0;
  let brandTapTimer = null;
  document.getElementById('btnGoHome')?.addEventListener('click', () => {
    brandTapCount++;
    clearTimeout(brandTapTimer);
    brandTapTimer = setTimeout(() => {
      brandTapCount = 0;
    }, 1500);
    if (brandTapCount >= 5) {
      brandTapCount = 0;
      adminKeyDialog?.showModal();
    }
  });

  // Tombol di dalam Modal Admin Generator Kode
  document.getElementById('btnGenerateNewKey')?.addEventListener('click', () => {
    const newKey = generateUniqueBuyerKey();
    const disp = document.getElementById('generatedKeyDisplay');
    if (disp) disp.textContent = newKey;
  });

  document.getElementById('btnCopyGeneratedKey')?.addEventListener('click', () => {
    const keyText = document.getElementById('generatedKeyDisplay')?.textContent?.trim() || 'ARTVOICE-PRO-2026';
    navigator.clipboard.writeText(keyText).then(() => {
      showToast(`Kode ${keyText} disalin!`);
    });
  });

  document.getElementById('btnRelockApp')?.addEventListener('click', () => {
    localStorage.removeItem(LICENSE_STORAGE_KEY);
    adminKeyDialog?.close();
    setAppUnlocked(false);
    if (licenseInput) licenseInput.value = '';
    showToast('🔒 Aplikasi dikunci kembali untuk tes tampilan pembeli');
  });

  document.getElementById('btnCloseAdminModal')?.addEventListener('click', () => adminKeyDialog?.close());
  document.getElementById('btnOkAdminModal')?.addEventListener('click', () => adminKeyDialog?.close());
});




