const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    // Truyền dữ liệu vào dashboard.ejs
    res.render('dashboard', { studioName: 'Tudu Studio' });
});
// Thêm route này vào file dashboardRoutes.js hiện tại của bạn
router.get('/about', (req, res) => {
    res.render('about', { 
        studioName: 'Tudu Studio' 
    });
});
// Route hiển thị trang Contact
router.get('/contact', (req, res) => {
    res.render('contact', { studioName: 'Tudu Studio' });
});

// Route xử lý khi khách hàng gửi form (POST)
router.post('/contact', (req, res) => {
    const { name, email, service, message } = req.body;
    console.log(`Liên hệ mới từ: ${name} - ${email}`);
    // Sau này bạn có thể lưu vào DB hoặc gửi email thông báo ở đây
    res.send('Cám ơn bạn đã liên hệ, Tudu sẽ phản hồi sớm nhé!');
});

// Route trang login
router.get('/login', (req, res) => {
    res.render('login', { studioName: 'Tudu Studio' });
});
module.exports = router;