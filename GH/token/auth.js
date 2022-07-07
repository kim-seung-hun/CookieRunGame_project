const router = require('express').Router();

const user = require('../../controller/user')
const { authenticate } = require('../../lib/auth/jwt');




router.route('/user').get((req, res) => { res.send('user login') })

