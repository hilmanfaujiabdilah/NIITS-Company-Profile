// =========================================================
// Data statis untuk seluruh halaman NIITS
// =========================================================

export const company = {
  name: "PT NIITS INOVASI TEKNOLOGI",
  tagline: "Solusi Teknologi untuk Bisnis yang Berkembang",
  description:
    "NIITS adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis tumbuh di era modern.",
  website: "niits.id",
  email: "admin@niits.id",
  phone: "+62 821-3098-6139",
  address: "Jl. Dipatiukur No. 102-118, Kota Bandung, Jawa Barat 40132",
  founded: "2023",
  employees: "10+",
  projects: "20+",
  clients: "5+",
  socials: {
    instagram: "https://instagram.com/niits_id",
    linkedin: "https://linkedin.com/company/niits",
    twitter: "https://twitter.com/niits_id",
    youtube: "https://youtube.com/@niits",
  },
};

export const navLinks = [
  { label: "Beranda", path: "/" },
  { label: "Layanan", path: "/layanan" },
  { label: "Bootcamp", path: "/bootcamp" },
  { label: "Artikel", path: "/artikel" },
  { label: "Tentang", path: "/tentang" },
  { label: "Lowongan", path: "/lowongan" },
  { label: "Kontak", path: "/kontak" },
];

export const services = [
  {
    id: 1,
    icon: "Monitor",
    title: "Pengembangan Web",
    description:
      "Kami membangun website profesional yang responsif, cepat, dan SEO-friendly sesuai kebutuhan bisnis Anda.",
    features: ["React / Next.js", "TypeScript", "Tailwind CSS", "REST API Integration"],
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Aplikasi Mobile",
    description:
      "Solusi mobile cross-platform untuk Android dan iOS dengan performa native menggunakan React Native.",
    features: ["React Native", "Expo", "Push Notification", "Offline Mode"],
  },
  {
    id: 3,
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Pengelolaan infrastruktur cloud yang andal, scalable, dan aman untuk mendukung pertumbuhan bisnis Anda.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipeline", "Monitoring"],
  },
  {
    id: 4,
    icon: "BarChart2",
    title: "Analitik Data",
    description:
      "Ubah data mentah menjadi insight bisnis yang actionable melalui visualisasi dan dashboard interaktif.",
    features: ["Data Pipeline", "Dashboard Interaktif", "Business Intelligence", "Machine Learning"],
  },
  {
    id: 5,
    icon: "Shield",
    title: "Keamanan Siber",
    description:
      "Lindungi aset digital dan data pelanggan Anda dari ancaman siber dengan layanan keamanan komprehensif.",
    features: ["Penetration Testing", "Security Audit", "Enkripsi Data", "Compliance"],
  },
  {
    id: 6,
    icon: "Settings",
    title: "Konsultasi IT",
    description:
      "Dapatkan panduan strategis dari para ahli kami untuk transformasi digital dan optimasi proses bisnis.",
    features: ["Digital Transformation", "IT Strategy", "Tech Stack Review", "Process Automation"],
  },
];

export const bootcamps = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    level: "Pemula",
    duration: "3 Bulan",
    schedule: "Senin – Jumat, 09.00–17.00",
    price: "Rp 5.000.000",
    description:
      "Pelajari HTML, CSS, JavaScript, React, Node.js, dan database dari nol hingga siap kerja sebagai Full-Stack Developer.",
    topics: ["HTML & CSS Dasar", "JavaScript ES6+", "React & TypeScript", "Node.js & Express", "PostgreSQL", "Git & Deployment"],
    badge: "Terpopuler",
  },
  {
    id: 2,
    title: "UI/UX Design Intensive",
    level: "Pemula – Menengah",
    duration: "2 Bulan",
    schedule: "Senin – Jumat, 09.00–15.00",
    price: "Rp 3.500.000",
    description:
      "Kuasai prinsip desain, Figma, prototyping, dan user research untuk menjadi UI/UX Designer yang kompeten.",
    topics: ["Design Thinking", "Figma Mastery", "User Research", "Prototyping", "Usability Testing", "Portfolio Building"],
    badge: null,
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    level: "Menengah",
    duration: "4 Bulan",
    schedule: "Senin – Jumat, 09.00–17.00",
    price: "Rp 7.000.000",
    description:
      "Dari Python dasar hingga model Machine Learning yang siap produksi. Cocok untuk Anda yang ingin berkarir di bidang data.",
    topics: ["Python & Pandas", "Data Visualization", "Statistics", "Machine Learning", "Deep Learning", "MLOps"],
    badge: "Baru",
  },
  {
    id: 4,
    title: "Digital Marketing & Growth",
    level: "Semua Level",
    duration: "6 Minggu",
    schedule: "Sabtu – Minggu, 09.00–16.00",
    price: "Rp 2.500.000",
    description:
      "Strategi pemasaran digital dari SEO, social media, paid ads, hingga email marketing untuk mengembangkan bisnis Anda.",
    topics: ["SEO & SEM", "Social Media Marketing", "Google Ads", "Email Marketing", "Analytics", "Content Strategy"],
    badge: null,
  },
];

