const db = require('../../../db/models')


export default async function createUser(req, res) {
    const userCreate = await db.user.create(req.body);
    console.log(req.body);
    // res.json({byId: req.query.id, message: 'get user by id'})
    res.json(userCreate);
}