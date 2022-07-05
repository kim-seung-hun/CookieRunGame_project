const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password : process.env.db_password,
    database: process.env.db_database
});

router.get('/', function (req, res) { // 경로에 / 한개만 적을 경우 홈페이지 같은 개념
    console.log(req.headers.cookie)
    if (req.headers.cookie == undefined) { 
        res.render("signup.ejs", {
            data: 'noCookie'
        })
    } else {
        res.render("signup.ejs", {
            data: "hasCookie"
        })
    }
})

router.post('/', (req, res) => {
    //console.log(req.body.id); // req요청 중에 id라는 이름으로 보냈을 때 req.body.id에 담긴다. 

    let dbdb = {}
    dbdb[process.env.dbID] = req.body.id;
    console.log(dbdb);
    let query1 = process.env.db_queryidFIRST +"'" + req.body.id + "';"
    connection.query(query1, (err, result) => { // 위 쿼리문 실행시 나오는 결과값이 result에 담김
        if (err) console.log(err);
        else {
            console.log('쿼리문 정상작동') //sql 문구가 에러 없이 정상 작동함
            if (result[0] == undefined) {
                console.log(result)
                res.send('usable')
            } else {
                console.log('사용자 있음 다른 아이디 사용하셈')
                res.send('disusable')
            }
        }
        
    })
})

module.exports = router;