export const articles = [
  {
    id: 1,
    slug: "tren-teknologi-2025",
    title: "7 Tren Teknologi yang Akan Mendominasi 2025",
    excerpt:
      "Dari AI generatif hingga komputasi kuantum, berikut tren teknologi yang perlu Anda perhatikan untuk mempersiapkan bisnis di tahun 2025.",
    category: "Teknologi",
    author: "Reza Pratama",
    date: "15 Januari 2025",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: 2,
    slug: "cara-memilih-tech-stack",
    title: "Cara Memilih Tech Stack yang Tepat untuk Startup Anda",
    excerpt:
      "Memilih tech stack yang salah bisa merugikan bisnis dalam jangka panjang. Simak panduan lengkap memilih teknologi yang sesuai.",
    category: "Development",
    author: "Sari Wulandari",
    date: "10 Januari 2025",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    id: 3,
    slug: "pentingnya-ux-design",
    title: "Mengapa UX Design Adalah Investasi Terpenting Bisnis Digital",
    excerpt:
      "User Experience bukan sekadar estetika. Simak bagaimana desain yang baik secara langsung meningkatkan konversi dan retensi pengguna.",
    category: "Design",
    author: "Dian Rahmawati",
    date: "5 Januari 2025",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 4,
    slug: "keamanan-siber-ukm",
    title: "Panduan Keamanan Siber untuk UKM yang Tidak Ingin Rugi",
    excerpt:
      "UKM sering kali menjadi target empuk serangan siber. Pelajari langkah-langkah praktis melindungi bisnis Anda dari ancaman digital.",
    category: "Keamanan",
    author: "Budi Santoso",
    date: "28 Desember 2024",
    readTime: "8 menit",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    id: 5,
    slug: "transformasi-digital-umkm",
    title: "Transformasi Digital UMKM: Dari Mana Harus Mulai?",
    excerpt:
      "Banyak UMKM ingin go digital tapi bingung harus mulai dari mana. Berikut roadmap transformasi digital yang bisa Anda ikuti.",
    category: "Bisnis",
    author: "Maya Kusuma",
    date: "20 Desember 2024",
    readTime: "10 menit",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 6,
    slug: "machine-learning-bisnis",
    title: "Machine Learning untuk Bisnis: Bukan Hanya untuk Perusahaan Besar",
    excerpt:
      "AI dan Machine Learning kini semakin terjangkau dan bisa diimplementasikan oleh bisnis skala apapun. Simak contoh nyatanya.",
    category: "AI & Data",
    author: "Hendra Wijaya",
    date: "12 Desember 2024",
    readTime: "9 menit",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
];

export const team = [
  {
    id: 1,
    name: "Hilman Fauji Abdillah",
    role: "Data Science & AI Enthusiasts",
    bio: "Bersemangat mengeksplorasi data dan kecerdasan buatan untuk menghasilkan insight yang berdampak nyata bagi bisnis.",
    avatar: "HF",
  },
  {
    id: 2,
    name: "Arif N Ramadhan",
    role: "ERP Developer",
    bio: "Spesialis pengembangan sistem ERP yang membantu perusahaan mengintegrasikan dan mengotomatisasi proses bisnis mereka.",
    avatar: "AR",
  },
  {
    id: 3,
    name: "Ramadhana Rizki Zulkarnaen",
    role: "Mobile Developer",
    bio: "Pengembang aplikasi mobile berpengalaman yang membangun solusi Android dan iOS yang intuitif dan berperforma tinggi.",
    avatar: "RR",
  },
  {
    id: 4,
    name: "Hary Kurniawan K",
    role: "Fullstack Web Developer",
    bio: "Developer fullstack yang menguasai frontend maupun backend, dengan fokus pada kode yang bersih dan arsitektur yang scalable.",
    avatar: "HK",
  },
];

export const values = [
  {
    icon: "Zap",
    title: "Inovasi",
    description: "Kami selalu mencari cara baru dan lebih baik untuk memecahkan masalah klien.",
  },
  {
    icon: "Heart",
    title: "Integritas",
    description: "Transparansi dan kejujuran adalah fondasi setiap hubungan yang kami bangun.",
  },
  {
    icon: "Users",
    title: "Kolaborasi",
    description: "Hasil terbaik lahir dari kerja sama yang erat antara tim dan klien.",
  },
  {
    icon: "Target",
    title: "Dampak",
    description: "Setiap solusi yang kami buat harus memberikan dampak nyata bagi bisnis klien.",
  },
];

export const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    salary: "Rp 15.000.000 – 25.000.000",
    description:
      "Kami mencari Frontend Developer berpengalaman untuk membangun antarmuka yang indah dan performatif bagi produk-produk NIITS.",
    requirements: [
      "3+ tahun pengalaman dengan React dan TypeScript",
      "Familiar dengan state management (Redux / Zustand)",
      "Pemahaman mendalam tentang Web Performance",
      "Kemampuan komunikasi yang baik",
    ],
    posted: "2 hari lalu",
    hot: true,
  },
  {
    id: 2,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    salary: "Rp 12.000.000 – 20.000.000",
    description:
      "Bergabunglah sebagai Backend Engineer untuk membangun API yang scalable dan reliable yang mendukung jutaan pengguna.",
    requirements: [
      "2+ tahun pengalaman dengan Node.js / Express",
      "Pengalaman dengan PostgreSQL dan Redis",
      "Pemahaman tentang microservices",
      "Familiar dengan Docker dan CI/CD",
    ],
    posted: "1 minggu lalu",
    hot: false,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Jakarta (On-site)",
    salary: "Rp 8.000.000 – 15.000.000",
    description:
      "Kami butuh designer berbakat untuk menciptakan pengalaman pengguna yang intuitif dan menyenangkan di seluruh produk NIITS.",
    requirements: [
      "2+ tahun pengalaman sebagai UI/UX Designer",
      "Mahir menggunakan Figma",
      "Portofolio produk digital yang kuat",
      "Pengalaman user research menjadi nilai plus",
    ],
    posted: "3 hari lalu",
    hot: true,
  },
  {
    id: 4,
    title: "Instruktur Bootcamp (Web Dev)",
    department: "Education",
    type: "Part-time",
    location: "Jakarta / Online",
    salary: "Rp 5.000.000 – 10.000.000",
    description:
      "Jadilah bagian dari tim pendidik NIITS dan bantu ratusan pelajar memulai karir impian mereka di dunia teknologi.",
    requirements: [
      "3+ tahun pengalaman sebagai Web Developer",
      "Kemampuan mengajar dan komunikasi yang kuat",
      "Passion dalam dunia pendidikan",
      "Pengalaman mengajar/mentoring menjadi nilai plus",
    ],
    posted: "5 hari lalu",
    hot: false,
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    salary: "Rp 7.000.000 – 12.000.000",
    description:
      "Kami mencari marketing specialist kreatif untuk mengembangkan brand NIITS dan mendatangkan leads berkualitas.",
    requirements: [
      "2+ tahun pengalaman digital marketing",
      "Mahir Google Ads & Meta Ads",
      "Pemahaman SEO/SEM yang baik",
      "Kemampuan analitik data marketing",
    ],
    posted: "1 minggu lalu",
    hot: false,
  },
];

