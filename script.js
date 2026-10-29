/* ==========================================
   E-PORTOFOLIO DIGITAL - INTERACTIVE LOGIC SCRIPT
   Gateway & Dedicated 5-Nav E-Portofolio 1 View
   ========================================== */

// Portfolio Modal Data (For Card 2 & 3)
const portfolioData = {
    2: {
        tag: "PPL MANDIRI • PRAKTIK PEMBELAJARAN",
        title: "PPL Mandiri - Sekolah Mitra",
        content: `
            <p>Bagian ini mendokumentasikan perangkat praktik pembelajaran, pelaksanaan kegiatan mengajar mandiri, serta dokumentasi dan laporan komprehensif di sekolah mitra.</p>
            <br>
            <h4 style="color:#34d399; margin-bottom: 8px;">Fokus Utama:</h4>
            <ul style="color: #cbd5e1; font-size: 14px; line-height: 1.8;">
                <li><strong>Perangkat Praktik:</strong> Modul ajar, jobsheet, LKPD, media pembelajaran interaktif, dan rubrik asesmen.</li>
                <li><strong>Dokumentasi Kegiatan:</strong> Rekaman video praktik pembelajaran di kelas & bengkel mesin sekolah mitra.</li>
                <li><strong>Refleksi & Evaluasi:</strong> Ulasan ketercapaian pembelajaran, kolaborasi dengan guru pamong, dan tindak lanjut.</li>
            </ul>
        `
    },
    3: {
        tag: "E-PORTOFOLIO 3 • PROYEK & KARYA",
        title: "Kumpulan Proyek, Inovasi & Portofolio Karya",
        content: `
            <p>Menampilkan galeri karya, produk hasil pembelajaran, inovasi teknologi, serta dokumentasi proyek akademik dan pengembangan profesionalisme pendidik.</p>
            <br>
            <h4 style="color:#c084fc; margin-bottom: 8px;">Kategori Karya:</h4>
            <ul style="color: #cbd5e1; font-size: 14px; line-height: 1.8;">
                <li><strong>Proyek Inovasi Vokasi:</strong> Hasil perancangan media peraga & produk Teknik Mesin.</li>
                <li><strong>Karya Ilmiah & Artikel:</strong> Publikasi riset tindakan kelas dan artikel edukasi.</li>
                <li><strong>Kegiatan Pengembangan Diri:</strong> Sertifikasi kompetensi, workshop, dan kontribusi komunitas.</li>
            </ul>
        `
    }
};

// Document Data for E-Portofolio 1
const docData = {
    'modul-ajar': {
        tag: "DOKUMEN 01 • MODUL AJAR",
        title: "Modul Ajar / RPP Inovatif Teknik Mesin",
        content: `
            <p>Modul Ajar ini dirancang khusus untuk pembelajaran vokasi Teknik Mesin dengan pendekatan <strong>Project-Based Learning (PJBL)</strong> dan <strong>Problem-Based Learning (PBL)</strong> yang mengacu pada Kurikulum Merdeka.</p>
            <br>
            <h4 style="color:#60a5fa;">Komponen Utama RPP:</h4>
            <ul>
                <li><strong>Capaian Pembelajaran (CP):</strong> Penguasaan pengoperasian dan pemeliharaan mesin manufaktur (bubut, frais, CNC).</li>
                <li><strong>Tujuan Pembelajaran (TP):</strong> Mengolah benda kerja presisi sesuai gambar teknik dan standar K3 permesinan.</li>
                <li><strong>Modul Diferensiasi:</strong> Penyesuaian pendampingan berdasarkan kesiapan praktikum dan minat siswa.</li>
                <li><strong>Media & Alat:</strong> Jobsheet praktikum, simulator CNC, dan video peraga langkah kerja.</li>
            </ul>
        `
    },
    'bahan-ajar': {
        tag: "DOKUMEN 02 • BAHAN & MEDIA AJAR",
        title: "Materi Pembelajaran S2 & Media Digital Interaktif",
        content: `
            <p>Menyediakan kumpulan bahan ajar digital, e-modul terstruktur, presentasi interaktif, serta media peraga visual yang membantu mempermudah siswa memahami materi abstrak permesinan.</p>
            <br>
            <h4 style="color:#34d399;">Rincian Media:</h4>
            <ul>
                <li><strong>Modul Digital S2:</strong> Materi mendalam proses pemotongan logam dan parametrik mesin CNC.</li>
                <li><strong>Presentasi Interaktif Canva & Slides:</strong> Visualisasi 3D elemen mesin dan mekanisme kerja transmisi.</li>
                <li><strong>Video Tutorial Praktikum:</strong> Rekaman instruksi praktikum bertahap untuk dipelajari sebelum masuk bengkel.</li>
            </ul>
        `
    },
    'lkm-asesmen': {
        tag: "DOKUMEN 03 • ASESMEN & EVALUASI",
        title: "LKM / LKPD & Rubrik Penilaian Kinerja Praktik",
        content: `
            <p>Instrumen penilaian komprehensif yang dirancang untuk mengukur aspek sikap (safety culture), pengetahuan teknis, dan keterampilan praktikum permesinan.</p>
            <br>
            <h4 style="color:#c084fc;">Cakupan Asesmen:</h4>
            <ul>
                <li><strong>Asesmen Diagnostik:</strong> Pemetaan pengetahuan awal dan preferensi belajar siswa.</li>
                <li><strong>Lembar Kerja Mahasiswa/Siswa (LKM):</strong> Panduan pengerjaan jobsheet dan lembar analisis produk.</li>
                <li><strong>Rubrik Kinerja Praktik:</strong> Penilaian kepresisian dimensi (toleransi mm), kehalusan permukaan, dan penerapan K3.</li>
            </ul>
        `
    },
    'jurnal-ppl': {
        tag: "DOKUMEN 04 • JURNAL SIKLUS PPL",
        title: "Jurnal Refleksi Siklus Praktik Pengalaman Lapangan",
        content: `
            <p>Catatan harian dan mingguan pelaksanaan PPL Terbimbing di SMK mitra, mencakup observasi lingkungan sekolah, refleksi pengajaran mandiri, serta catatan supervisor.</p>
            <br>
            <h4 style="color:#fbbf24;">Fokus Evaluasi:</h4>
            <ul>
                <li><strong>Observasi Kelas:</strong> Manajemen waktu praktikum, pengondisian siswa di bengkel mesin, dan interaksi pengajaran.</li>
                <li><strong>Umpan Balik Guru Pamong:</strong> Masukan konstruktif peningkatan teknik pengelolaan bengkel dan komunikasi efektif.</li>
                <li><strong>Tindak Lanjut Siklus:</strong> Perbaikan strategi pengajaran pada pertemuan praktikum berikutnya.</li>
            </ul>
        `
    }
};

