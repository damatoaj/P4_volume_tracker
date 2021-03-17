const db = require('../../../db/models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {createUserToken} = require('../../../middleware/auth');


export default async function userCreate(req, res) {
    // console.log('Help me for the love of god', req.body.password)
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    // console.log(hashPassword, "@@@@@@@@@@@@@@")
    // console.log(req.body.password)
    const user = await db.user.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashPassword
        })
    // console.log(user, '*************')
    const token = await user.update({
        token: createUserToken(req, user),
        user: user
    })
    // console.log(user)
    // console.log(hashPassword, "&&&&&&&&&&&&&&&&&&&&&&&&")
    // console.log(token, '%%%%%%%%%%%%%%%%%%%%')
    console.log(token)
    console.log(user)
    res.json(user, token)
}