export const faqs = [
  {
    q: "Berapa lama proses pengembangan website biasanya?",
    a: "Tergantung kompleksitas proyek. Website profil sederhana bisa selesai dalam 1–4 minggu, sementara platform kompleks bisa memakan waktu 2–6 bulan.",
  },
  {
    q: "Apakah NIITS menyediakan layanan maintenance setelah proyek selesai?",
    a: "Ya, kami menyediakan paket maintenance bulanan dan tahunan untuk memastikan produk Anda selalu berjalan dengan optimal.",
  },
  {
    q: "Bagaimana sistem pembayaran untuk proyek pengembangan?",
    a: "Kami menggunakan sistem termin: 30% di awal, 40% saat tahap development selesai, dan 30% saat proyek diterima.",
  },
  {
    q: "Apakah bootcamp NIITS memiliki jaminan kerja?",
    a: "Kami menyediakan program job placement assistance dan koneksi ke network perusahaan mitra kami, namun bukan jaminan kerja mutlak.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Budi Raharjo",
    company: "Founder, TokoBumi",
    quote:
      "NIITS mengubah cara kami berbisnis. Website baru kami meningkatkan konversi 3x lipat dalam 2 bulan pertama.",
    avatar: "BR",
  },
  {
    id: 2,
    name: "Linda Setiawan",
    company: "CTO, HealthKita",
    quote:
      "Tim NIITS sangat profesional dan komunikatif. Mereka benar-benar memahami kebutuhan bisnis kami.",
    avatar: "LS",
  },
  {
    id: 3,
    name: "Wahyu Hidayat",
    company: "Alumni Bootcamp",
    quote:
      "Bootcamp NIITS adalah keputusan terbaik dalam karir saya. 3 bulan setelah lulus, saya sudah dapat kerja dengan gaji 2x lebih besar.",
    avatar: "WH",
  },
];
