# PT NIITS INOVASI TEKNOLOGI — Company Profile

Website profil perusahaan PT NIITS Inovasi Teknologi yang dibangun dengan React, TypeScript, dan Tailwind CSS. Terdiri dari 7 halaman publik yang sepenuhnya statis — tidak membutuhkan backend.

---

## Daftar Isi


- [Struktur Halaman](#struktur-halaman)
- [Cara Menjalankan](#cara-menjalankan)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Konvensi Kode](#konvensi-kode)

---

## Struktur Halaman

| Path | Halaman | Deskripsi |
|---|---|---|
| `/` | Beranda | Hero, stats, preview layanan, testimonial |
| `/layanan` | Layanan | 6 kartu layanan + alur kerja |
| `/bootcamp` | Bootcamp | Program pelatihan intensif |
| `/artikel` | Artikel | Blog dengan filter per kategori |
| `/tentang` | Tentang | Profil perusahaan, nilai, dan tim |
| `/lowongan` | Lowongan | Daftar posisi yang dibuka |
| `/kontak` | Kontak | Form kontak + FAQ accordion |


---

## Cara Menjalankan

Pastikan **Node.js v18+** sudah terinstall di komputer kamu.

### 1. Clone repositori

```bash
git clone https://github.com/niits/landing-page.git
cd landing_page_niits
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### 4. Build untuk production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`.

### 5. Preview hasil build

```bash
npm run preview
```

---

## Panduan Kontribusi

Terima kasih sudah tertarik berkontribusi! Berikut alur yang perlu diikuti.

### Persiapan

1. **Fork** repositori ini ke akun GitHub kamu.
2. **Clone** fork tersebut ke komputer lokal:
   ```bash
   git clone https://github.com/<username-kamu>/landing-page.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Alur Kerja

1. Buat branch baru dari `main`. Gunakan nama yang deskriptif:
   ```bash
   # Untuk fitur baru
   git checkout -b feat/nama-fitur

   # Untuk perbaikan bug
   git checkout -b fix/deskripsi-bug

   # Untuk perubahan konten/teks
   git checkout -b content/deskripsi-perubahan
   ```

2. Kerjakan perubahan kamu di branch tersebut.

3. Pastikan tidak ada error sebelum commit:
   ```bash
   npm run build
   npm run lint
   ```

4. Commit dengan pesan yang jelas (gunakan format di bawah):
   ```bash
   git commit -m "feat: tambah animasi hero section"
   git commit -m "fix: perbaiki layout grid tim di mobile"
   git commit -m "content: update daftar anggota tim"
   ```

5. Push branch ke fork kamu:
   ```bash
   git push origin feat/nama-fitur
   ```

6. Buat **Pull Request** ke branch `main` repositori utama. Isi deskripsi PR dengan jelas: apa yang diubah dan mengapa.

### Format Pesan Commit

| Prefix | Kapan digunakan |
|---|---|
| `feat:` | Menambah fitur baru |
| `fix:` | Memperbaiki bug |
| `content:` | Mengubah teks / data statis |
| `style:` | Perubahan tampilan / styling |
| `refactor:` | Refactor kode tanpa mengubah perilaku |
| `docs:` | Perubahan dokumentasi |
| `chore:` | Update dependency, config, dll |

---

## Konvensi Kode

Aturan penulisan kode dibahas lengkap di file terpisah:

👉 **[CONTRIBUTING.md](./CONTRIBUTING.md)**

---

## Lisensi

Proyek ini milik **PT NIITS INOVASI TEKNOLOGI** — [niits.id](https://niits.id). Penggunaan untuk keperluan internal perusahaan.
