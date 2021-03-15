const db = require('../../../db/models')


export default async function createUser(req, res) {
    const userCreate = await db.user.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            fname: req.body.fname,
            lname: req.body.lname,
            password: req.body.password
        }.then(([user, created]) => {
            if(created) {
                console.log(`${user.fname} was created 🥶`)
            } else {
                console.log(`${user.fname} has been taken 👹`)
            }
        }).catch(err => {
            console.log(err, 'there was an error')
        })
    });
    console.log(userCreate);
    // res.json({byId: req.query.id, message: 'get user by id'})
    res.json(userCreate);
}