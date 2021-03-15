const db = require('../../../../db/models')


export default async function createWorkoutsByUserId(req, res) {
    const workoutCreate = await db.workout.create({
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