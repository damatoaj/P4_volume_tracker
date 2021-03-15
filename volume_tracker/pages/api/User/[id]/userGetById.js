const db = require('../../../../db/models')


export default async function getUserById(req, res) {
    const userGet = await db.user.findOne({
        where: {email: req.body.email}
    });
    // res.json({byId: req.query.id, message: 'get user by id'})
    console.log(req.query)
    console.log(req.query.id)
    console.log(req.body)
    res.json(userGet);
}