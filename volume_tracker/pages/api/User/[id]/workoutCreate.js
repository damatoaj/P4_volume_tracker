const db = require('../../../../db/models')


export default async function workoutCreate(req, res) {
    const workoutCreate = await db.workout.findOrCreate({
        where: {
            date: req.body.date,
            minutes: req.body.minutes,
            heartRate: req.body.heartRate,
            volume: req.body.volume
        }.then(([workout, created]) => {
            workout.addUser(req.user).then(relation => {
                console.log(`${workout.date} added to ${req.user}`)
                console.log(relation)
            })
        })
    });  
    res.json(workoutCreate)
}