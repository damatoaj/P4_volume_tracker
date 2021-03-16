const db = require('../../../db/models')


export default async function userCreate(req, res) {
    console.log('Help me for the love of god')
    const [user, Create] = await db.user.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            fname: req.body.fname,
            lname: req.body.lname,
            password: req.body.password
        }})
    res.json(user)
}