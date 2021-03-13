import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'

export default function WorkoutForm (props) {
    console.log(props)

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitting data")
    }

    

    return(
        <div className="card">
            <form>
                <fieldset onSubmit={handleSubmit}>
                    <legend>Enter Your Exercise Data Here</legend>
                    <label htmlFor='date'>Workout Date:</label>
                    <input 
                        className="form-control"
                        type='date' 
                        id='date' 
                        name='date'
                        onChange={e => props.setDate(Date.parse(e.target.value))}
                    /><br></br>
                    <label htmlFor='time'>Workout Time (minutes):</label>
                    <input 
                        className="form-control"
                        type='number' 
                        id='time' 
                        name='time'
                        onChange={e => props.setMinutes(e.target.value)}
                    /><br></br>
                    <label htmlFor='heartRate'>Average Heart Rate:</label>
                    <input 
                        className="form-control"
                        type='number' 
                        id='heartRate' 
                        name='heartRate'
                        onChange={e => props.setHeartRate(e.target.value)}
                    /><br></br>
                    <label htmlFor='volume'>Exercise Volume:</label>
                    <input 
                        className="form-control"
                        type='number' 
                        id='volume' 
                        name='volume'
                        value={props.volume}
                    /><br></br>
                    <Button as="input" type='submit' value="Signup" variant="primary" size="lg" active/>
                </fieldset>
            </form>
        </div>
    )
}