import axios from 'axios';

export default function User(req, res) {
    res.json({hello: 'world', method: req.method});
}