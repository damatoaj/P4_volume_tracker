import { render } from 'react-dom';

const db = require('../../../../db/models')


export default async function userGetById(req, res) {
    console.log("attempt to get user by id 😈")
    const [user, Find] = await db.user.findOne({
        where: {email: req.body.email}
    });
    console.log(req.body)
    // res.json({byId: req.query.id, message: 'get user by id'})
    res.json(user);
}