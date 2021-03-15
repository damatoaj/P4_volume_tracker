import axios from 'axios';

export default function getWorkoutsByUserId(req, res) {
    res.json({byId: req.query.id, message: 'get workouts by user id'})
}