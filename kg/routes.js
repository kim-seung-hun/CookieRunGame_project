const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password : process.env.db_password,
    database: process.env.db_database
});

router.post('/signUpPro', (req, res) => {
    let dbdb = {}
    dbdb[process.env.dbID] = req.body.hiddenId;
    dbdb[process.env.dbPW] = bcrypt.hashSync(req.body.password, 10);
    dbdb[process.env.dbNAME] = req.body.name;
    dbdb[process.env.dbPHONE] = req.body.phoneNum;
    dbdb[process.env.dbBIRTH] = req.body.birth;
    // dbdb 객체에 [키값] = 밸류값 으로 들어감
    console.log(dbdb);
    connection.query(process.env.db_signupquery, dbdb, (err, result) => {
        if (err) console.log(asdf);
        else {
            const same = bcrypt.compareSync(req.body.password, bcrypt.hashSync(req.body.password, 10));
            console.log(same); // same = true
            console.log('가입성공');
            res.redirect('/kg/logout123')
        }
        
    })
    
})
router.get('/logout123', (req, res) => {
    res.render('logout123.ejs')
})

router.get('/login', (req, res) => {
    //     const signupid = "select * from members order by registDate desc;"
    
    //     connection.query(signupid, (err, result) => {
        //         if (err) console.log('err');
        //         else {
            //             res.render(("login.ejs"), {
                //                 data: result[0]
                //             });
                //         }
                //     }) 
                let token = req.cookies.token;
                console.log(token)
                // let decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
                // console.log(decoded)
                try {
                    jwt.verify(token, process.env.JWT_TOKEN_SECRET,);
                    res.redirect('/kg/logout1')
                } catch(err) {
                    res.render('login.ejs')
                }
                // let name1 = process.env.db_namecheck + "'" + req.body.id + "';"
                //     connection.query(name1, (err, result) => {
                //         if (err) console.log(err)
                //         else {
                //             console.log('query sucsuc')
                //             if (result[0] == undefined) {
                //                 console.log('fucking')
                //             }
                //             else {
                //                 res.render('logoutPage.ejs',{
                //                     isName: result[0].name
                //                 })
                //             }
                //         }
                //     })
            })
            router.post('/login', (req, res) => {
                console.log(req.body.id);
                console.log(req.body.pw);
                const user = {
                    id: req.body.id
                }
                //                  select id,pw from members where id = "a or 1=1 --" and pw = "req.body.password'
                // const logincheck = process.env.db_loginquery + req.body.id + process.env.db_loginquery2 + req.body.pw + '";'
                const logincheck = process.env.db_loginquery + req.body.id + '";'
                connection.query(logincheck, (err, result) => {
                    if (err) console.log(err)
                    else {
                        console.log('query suc')
                        if (result[0] === undefined) {
                            console.log(result)
                            console.log("none ID")
                            res.send('loginfail')
                            // res.redirect('/login');
                        }
                        else if (!bcrypt.compareSync(req.body.pw, result[0].pw)) {
                            res.send('loginfail')
                        }
                        else if(bcrypt.compareSync(req.body.pw, result[0].pw)){
                            console.log('login suc')
                            // res.cookie('token', token, { // user 라는 이름 및 req.body.id 라는 값을 가진 쿠키 발급 중괄호 안은 속성 부여
                            //     httpOnly: true, // 자바 스크립트에서 document.cookie 시 확인되지 않음
                            //     expires: new Date(Date.now() + 1000*60*60) // 쿠키 발급 후 얼마나 쿠키를 가지고 있을 지
                            // })
                            const token = jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: "1h" });
                            // var decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET) // 동기적으로 디코딩 == 복호화
                            // console.log(decoded.user);
                            jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
                                if (err) console.log(err);
                                else console.log(decoded); // decoded.user.id == 로그인 한 이메일 일거임
                            })
                            res.cookie('token', token)
                            res.send('loginsuc')
                        }
                    }
                })
            })
            router.get('/logout', (req,res) => {
                res.cookie('token', null, {
                    maxAge: 0,
                });
                res.redirect('/')
            })
            
            
            router.get('/logout1', (req, res) => {
                let token = req.cookies.token;
    
    try {
        let decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        console.log(decoded.user.id)
        if (decoded) {
            let time = new Date();
            const timecheck = process.env.dbregistDate + decoded.user.id + '";';
            console.log(timecheck)
            connection.query(timecheck, (err, result) => {
                if (err) console.log(err)
                else {
                    
                    res.render('logoutPage.ejs', {
                        isId: decoded.user.id,
                        time: result[0].registDate
                        
                    })
                }
                
            })
            
        }
    } catch(err) {
        res.redirect('/kg/login')
    }
})

router.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

router.post('/signup', (req, res) => {
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
                res.send('usable')
            } else {
                console.log('사용자 있음 다른 아이디 사용하셈')
                res.send('disusable')
            }
        }
    })
})

router.get('/searchinfo', (req, res) => {
    res.render('searchinfo.ejs')
})
module.exports = router;