// Course Reflection Data for E-Portofolio 1
const refData = {
    'fppn': {
        tag: "REFLEKSI MATA KULIAH 01",
        title: "Filosofi Pendidikan dan Pendidikan Nilai",
        pdfUrl: "https://drive.google.com/file/d/14xQeAFDD3TY-fSiNbkhm0cDXFt9_tm7b/view?usp=drive_link",
        id: "12hrSJKguAsM-ueeLqLcaVvjbrfjsxS-M",
        driveUrl: "https://docs.google.com/presentation/d/12hrSJKguAsM-ueeLqLcaVvjbrfjsxS-M/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/12hrSJKguAsM-ueeLqLcaVvjbrfjsxS-M/preview",
        embedUrl: "https://drive.google.com/file/d/12hrSJKguAsM-ueeLqLcaVvjbrfjsxS-M/preview",
        presentUrl: "https://docs.google.com/presentation/d/12hrSJKguAsM-ueeLqLcaVvjbrfjsxS-M/present",
        content: `
            <p>Mata kuliah ini memperkuat pemahaman mendalam tentang pandangan Ki Hajar Dewantara mengenai pendidikan yang memerdekakan, asas Sistem Among, serta internalisasi nilai-nilai etika dan moral dalam pendidikan vokasi.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Kodrat Alam & Zaman:</strong> Mengintegrasikan pembelajaran teknik dengan perkembangan teknologi modern tanpa menanggalkan nilai etika dan budaya bangsa.</li>
                <li><strong>Pendidikan Nilai & Menuntun Bakat:</strong> Menuntun peserta didik agar tumbuh menjadi teknisi dan insan berkarakter mulia.</li>
            </ul>
        `
    },
    'pdp': {
        tag: "REFLEKSI MATA KULIAH 02",
        title: "Peserta Didik dan Pemahamannya",
        pdfUrl: "https://drive.google.com/file/d/1zQ07IpMywoxMy6nsqp5M15c_OHczUzr8/view?usp=drive_link",
        id: "1RwYgYxRdWQRwU6UeWqdC7NAJt1obIdik",
        driveUrl: "https://docs.google.com/presentation/d/1RwYgYxRdWQRwU6UeWqdC7NAJt1obIdik/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1RwYgYxRdWQRwU6UeWqdC7NAJt1obIdik/preview",
        embedUrl: "https://drive.google.com/file/d/1RwYgYxRdWQRwU6UeWqdC7NAJt1obIdik/preview",
        presentUrl: "https://docs.google.com/presentation/d/1RwYgYxRdWQRwU6UeWqdC7NAJt1obIdik/present",
        content: `
            <p>Membahas latar belakang perkembangan fisik, kognitif, sosio-emosional, dan keberagaman karakteristik peserta didik agar guru mampu menyusun pembelajaran yang berpusat pada peserta didik.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Pemetaan Profil Belajar:</strong> Menyesuaikan metode pengajaran praktikum dan teori berdasarkan gaya belajar serta kesiapan peserta didik.</li>
                <li><strong>Zone of Proximal Development (ZPD):</strong> Memberikan pendampingan (scaffolding) yang tepat saat peserta didik menghadapi tantangan pembelajaran.</li>
            </ul>
        `
    },
    'pmad': {
        tag: "REFLEKSI MATA KULIAH 03",
        title: "Pembelajaran Mendalam & Asesmen Dasar",
        pdfUrl: "https://drive.google.com/file/d/16geMpQYu9GjFoUhoxwoHADQOFWO1y0eN/view?usp=drive_link",
        id: "1Q6N7aiKtZHllsi02IXRLeEnliEX5SqAQ",
        driveUrl: "https://docs.google.com/presentation/d/1Q6N7aiKtZHllsi02IXRLeEnliEX5SqAQ/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1Q6N7aiKtZHllsi02IXRLeEnliEX5SqAQ/preview",
        embedUrl: "https://drive.google.com/file/d/1Q6N7aiKtZHllsi02IXRLeEnliEX5SqAQ/preview",
        presentUrl: "https://docs.google.com/presentation/d/1Q6N7aiKtZHllsi02IXRLeEnliEX5SqAQ/present",
        content: `
            <p>Fokus pada perancangan pembelajaran mendalam (Deep Learning) serta penyusunan asesmen dasar yang objektif, valid, dan reliabel untuk mengukur ketercapaian pemahaman peserta didik.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Understanding by Design (UbD):</strong> Merancang alur pembelajaran mulai dari penetapan tujuan akhir hingga penyusunan kriteria asesmen dasar.</li>
                <li><strong>Asesmen Formatif & Sumatif:</strong> Mengukur perkembangan konsep dasar dan keterampilan peserta didik secara terencana dan terstruktur.</li>
            </ul>
        `
    },
    'pplt': {
        tag: "REFLEKSI MATA KULIAH 04",
        title: "PPL Terbimbing",
        pdfUrl: "https://drive.google.com/file/d/1wyEUTjFSmX9nk-lXp5r9apuYhY6mmeLc/view?usp=drive_link",
        id: "1NwDyqxjKwKHd6cJE3JTRELy5lZKmr-yG",
        driveUrl: "https://docs.google.com/presentation/d/1NwDyqxjKwKHd6cJE3JTRELy5lZKmr-yG/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1NwDyqxjKwKHd6cJE3JTRELy5lZKmr-yG/preview",
        embedUrl: "https://drive.google.com/file/d/1NwDyqxjKwKHd6cJE3JTRELy5lZKmr-yG/preview",
        presentUrl: "https://docs.google.com/presentation/d/1NwDyqxjKwKHd6cJE3JTRELy5lZKmr-yG/present",
        content: `
            <p>Pengalaman terbimbing langsung di sekolah mitra mencakup observasi lingkungan sekolah, asistensi mengajar, hingga praktik mengajar terbimbing di bawah arahan Guru Pamong dan Dosen Pembimbing Lapangan.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Asistensi & Pengelolaan Kelas:</strong> Mengenal dinamika kelas, pengelolaan ruang praktikum, dan budaya kerja sekolah mitra.</li>
                <li><strong>Umpan Balik Konstruktif:</strong> Menerima masukan evaluatif dari Guru Pamong untuk perbaikan metode mengajar secara berkesinambungan.</li>
            </ul>
        `
    },
    'ppb': {
        tag: "REFLEKSI 4C",
        title: "Growth Mindset",
        pdfUrl: "https://drive.google.com/file/d/1FS57Vs_HPRx4YhbyPJ-YK8OJnyuRESb_/view?usp=drive_link",
        id: "1mzxD6j2fUO2Wet-U7b6jFzeadKPVkMc4",
        driveUrl: "https://docs.google.com/presentation/d/1mzxD6j2fUO2Wet-U7b6jFzeadKPVkMc4/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1mzxD6j2fUO2Wet-U7b6jFzeadKPVkMc4/preview",
        embedUrl: "https://drive.google.com/file/d/1mzxD6j2fUO2Wet-U7b6jFzeadKPVkMc4/preview",
        presentUrl: "https://docs.google.com/presentation/d/1mzxD6j2fUO2Wet-U7b6jFzeadKPVkMc4/present",
        content: `
            <p>Mengembangkan keyakinan bahwa kemampuan dan kecerdasan dapat ditingkatkan melalui usaha, strategi yang tepat, serta proses refleksi yang konsisten.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Resiliensi Keguruan:</strong> Menganggap tantangan mengajar dan kegagalan sebagai kesempatan berharga untuk belajar dan berkembang.</li>
                <li><strong>Refleksi Diri Berkelanjutan:</strong> Membiasakan evaluasi kritis terhadap setiap tindakan pembelajaran yang telah dilaksanakan.</li>
            </ul>
        `
    },
    'se1': {
        tag: "REFLEKSI MATA KULIAH 06",
        title: "Selektif / Elektif 1",
        pdfUrl: "https://drive.google.com/file/d/15GkbxrhFIU9NrEu11yv5CUGVY-s155nX/view?usp=drive_link",
        id: "1rZP4PgTlNFwdyq0bG3I9oCb9wgDduVg8",
        driveUrl: "https://docs.google.com/presentation/d/1rZP4PgTlNFwdyq0bG3I9oCb9wgDduVg8/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1rZP4PgTlNFwdyq0bG3I9oCb9wgDduVg8/preview",
        embedUrl: "https://drive.google.com/file/d/1rZP4PgTlNFwdyq0bG3I9oCb9wgDduVg8/preview",
        presentUrl: "https://docs.google.com/presentation/d/1rZP4PgTlNFwdyq0bG3I9oCb9wgDduVg8/present",
        content: `
            <p>Pendalaman bidang kajian khusus/elektif untuk memperkuat keahlian spesifik peserta program PPG sesuai tuntutan perkembangan ilmu pengetahuan dan kebutuhan dunia kerja.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Penguatan Spesialisasi:</strong> Menguasai kompetensi bidang keahlian vokasi tingkat lanjut.</li>
                <li><strong>Relevansi Industri:</strong> Menghubungkan materi spesifik dengan standar serta praktik kerja di dunia usaha dan industri.</li>
            </ul>
        `
    },
    'pse': {
        tag: "REFLEKSI MATA KULIAH 07",
        title: "Pembelajaran Sosial Emosional",
        pdfUrl: "https://drive.google.com/file/d/1RW-8qGfs1LvImV8wHYUPasmDC-3I_W1H/view?usp=drive_link",
        id: "1QPT3D_dlaSIu8mab7bAV3EQZSNej0wr-",
        driveUrl: "https://docs.google.com/presentation/d/1QPT3D_dlaSIu8mab7bAV3EQZSNej0wr-/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1QPT3D_dlaSIu8mab7bAV3EQZSNej0wr-/preview",
        embedUrl: "https://drive.google.com/file/d/1QPT3D_dlaSIu8mab7bAV3EQZSNej0wr-/preview",
        presentUrl: "https://docs.google.com/presentation/d/1QPT3D_dlaSIu8mab7bAV3EQZSNej0wr-/present",
        content: `
            <p>Penerapan 5 kompetensi sosial-emosional (Kesadaran Diri, Manajemen Diri, Kesadaran Sosial, Keterampilan Relasi, dan Pengambilan Keputusan yang Bertanggung Jawab) dalam lingkungan belajar.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Well-being Pendidik & Siswa:</strong> Menciptakan suasana belajar yang kondusif, inklusif, dan mendukung kesejahteraan mental seluruh warga kelas.</li>
                <li><strong>Teknik STOP & Mindful Learning:</strong> Mengintegrasikan latihan kesadaran penuh untuk mengelola stres dan meningkatkan fokus belajar.</li>
            </ul>
        `
    },
    'pmal': {
        tag: "REFLEKSI MATA KULIAH 08",
        title: "Pembelajaran Mendalam dan Asesmen Lanjut",
        pdfUrl: "https://drive.google.com/file/d/1n9Yx0XnUwSzL3rn2SDFXN3LK8U6Qgifx/view?usp=drive_link",
        id: "1PPhU_dza5izxWvuN547svY49bk9w3hK7",
        driveUrl: "https://docs.google.com/presentation/d/1PPhU_dza5izxWvuN547svY49bk9w3hK7/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1PPhU_dza5izxWvuN547svY49bk9w3hK7/preview",
        embedUrl: "https://drive.google.com/file/d/1PPhU_dza5izxWvuN547svY49bk9w3hK7/preview",
        presentUrl: "https://docs.google.com/presentation/d/1PPhU_dza5izxWvuN547svY49bk9w3hK7/present",
        content: `
            <p>Pengembangan rancangan pembelajaran mendalam berintegrasi tingkat tinggi serta teknik asesmen autentik dan berkelanjutan untuk mengukur berpikir tingkat tinggi (HOTS).</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Penilaian Otentik Lanjut:</strong> Menyusun rubrik performa kompleks dan penilaian berbasis proyek (Project-Based Assessment).</li>
                <li><strong>Pembelajaran Diferensiasi Kompleks:</strong> Merumuskan strategi intervensi dan perancangan tugas tingkat lanjut sesuai diferensiasi peserta didik.</li>
            </ul>
        `
    },
    'pplm': {
        tag: "REFLEKSI MATA KULIAH 09",
        title: "Praktik Pengalaman Lapangan (PPL) Mandiri",
        pdfUrl: "https://drive.google.com/file/d/16--lglntra-dt0QONzxfrtRHX-RPhIVE/view?usp=drive_link",
        id: "1Gi4vxo9sVAg3nN9ojvTRt4YI4wQDcIIt",
        driveUrl: "https://docs.google.com/presentation/d/1Gi4vxo9sVAg3nN9ojvTRt4YI4wQDcIIt/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1Gi4vxo9sVAg3nN9ojvTRt4YI4wQDcIIt/preview",
        embedUrl: "https://drive.google.com/file/d/1Gi4vxo9sVAg3nN9ojvTRt4YI4wQDcIIt/preview",
        presentUrl: "https://docs.google.com/presentation/d/1Gi4vxo9sVAg3nN9ojvTRt4YI4wQDcIIt/present",
        content: `
            <p>Pelaksanaan pengajaran secara penuh dan mandiri di sekolah mitra, mengambil peran utama sebagai pendidik profesional dalam merancang, melaksanakan, dan mengevaluasi pembelajaran.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Kemandirian Mengajar:</strong> Mengelola seluruh proses pembelajaran secara mandiri mulai dari perencanaan hingga asesmen akhir.</li>
                <li><strong>Studi Kasus Pembelajaran:</strong> Menemukan solusi atas permasalahan nyata di kelas melalui Penelitian Tindakan Kelas (PTK) / Studi Kasus.</li>
            </ul>
        `
    },
    'pk': {
        tag: "REFLEKSI MATA KULIAH 10",
        title: "Projek Kepemimpinan",
        pdfUrl: "https://drive.google.com/file/d/1egewT4bFiQt0ruYf7hR5ihyJ0kBgK5zf/view?usp=drive_link",
        id: "1DCOz4HJb2p6rOGYt9nwnhrd7YDLQ0iCO",
        driveUrl: "https://docs.google.com/presentation/d/1DCOz4HJb2p6rOGYt9nwnhrd7YDLQ0iCO/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1DCOz4HJb2p6rOGYt9nwnhrd7YDLQ0iCO/preview",
        embedUrl: "https://drive.google.com/file/d/1DCOz4HJb2p6rOGYt9nwnhrd7YDLQ0iCO/preview",
        presentUrl: "https://docs.google.com/presentation/d/1DCOz4HJb2p6rOGYt9nwnhrd7YDLQ0iCO/present",
        content: `
            <p>Perancangan dan eksekusi proyek kepemimpinan yang berdampak nyata bagi komunitas sekolah atau masyarakat luas dengan mengedepankan prinsip kepemimpinan transformatif.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Service Learning & Inovasi:</strong> Mengidentifikasi tantangan komunitas dan merancang solusi inovatif berkelanjutan.</li>
                <li><strong>Kolaborasi Multistakeholder:</strong> Memimpin tim, membangun jaringan kerja sama, dan mengelola sumber daya secara efektif.</li>
            </ul>
        `
    },
    'se2': {
        tag: "REFLEKSI MATA KULIAH 11",
        title: "Pilihan Selektif/ Elektif",
        pdfUrl: "https://drive.google.com/file/d/1nbSGkV9KVAZF9UuAkFqn31A9GQvTf9QD/view?usp=drive_link",
        id: "1Vu-sx_Hoa7LESvYwm6VoZrQPOVSxUFjk",
        driveUrl: "https://docs.google.com/presentation/d/1Vu-sx_Hoa7LESvYwm6VoZrQPOVSxUFjk/edit?usp=drive_link&ouid=112677128706717062608&rtpof=true&sd=true",
        previewUrl: "https://drive.google.com/file/d/1Vu-sx_Hoa7LESvYwm6VoZrQPOVSxUFjk/preview",
        embedUrl: "https://drive.google.com/file/d/1Vu-sx_Hoa7LESvYwm6VoZrQPOVSxUFjk/preview",
        presentUrl: "https://docs.google.com/presentation/d/1Vu-sx_Hoa7LESvYwm6VoZrQPOVSxUFjk/present",
        content: `
            <p>Pendalaman kelanjutan dari mata kuliah pilihan elektif untuk melengkapi penguasaan keahlian spesifik keguruan vokasi yang adaptif dan berdaya saing.</p>
            <br>
            <h4 style="color:#c084fc;">Poin Refleksi Utama:</h4>
            <ul>
                <li><strong>Integrasi Interdisipliner:</strong> Memadukan konsep elektif lanjutan dengan praktik pembelajaran vokasi masa depan.</li>
                <li><strong>Pengembangan Profesionalisme:</strong> Mempersiapkan diri secara menyeluruh untuk menghadapi dinamika dunia pendidikan modern.</li>
            </ul>
        `
    }
};

