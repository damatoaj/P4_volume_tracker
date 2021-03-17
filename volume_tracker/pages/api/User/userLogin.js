const db = require('../../../db/models')


export default async function userLogin(req, res) {
    // console.log('logging in please @@@@@@@@@@@@@@@@@@@@@@@@@')
    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    })

    const data = await user.getWorkouts()

    console.log(user)
    console.log(data)
    res.json({user:user, data:data})
}