const db = require('../../../../db/models')


export default async function getUserById(req, res) {
    const userGet = await db.user.findOne(req.body.email);
    // res.json({byId: req.query.id, message: 'get user by id'})
    res.json(userGet);
}