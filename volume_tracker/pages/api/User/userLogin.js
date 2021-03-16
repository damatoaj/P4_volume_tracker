const db = require('../../../db/models')


export default async function userLogin(req, res) {
    console.log('logging in please @@@@@@@@@@@@@@@@@@@@@@@@@')
    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    })
    console.log(user)
    res.json(user)
}