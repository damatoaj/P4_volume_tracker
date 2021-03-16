const db = require('../../../../db/models')


export default async function workoutCreate(req, res) {
    console.log(req.body)
    const user = await db.user.findOne({
        where: {
            id: req.body.user.id
        }
    })
    console.log('adding workout to', user.fname)
    console.log(user)
    const workout = await user.createWorkout({
        date: req.body.date,
        minutes: req.body.minutes,
        heartRate: req.body.heartRate,
        volume: req.body.volume
    })
    console.log(workout)
    // const [workoutCreate, Create] = await db.workout.create({
    //     where: {
    //         date: req.body.date,
    //         minutes: req.body.minutes,
    //         heartRate: req.body.heartRate,
    //         volume: req.body.volume
    //     }.then(([workout, created]) => {
    //         workout.addUser(req.user).then(relation => {
    //             console.log(`${workout.date} added to ${req.user}`)
    //             console.log(relation)
    //         })
    //     })
    // });  
    // res.json(workoutCreate)
}
//how do you write line 6
//what do you want to do line 13; add user one to many not join table
//what goes in the res.json
//also call all workouts to be sent in the 