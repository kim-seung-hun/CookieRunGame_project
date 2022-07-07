const express = require('express');
const app = express();
const mysql = require('mysql'); // 마이에스큐엘 라이브러리를 사용하겠다는 문구
const bodyParser = require('body-parser'); //
const ejs = require('ejs');
const dotenv = require('dotenv');
require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { application } = require('express');
const kgrouter = require('./kg/routes');
const indexrouter = require('./kg/index');
// const config = dotenv.parse(buf)

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('cssandjs'));
app.use(bodyParser());
app.use(cookieParser());
app.use('/kg', kgrouter);
app.use('/', indexrouter);

app.listen(PORT, function () { // 첫번째 파라미터는 서버를 띄울 포트 넘버, 두번째는 띄운 후 실행할 함수
    console.log(PORT+'server start');
});

app.get('*', (req, res) => {
    res.status(404).render("404.ejs");
})