/**
 * Open E-Portofolio 1 View
 * Triggers when user clicks "Masuk Portofolio 1"
 */
function openPortfolio1() {
    const mainGateway = document.getElementById('main-gateway-view');
    const portfolio1 = document.getElementById('portfolio1-view');

    if (mainGateway && portfolio1) {
        mainGateway.classList.remove('active');
        setTimeout(() => {
            portfolio1.classList.add('active');
            switchTab('beranda');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }
}

/**
 * Close E-Portofolio 1 View & Return to Main Gateway
 */
function closePortfolio1() {
    const mainGateway = document.getElementById('main-gateway-view');
    const portfolio1 = document.getElementById('portfolio1-view');

    if (mainGateway && portfolio1) {
        portfolio1.classList.remove('active');
        setTimeout(() => {
            mainGateway.classList.add('active');
            showSlide(2); // Keep on 3-cards grid slide
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }
}

/**
 * Switch Active Tab inside E-Portofolio 1
 */
function switchTab(tabId) {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('mobile-active')) {
        navMenu.classList.remove('mobile-active');
    }

    const panes = document.querySelectorAll('#portfolio1-view .tab-pane');
    panes.forEach(pane => {
        pane.classList.remove('active');
    });

    const targetPane = document.getElementById('tab-' + tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Open Portfolio Modal Detail (Card 2 & 3)
 */
let activeUploadKey = null;

/**
 * Open Portfolio Modal Detail (Card 2 & 3)
 */
function openPortfolio(id) {
    const data = portfolioData[id];
    if (data) {
        showModal(data.tag, data.title, data.content, 'portfolio_' + id);
    }
}

/**
 * Open Document Detail Modal
 */
function openDocModal(docKey) {
    const data = docData[docKey];
    if (data) {
        showModal(data.tag, data.title, data.content, docKey);
    }
}

/**
 * Open Course Reflection Modal
 */
function openRefModal(refKey) {
    const data = refData[refKey];
    if (data) {
        let contentWithSlide = data.content;
        if (data.driveUrl || data.embedUrl) {
            const downloadLink = data.id ? `https://docs.google.com/presentation/d/${data.id}/export/pptx` : (data.driveUrl || '#');
            contentWithSlide += `
                <div style="background:linear-gradient(135deg, rgba(2,132,199,0.15), rgba(15,23,42,0.6)); border:1px solid rgba(56,189,248,0.3); border-radius:12px; padding:16px; margin-top:24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid fa-file-powerpoint" style="font-size:26px; color:#f59e0b;"></i>
                        <div>
                            <div style="font-weight:700; color:#fff; font-size:14px; font-family:'Outfit';">Berkas & Presentasi Slide PPT</div>
                            <div style="font-size:12px; color:#94a3b8;">Lihat presentasi interaktif atau unduh dokumen PPT</div>
                        </div>
                    </div>
                    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                        <button onclick="openSlideModal('${refKey}')" style="background:var(--gold-gradient); color:#0f172a; border:none; padding:8px 16px; border-radius:8px; font-weight:800; font-size:12.5px; cursor:pointer; display:flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-download"></i> Unduh PPT
                        </button>
                        ${data.driveUrl ? `
                            <a href="${data.driveUrl}" target="_blank" rel="noopener noreferrer" style="background:rgba(255,255,255,0.08); color:#fff; border:1px solid rgba(255,255,255,0.2); padding:8px 14px; border-radius:8px; font-weight:600; font-size:12.5px; text-decoration:none; display:flex; align-items:center; gap:6px;">
                                <i class="fa-brands fa-google-drive"></i> Drive
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        showModal(data.tag, data.title, contentWithSlide, refKey);
    }
}

/**
 * Helper to display modal for reflections and documents
 */
function showModal(tag, title, htmlContent, itemKey = null) {
    const modal = document.getElementById('portfolioModal');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    const tagEl = document.getElementById('modalTag');
    const titleEl = document.getElementById('modalTitle');
    const bodyEl = document.getElementById('modalBody');

    if (modal && tagEl && titleEl && bodyEl) {
        if (modalContent) {
            modalContent.classList.remove('modal-large');
        }
        tagEl.innerText = tag;
        titleEl.innerText = title;
        activeUploadKey = itemKey;

        bodyEl.innerHTML = htmlContent;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close Modal
 */
function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    if (modal) {
        modal.classList.remove('active');
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.classList.remove('modal-large');
        }
        const modalBody = document.getElementById('modalBody');
        if (modalBody) {
            setTimeout(() => {
                if (!modal.classList.contains('active')) {
                    modalBody.innerHTML = '';
                }
            }, 250);
        }
        document.body.style.overflow = 'auto';
    }
}

/* ==========================================
   FILE UPLOADER LOGIC FOR MK REFLECTIONS
   ========================================== */

function triggerFileInput() {
    const fileInput = document.getElementById('mkFileInput');
    if (fileInput) fileInput.click();
}

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = document.getElementById('dropzoneBox');
    if (dropzone) dropzone.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = document.getElementById('dropzoneBox');
    if (dropzone) dropzone.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = document.getElementById('dropzoneBox');
    if (dropzone) dropzone.classList.remove('drag-over');

    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files);
    }
}

function handleFileSelect(e) {
    if (e.target && e.target.files.length > 0) {
        processFiles(e.target.files);
    }
}

function processFiles(files) {
    if (!activeUploadKey) return;

    const storageKey = 'mk_artifacts_' + activeUploadKey;
    let existingFiles = JSON.parse(localStorage.getItem(storageKey) || '[]');

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileData = {
                id: 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type || getExtension(file.name),
                date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                dataUrl: file.size < 3 * 1024 * 1024 ? e.target.result : null
            };

            existingFiles.push(fileData);
            try {
                localStorage.setItem(storageKey, JSON.stringify(existingFiles));
            } catch (err) {
                console.warn("Storage quota limit reached:", err);
                fileData.dataUrl = null;
                localStorage.setItem(storageKey, JSON.stringify(existingFiles));
            }
            renderUploadedFilesList(activeUploadKey);
        };
        reader.readAsDataURL(file);
    });
}

function getExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function renderUploadedFilesList(itemKey) {
    const listContainer = document.getElementById('uploadedFilesList');
    if (!listContainer) return;

    const storageKey = 'mk_artifacts_' + itemKey;
    const files = JSON.parse(localStorage.getItem(storageKey) || '[]');

    if (files.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-files-text">
                <i class="fa-solid fa-folder-open"></i> Belum ada dokumen yang diunggah untuk mata kuliah ini.
            </div>
        `;
        return;
    }

    let html = '';
    files.forEach(file => {
        const ext = getExtension(file.name);
        let iconClass = 'fa-file-lines file-icon-default';

        if (ext === 'pdf') iconClass = 'fa-file-pdf file-icon-pdf';
        else if (['doc', 'docx'].includes(ext)) iconClass = 'fa-file-word file-icon-word';
        else if (['ppt', 'pptx'].includes(ext)) iconClass = 'fa-file-powerpoint file-icon-ppt';
        else if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) iconClass = 'fa-file-image file-icon-img';

        html += `
            <div class="file-item-card">
                <div class="file-item-left">
                    <i class="fa-solid ${iconClass} file-icon"></i>
                    <div class="file-details">
                        <span class="file-name" title="${file.name}">${file.name}</span>
                        <span class="file-meta">
                            <span>${file.size}</span> • <span>${file.date}</span>
                        </span>
                    </div>
                </div>
                <div class="file-item-actions">
                    ${file.dataUrl ? `
                        <button type="button" class="btn-file-action btn-file-download" onclick="downloadUploadedFile('${itemKey}', '${file.id}')" title="Lihat / Unduh Dokumen">
                            <i class="fa-solid fa-download"></i> Unduh
                        </button>
                    ` : `
                        <span style="font-size: 11px; color: #94a3b8; font-style: italic;">Terunggah</span>
                    `}
                    <button type="button" class="btn-file-action btn-file-delete" onclick="deleteUploadedFile('${itemKey}', '${file.id}')" title="Hapus Dokumen">
                        <i class="fa-solid fa-trash-can"></i> Hapus
                    </button>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = html;
}

function downloadUploadedFile(itemKey, fileId) {
    const storageKey = 'mk_artifacts_' + itemKey;
    const files = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const file = files.find(f => f.id === fileId);

    if (file && file.dataUrl) {
        const a = document.createElement('a');
        a.href = file.dataUrl;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('Dokumen tidak dapat diunduh (DataURL tidak tersedia).');
    }
}

function deleteUploadedFile(itemKey, fileId) {
    const storageKey = 'mk_artifacts_' + itemKey;
    let files = JSON.parse(localStorage.getItem(storageKey) || '[]');
    files = files.filter(f => f.id !== fileId);
    localStorage.setItem(storageKey, JSON.stringify(files));
    renderUploadedFilesList(itemKey);
}


/**
 * Switch between Slide 1 (Hero) and Slide 2 (Cards Grid) on Gateway
 */
function showSlide(slideNumber) {
    const heroSection = document.querySelector('.hero-section');
    const cardsSection = document.getElementById('portfolio-cards-section');
    const footerQuote = document.querySelector('#main-gateway-view .footer-quote');

    if (slideNumber === 2) {
        if (heroSection) {
            heroSection.classList.remove('active-slide');
            heroSection.classList.add('hidden-slide');
            setTimeout(() => {
                heroSection.style.display = 'none';
            }, 300);
        }

        if (cardsSection) {
            cardsSection.style.display = 'block';
            setTimeout(() => {
                cardsSection.classList.remove('hidden-slide');
                cardsSection.classList.add('active-slide');
            }, 50);
        }
        if (footerQuote) {
            footerQuote.style.display = 'flex';
            setTimeout(() => {
                footerQuote.classList.remove('hidden-slide');
                footerQuote.classList.add('active-slide');
            }, 50);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        if (cardsSection) {
            cardsSection.classList.remove('active-slide');
            cardsSection.classList.add('hidden-slide');
            setTimeout(() => {
                cardsSection.style.display = 'none';
            }, 300);
        }
        if (footerQuote) {
            footerQuote.classList.remove('active-slide');
            footerQuote.classList.add('hidden-slide');
            setTimeout(() => {
                footerQuote.style.display = 'none';
            }, 300);
        }

        if (heroSection) {
            heroSection.style.display = 'flex';
            setTimeout(() => {
                heroSection.classList.remove('hidden-slide');
                heroSection.classList.add('active-slide');
            }, 50);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Toggle Button
    const mobileBtn = document.getElementById('mobileToggleBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
        });
    }

    // Keyboard ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('portfolioModal');
            if (modal && modal.classList.contains('active')) {
                closePortfolio();
            } else if (document.getElementById('portfolio1-view')?.classList.contains('active')) {
                closePortfolio1();
            }
        }
    });

    // Click outside modal content
    const modal = document.getElementById('portfolioModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closePortfolio();
            }
        });
    }
});

