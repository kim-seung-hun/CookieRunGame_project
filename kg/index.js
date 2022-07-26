const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password : process.env.db_password,
    database: process.env.db_database
});

router.get('/', (req, res) => {
    res.render('main.ejs')
})





module.exports = router;