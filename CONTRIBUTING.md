# Konvensi Kode — NIITS Landing Page

Dokumen ini berisi aturan penulisan kode yang wajib diikuti oleh semua kontributor proyek ini.

---

## Mengubah Konten

Semua konten halaman (teks, daftar, data) disimpan terpusat di satu file:

```
src/data/index.ts
```

Jangan hardcode konten langsung di dalam komponen halaman. Selalu ubah data di file tersebut.

---

## Warna

Gunakan nama warna custom yang sudah didefinisikan di `tailwind.config.js`, bukan kode hex langsung:

```tsx
// ✅ Benar
<div className="bg-primary text-white">

// ❌ Hindari
<div style={{ backgroundColor: '#0a58ca' }}>
```

| Class | Warna | Hex |
|---|---|---|
| `bg-primary` / `text-primary` | NIITS Blue Dark | `#0a58ca` |
| `bg-secondary` / `text-secondary` | NIITS Blue Light | `#4499f7` |
| `text-body` | Body Text | `#343a40` |

---

## Komponen

- Satu file = satu komponen (default export).
- Nama file dan nama komponen menggunakan **PascalCase** — contoh: `Navbar.tsx`, `Footer.tsx`.
- Gunakan TypeScript untuk semua props. Hindari `any`.

---

## Menambah Halaman Baru

1. Buat file di `src/pages/NamaHalaman.tsx`.
2. Daftarkan route-nya di `src/App.tsx`.
3. Tambahkan link navigasinya di `src/data/index.ts` pada array `navLinks`.
