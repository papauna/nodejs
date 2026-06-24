<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Sistem Aduan Pengguna KPDN</title>
    <style>
        :root {
            --primary-color: #1e3a8a;
            --secondary-color: #0284c7;
            --text-color: #334155;
            --bg-color: #f8fafc;
            --border-color: #e2e8f0;
            --code-bg: #0f172a;
            --code-text: #f8fafc;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.7;
            color: var(--text-color);
            background-color: #ffffff;
            margin: 0;
            padding: 40px 20px;
        }

        .container {
            max-width: 850px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            font-size: 2.2rem;
            color: var(--primary-color);
            border-bottom: 3px solid var(--primary-color);
            padding-bottom: 12px;
            margin-top: 0;
            margin-bottom: 24px;
        }

        h2 {
            font-size: 1.6rem;
            color: var(--primary-color);
            margin-top: 40px;
            margin-bottom: 16px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }

        h3 {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-top: 24px;
            margin-bottom: 12px;
        }

        p {
            margin-bottom: 16px;
        }

        a {
            color: var(--secondary-color);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        ul, ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        li {
            margin-bottom: 8px;
        }

        .badge-container {
            margin-bottom: 24px;
        }

        .badge {
            display: inline-block;
            background-color: #e0f2fe;
            color: #0369a1;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-right: 8px;
            margin-bottom: 8px;
            border: 1px solid #bae6fd;
        }

        code {
            background-color: #f1f5f9;
            padding: 3px 6px;
            border-radius: 4px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.9rem;
            color: #ef4444;
        }

        pre {
            background-color: var(--code-bg);
            color: var(--code-text);
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.9rem;
            margin-bottom: 20px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
        }

        pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
            font-size: inherit;
        }

        .project-tree {
            background-color: #f8fafc;
            color: #1e293b;
            border: 1px solid var(--border-color);
            border-left: 4px solid var(--primary-color);
        }

        .step-title {
            font-weight: bold;
            color: #1e293b;
            display: block;
            margin-top: 16px;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>

<div class="container">

    <h1>Sistem Aduan Pengguna KPDN</h1>
    <p>Sistem Aduan Pengguna KPDN dibangunkan menggunakan <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong> dan <strong>EJS</strong>. Sistem ini membolehkan pengguna mendaftar, log masuk, mengurus aduan pengguna serta menjejak status aduan.</p>

    <h2>Teknologi Digunakan</h2>
    <div class="badge-container">
        <span class="badge">Node.js</span>
        <span class="badge">Express.js</span>
        <span class="badge">MongoDB</span>
        <span class="badge">Mongoose</span>
        <span class="badge">EJS</span>
        <span class="badge">Express Session</span>
        <span class="badge">BcryptJS</span>
        <span class="badge">Tailwind CSS</span>
    </div>

    <h2>Ciri-ciri</h2>
    
    <h3>Pengurusan Pengguna</h3>
    <ul>
        <li>Pendaftaran akaun</li>
        <li>Log masuk pengguna</li>
        <li>Log keluar pengguna</li>
        <li>Pengesahan sesi (Session Authentication)</li>
    </ul>

    <h3>Pengurusan Aduan</h3>
    <ul>
        <li>Daftar aduan baharu</li>
        <li>Papar senarai aduan</li>
        <li>Carian aduan</li>
        <li>Papar butiran aduan</li>
        <li>Padam aduan</li>
        <li>Nombor aduan dijana secara automatik</li>
    </ul>

    <h3>Keselamatan</h3>
    <ul>
        <li>Kata laluan disimpan dalam bentuk hash menggunakan Bcrypt</li>
        <li>Laluan tertentu dilindungi menggunakan middleware authentication</li>
        <li>Session-based authentication</li>
    </ul>

    <h2>Struktur Projek</h2>
    <pre class="project-tree"><code>sistem-aduan-kpdn/
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
└── server.js</code></pre>

    <h2>Pemasangan</h2>
    
    <span class="step-title">1. Clone Repository</span>
    <pre><code>git clone &lt;repository-url&gt;
cd sistem-aduan-kpdn</code></pre>

    <span class="step-title">2. Pasang Dependencies</span>
    <pre><code>npm install</code></pre>

    <span class="step-title">3. Konfigurasi Environment</span>
    <p>Salin fail <code>.env.example</code> kepada <code>.env</code></p>
    <pre><code>cp .env.example .env</code></pre>
    <p>Contoh konfigurasi di dalam <code>.env</code>:</p>
    <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/aduan_kpdn
SESSION_SECRET=rahsia-yang-kuat</code></pre>

    <span class="step-title">4. Jalankan MongoDB</span>
    <p>Pastikan perkhidmatan MongoDB sedang berjalan di komputer anda.</p>
    <pre><code>brew services start mongodb-community</code></pre>

    <span class="step-title">5. Seed Data</span>
    <pre><code>npm run seed</code></pre>

    <span class="step-title">6. Jalankan Sistem</span>
    <pre><code>npm run dev</code></pre>
    <p>Akses sistem melalui pelayar web di: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>

    <h2>Akaun Pengguna</h2>
    <p>Daftar akaun baharu melalui: <a href="http://localhost:3000/register" target="_blank">http://localhost:3000/register</a></p>
    <p>Kemudian log masuk melalui: <a href="http://localhost:3000/login" target="_blank">http://localhost:3000/login</a></p>

    <h2>Pengarang</h2>
    <p>Dibangunkan sebagai projek pembelajaran Node.js, Express.js dan MongoDB untuk Sistem Aduan Pengguna KPDN.</p>

</div>

</body>
</html>