/* ==========================================
   INTERACTIVE SLIDE & PDF PREVIEW LOGIC
   ========================================== */
const slidePages = {};

function triggerPPTUpload(courseKey) {
    const input = document.getElementById('ppt-upload-' + courseKey);
    if (input) input.click();
}

function handleSlideUpload(event, courseKey) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const slideCover = document.getElementById('slide-cover-' + courseKey);
        if (slideCover) {
            if (file.type.startsWith('image/')) {
                slideCover.style.backgroundImage = `url(${e.target.result})`;
                slideCover.style.backgroundSize = 'cover';
                slideCover.style.backgroundPosition = 'center';
                slideCover.innerHTML = `
                    <div class="slide-badge" style="background:rgba(0,0,0,0.6); color:#38bdf8;">SLIDE UPLOADED</div>
                    <div class="slide-title-area">
                        <span class="slide-sub" style="color:#ffffff;">${file.name}</span>
                    </div>
                `;
            } else {
                slideCover.innerHTML = `
                    <div class="slide-badge" style="background:rgba(2,132,199,0.8); color:#ffffff;">FILE TER-UPLOAD</div>
                    <div class="slide-title-area">
                        <span class="slide-sub">SLIDE 1 PREVIEW</span>
                        <h5 class="slide-main-title">${file.name}</h5>
                    </div>
                    <div class="slide-author-info">
                        <i class="fa-solid fa-file-powerpoint"></i>
                        <span>File Siap Dipresentasikan</span>
                    </div>
                `;
            }
        }
    };

    if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
    } else {
        reader.readAsText(file);
    }
}

