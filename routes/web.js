const express = require('express');
const router = express.Router();
// const { isLogin } = require('../middleware/auth');
const UserController = require('../controllers/UserController');
const aduan = require('../controllers/aduanController');
const auth = require('../controllers/authController');
const upload = require('../config/multer');
const analitik = require('../controllers/analitikController');
const tindakan = require('../controllers/tindakanController');
const { isLogin, isGuest } = require('../middleware/auth');


// halaman utama
router.get('/', isLogin, (req, res) => {
  res.render('index', { title: 'Selamat Datang' });
});


// Analitik (aggregation) — daftar sebelum /aduan/:id supaya tidak bertindih
router.get('/analitik', analitik.index);

// CRUD Aduan — Hari 2 (Cipta & Baca sahaja)
router.get('/aduan', isLogin, aduan.index);
router.get('/aduan/create', isLogin, aduan.create);
router.post('/aduan', isLogin, aduan.store);
router.get('/aduan/:id', isLogin, aduan.show);
router.post('/aduan/:id/delete', isLogin, aduan.destroy);
router.get('/aduan/:id/edit', isLogin, aduan.edit); //   Borang kemaskini
router.put('/aduan/:id', isLogin, aduan.update); //      Kemaskini aduan

router.get('/users', UserController.index);
router.get('/createuser', UserController.store);

router.get('/register', isGuest, auth.showRegister);
router.post('/register', isGuest, auth.register);

router.get('/login', isGuest, auth.showLogin);
router.post('/login', isGuest, auth.login);

router.post('/logout', isLogin, auth.logout);

// Hari 4 — tindakan susulan (hubungan data)
router.post('/aduan/:id/tindakan', tindakan.store);


// Hari 4 — muat naik lampiran (multer; "lampiran" = nama medan input fail)
router.post('/aduan/:id/lampiran', upload.array('lampiran', 5), aduan.muatNaikLampiran);

module.exports = router;