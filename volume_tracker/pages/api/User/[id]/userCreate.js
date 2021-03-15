const db = require('../../../../db/models')


export default async function getUserById(req, res) {
    const user = await db.user.create();
    // res.json({byId: req.query.id, message: 'get user by id'})
    res.json(user);
}