function prevSlide(courseKey) {
    if (!slidePages[courseKey]) slidePages[courseKey] = 1;
    if (slidePages[courseKey] > 1) {
        slidePages[courseKey]--;
        updatePageDisplay(courseKey);
    }
}

function nextSlide(courseKey) {
    if (!slidePages[courseKey]) slidePages[courseKey] = 1;
    if (slidePages[courseKey] < 10) {
        slidePages[courseKey]++;
        updatePageDisplay(courseKey);
    }
}

function updatePageDisplay(courseKey) {
    const pageEl = document.getElementById('page-num-' + courseKey);
    if (pageEl) {
        pageEl.innerText = `Page ${slidePages[courseKey] || 1} / 10`;
    }
}

function zoomSlide(courseKey) {
    const frame = document.getElementById('slide-frame-' + courseKey);
    if (frame) {
        if (frame.style.transform === 'scale(1.15)') {
            frame.style.transform = 'scale(1)';
        } else {
            frame.style.transform = 'scale(1.15)';
        }
        frame.style.transition = 'transform 0.3s ease';
    }
}

function openPptLink(courseKey) {
    const item = refData[courseKey];
    if (item && item.driveUrl) {
        window.open(item.driveUrl, '_blank', 'noopener,noreferrer');
    } else {
        openSlideModal(courseKey);
    }
}

