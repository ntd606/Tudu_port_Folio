const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/errorHandler');
const dashboardRoutes = require('./routes/dashboardRoutes');
//1.1 thư viện dùng cấu hình view engine
const path = require('path');

const app = express();

//1.2 Cấu hình View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//1.3 Cấu hình thư mục chứa tệp tĩnh (CSS, JS, Images)
app.use(express.static(path.join(__dirname, '../public')));
//1.4 Middleware xử lý dữ liệu từ Form (URL Encoded)
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Routes API
app.use('/', dashboardRoutes);

// Error Middleware
app.use(errorHandler);

module.exports = app;