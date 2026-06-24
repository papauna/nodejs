const express = require('express');
const router = express.Router();
const { isLogin } = require('../middleware/auth');
const UserController = require('../controllers/UserController');
const aduan = require('../controllers/aduanController');
const auth = require('../controllers/authController');

//halaman utama
router.get('/', (req, res) => {
  res.render('index', { title: 'Selamat Datang' });
});

// CRUD Aduan — Hari 2 (Cipta & Baca sahaja)
router.get('/aduan', isLogin, aduan.index);
router.get('/aduan/create', isLogin, aduan.create);
router.post('/aduan', isLogin, aduan.store);
router.get('/aduan/:id', isLogin, aduan.show);
router.post('/aduan/:id/delete', isLogin, aduan.destroy);

router.get('/users', UserController.index);
router.get('/createuser', UserController.store);

router.get('/register', auth.showRegister);
router.post('/register', auth.register);
router.get('/login', auth.showLogin);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

module.exports = router;