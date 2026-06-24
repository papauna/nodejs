require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./config/db');
const webRoutes = require('./routes/web');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Sambung ke pangkalan data MongoDB.
connectDB();

// Enjin paparan EJS + layout.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Middleware.
app.use(express.urlencoded({ extended: true })); // baca data borang (req.body)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'rahsia-sistem-aduan',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {

  res.locals.user = req.session.user || null;

  next();

});

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Daftarkan laluan.
app.use('/', webRoutes);

// Halaman 404.
app.use((req, res) => {
  res.status(404).render('404', { title: 'Halaman Tidak Dijumpai' });
});

app.listen(PORT, () => {
  console.log(`🚀 Pelayan berjalan di http://localhost:${PORT}`);
});

