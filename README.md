# Sistem Aduan Pengguna KPDN

Sistem Aduan Pengguna KPDN dibangunkan menggunakan **Node.js**, **Express.js**, **MongoDB** dan **EJS**. Sistem ini membolehkan pengguna mendaftar akaun, log masuk, mengurus aduan pengguna dan menjejak status aduan.

---

## Teknologi Digunakan

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Express Session
- BcryptJS
- Tailwind CSS

---

## Ciri-ciri Sistem

### Pengurusan Pengguna

- Daftar akaun baharu
- Log masuk pengguna
- Log keluar pengguna
- Pengesahan sesi (Session Authentication)

### Pengurusan Aduan

- Daftar aduan baharu
- Papar senarai aduan
- Carian aduan
- Papar butiran aduan
- Padam aduan
- Nombor aduan dijana secara automatik

### Keselamatan

- Kata laluan disimpan dalam bentuk hash menggunakan Bcrypt
- Laluan tertentu dilindungi menggunakan middleware authentication
- Session-based authentication

---

## Struktur Projek

```text
sistem-aduan-kpdn/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── aduanController.js
│   ├── authController.js
│   └── UserController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── Aduan.js
│   ├── Account.js
│   └── User.js
│
├── public/
│
├── routes/
│   └── web.js
│
├── views/
│   ├── aduan/
│   ├── auth/
│   ├── partials/
│   └── layout.ejs
│
├── .env
├── package.json
├── seed.js
└── server.js
```

---

## Pemasangan

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/sistem-aduan-kpdn.git
cd sistem-aduan-kpdn
```

### 2. Pasang Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Buat fail `.env`


### 4. Jalankan MongoDB

```bash
brew services start mongodb-community
```

### 5. Seed Data

```bash
npm run seed
```

### 6. Jalankan Sistem

```bash
npm run dev
```

Akses sistem melalui:

```text
http://localhost:3000
```

---

## Akaun Pengguna

Daftar akaun baharu:

```text
http://localhost:3000/register
```

Log masuk:

```text
http://localhost:3000/login
```

---

## Fungsi Yang Telah Disiapkan

- [x] Sambungan MongoDB
- [x] Model Mongoose
- [x] CRUD Aduan (Create, Read, Delete)
- [x] Carian Aduan
- [x] Login Pengguna
- [x] Logout Pengguna
- [x] Session Authentication
- [x] Protected Routes
- [x] Seed Data

---

## Pembangunan Akan Datang

- [ ] Kemaskini Aduan (Update)
- [ ] Dashboard Statistik
- [ ] Upload Lampiran Aduan
- [ ] Peranan Pengguna (Admin/Pegawai)
- [ ] Audit Trail
- [ ] Pagination
- [ ] API REST

---

## Pengarang

Dibangunkan sebagai projek pembelajaran Node.js, Express.js dan MongoDB untuk Sistem Aduan Pengguna KPDN.