const db = require('../../../../db/models')


export default async function getWorkoutsByUserId(req, res) {
    const workoutGet = await db.workout.findAll();  
    res.json(workoutGet)
}