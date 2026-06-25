require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const connectDB = require('./config/db');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'rahsia-sistem-aduan',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.jaya = req.flash('jaya');
  res.locals.gagal = req.flash('gagal');
  res.locals.currentPath = req.path;
  next();
});

app.use('/', webRoutes);
app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Halaman Tidak Dijumpai'
  });
});

app.use((err, req, res, next) => {
  console.error('❌ Ralat:', err.message);

  if (req.flash) {
    req.flash('gagal', err.message || 'Ralat tidak dijangka.');
    return res.redirect(req.get('Referrer') || '/');
  }

  res.status(500).send('Ralat pelayan: ' + err.message);
});

app.listen(PORT, () => {
  console.log(`🚀 Pelayan berjalan di http://localhost:${PORT}`);
});