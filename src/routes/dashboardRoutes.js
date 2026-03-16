const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    // Truyền dữ liệu vào dashboard.ejs
    res.render('dashboard', { studioName: 'Tudu Studio' });
});

module.exports = router;