function openSlideModal(courseKey) {
    const item = refData[courseKey] || { title: 'Presentation Slide', tag: 'REFLEKSI MATA KULIAH' };
    const modal = document.getElementById('portfolioModal');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalTag && modalTitle && modalBody) {
        if (modalContent) {
            modalContent.classList.add('modal-large');
        }
        modalTag.innerText = (item.tag || "REFLEKSI MATA KULIAH") + " • KESELURUHAN SLIDE PPT";
        modalTitle.innerText = item.title;

        const previewSrc = item.previewUrl || item.embedUrl || (item.id ? `https://drive.google.com/file/d/${item.id}/preview` : "");
        const driveLink = item.driveUrl || (item.id ? `https://drive.google.com/file/d/${item.id}/view?usp=sharing` : "#");
        const presentLink = item.presentUrl || (item.id ? `https://docs.google.com/presentation/d/${item.id}/present` : driveLink);
        const downloadLink = item.id ? `https://docs.google.com/presentation/d/${item.id}/export/pptx` : driveLink;
        const hasEmbed = !!previewSrc;

        modalBody.innerHTML = `
            <div class="slide-modal-container">
                <div class="slide-modal-toolbar">
                    <div class="slide-modal-badge">
                        <i class="fa-solid fa-file-powerpoint" style="color:#f59e0b; font-size:22px;"></i>
                        <div>
                            <div style="color:#ffffff; font-weight:800; font-size:14.5px;">Penampil & Unduh Slide PPT</div>
                            <div style="color:#94a3b8; font-size:12px;">Navigasi seluruh slide presentasi interaktif PPG Prajabatan atau unduh berkas</div>
                        </div>
                    </div>
                    <div class="slide-modal-actions">
                        <a href="${downloadLink}" target="_blank" rel="noopener noreferrer" class="slide-btn-primary" title="Unduh Berkas PPT">
                            <i class="fa-solid fa-download"></i>
                            <span>Unduh PPT</span>
                        </a>
                        <a href="${presentLink}" target="_blank" rel="noopener noreferrer" class="slide-btn-present" title="Mulai Mode Presentasi Otomatis">
                            <i class="fa-solid fa-play"></i>
                            <span>Mode Presentasi</span>
                        </a>
                        <a href="${driveLink}" target="_blank" rel="noopener noreferrer" class="slide-btn-primary" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.2);" title="Buka File Asli di Google Drive">
                            <i class="fa-brands fa-google-drive"></i>
                            <span>Drive</span>
                        </a>
                    </div>
                </div>

                <div class="slide-presentation-viewport">
                    ${hasEmbed ? `
                        <div class="slide-iframe-frame" id="slide-iframe-frame-${courseKey}">
                            <iframe 
                                src="${previewSrc}" 
                                frameborder="0" 
                                width="100%" 
                                height="100%" 
                                allow="autoplay; fullscreen"
                                allowfullscreen="true" 
                                mozallowfullscreen="true" 
                                webkitallowfullscreen="true"
                                style="border-radius:12px; border:none; display:block; background:#020617; width:100%; height:100%;"
                                title="${item.title} Full Presentation">
                            </iframe>
                        </div>
                    ` : `
                        <div class="slide-fallback-box" style="height:320px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                            <i class="fa-solid fa-file-powerpoint" style="font-size:56px; color:#38bdf8; margin-bottom:14px;"></i>
                            <h4 style="font-family:'Outfit'; font-size:20px; font-weight:800; color:#ffffff;">${item.title}</h4>
                            <p style="color:#94a3b8; font-size:14px; margin-top:8px;">Presentasi slide PPT mata kuliah siap ditinjau.</p>
                        </div>
                    `}
                </div>

                <div class="slide-modal-footer-info">
                    <div class="slide-info-pill">
                        <i class="fa-solid fa-arrows-up-down-left-right" style="color:#38bdf8;"></i>
                        <span>Gunakan kontrol di dalam viewer atau scroll untuk melihat seluruh halaman slide PPT, atau klik <strong>Layar Penuh</strong> / <strong>Mode Presentasi</strong>.</span>
                    </div>
                    <button class="slide-btn-switch-ref" onclick="openRefModal('${courseKey}')">
                        <i class="fa-solid fa-book-open"></i>
                        <span>Baca Refleksi Lengkap</span>
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function openPdfModal(courseKey) {
    const item = refData[courseKey] || { title: 'Dokumen Refleksi PDF', tag: 'REFLEKSI MATA KULIAH' };
    const modal = document.getElementById('portfolioModal');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalTag && modalTitle && modalBody) {
        if (modalContent) {
            modalContent.classList.remove('modal-large');
        }
        modalTag.innerText = "PREVIEW DOKUMEN REFLEKSI";
        modalTitle.innerText = item.title;
        modalBody.innerHTML = `
            <div style="background:#0f172a; padding:24px; border-radius:16px; color:#ffffff;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
                    <span style="background:rgba(2,132,199,0.2); color:#38bdf8; border:1px solid rgba(56,189,248,0.3); padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">PREVIEW FILE PPT & DOKUMEN</span>
                    ${item.driveUrl ? `
                        <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" style="background:#0284c7; color:#fff; border:none; padding:8px 16px; border-radius:10px; cursor:pointer; font-weight:700; font-size:13px; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
                            <i class="fa-brands fa-google-drive"></i> Buka File di Drive
                        </a>
                    ` : `
                        <button onclick="document.getElementById('pdf-upload-modal-input').click()" style="background:#0284c7; color:#fff; border:none; padding:8px 16px; border-radius:10px; cursor:pointer; font-weight:700; font-size:13px;">
                            <i class="fa-solid fa-upload"></i> Upload Berkas Baru
                        </button>
                        <input type="file" id="pdf-upload-modal-input" accept=".pdf,.ppt,.pptx" style="display:none;" onchange="alert('File ' + this.files[0].name + ' berhasil di-upload!')">
                    `}
                </div>
                <div style="height:320px; background:#1e293b; border-radius:14px; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.1); padding:20px; text-align:center;">
                    <i class="fa-solid fa-file-powerpoint" style="font-size:60px; color:#f59e0b; margin-bottom:16px;"></i>
                    <h4 style="font-family:'Outfit'; font-size:20px; font-weight:800; color:#fff;">${item.title}</h4>
                    <p style="color:#94a3b8; font-size:13.5px; margin-top:8px; max-width:480px;">Berkas presentasi dan laporan refleksi kritis PPG Prajabatan siap ditinjau secara komprehensif.</p>
                    <div style="margin-top:20px; display:flex; gap:10px;">
                        <button onclick="openSlideModal('${courseKey}')" style="background:var(--gold-gradient); color:#0f172a; border:none; padding:10px 20px; border-radius:8px; font-weight:800; font-size:13px; cursor:pointer; display:flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-play"></i> Buka Slide PPT
                        </button>
                    </div>
                </div>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
