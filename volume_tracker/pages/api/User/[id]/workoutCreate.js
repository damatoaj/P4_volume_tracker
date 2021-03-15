const db = require('../../../../db/models')


export default async function createWorkoutsByUserId(req, res) {
    const workoutCreate = await db.workout.create();  
    res.json(workoutCreate)
}