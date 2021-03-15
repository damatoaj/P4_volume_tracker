import axios from 'axios';

export default function getUserById(req, res) {
    res.json({byId: req.query.id, message: 'get user by id'})
}