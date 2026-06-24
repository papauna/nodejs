Sistem Aduan Pengguna KPDN

Sistem Aduan Pengguna KPDN dibangunkan menggunakan Node.js, Express.js, MongoDB dan EJS. Sistem ini membolehkan pengguna mendaftar, log masuk, mengurus aduan pengguna serta menjejak status aduan.

Teknologi Digunakan

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Express Session
* BcryptJS
* Tailwind CSS

Ciri-ciri

Pengurusan Pengguna

* Pendaftaran akaun
* Log masuk pengguna
* Log keluar pengguna
* Pengesahan sesi (Session Authentication)

Pengurusan Aduan

* Daftar aduan baharu
* Papar senarai aduan
* Carian aduan
* Papar butiran aduan
* Padam aduan
* Nombor aduan dijana secara automatik

Keselamatan

* Kata laluan disimpan dalam bentuk hash menggunakan Bcrypt
* Laluan tertentu dilindungi menggunakan middleware authentication
* Session-based authentication

Struktur Projek

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

Pemasangan

1. Clone Repository

git clone <repository-url>
cd sistem-aduan-kpdn

2. Pasang Dependencies

npm install

3. Konfigurasi Environment

Salin fail .env.example kepada .env

cp .env.example .env

Contoh konfigurasi:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/aduan_kpdn
SESSION_SECRET=rahsia-yang-kuat

4. Jalankan MongoDB

Pastikan MongoDB sedang berjalan.

brew services start mongodb-community

5. Seed Data

npm run seed

6. Jalankan Sistem

npm run dev

Akses sistem melalui:

http://localhost:3000

Akaun Pengguna

Daftar akaun baharu melalui:

http://localhost:3000/register

Kemudian log masuk melalui:

http://localhost:3000/login

Pengarang

Dibangunkan sebagai projek pembelajaran Node.js, Express.js dan MongoDB untuk Sistem Aduan Pengguna KPDN.