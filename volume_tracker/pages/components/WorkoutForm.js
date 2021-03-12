import { useState, useEffect } from 'react';


export default function WorkoutForm (props) {
    console.log(props)
    return(
        <form>
            <fieldset>
                <legend>Enter Your Exercise Data Here</legend>
                <label for='date'>Workout Date:</label>
                <input 
                    type='date' 
                    id='date' 
                    name='date'
                    onChange={e => props.setDate(Date.parse(e.target.value))}
                /><br></br>
                <label for='time'>Workout Time (minutes):</label>
                <input 
                    type='number' 
                    id='time' 
                    name='time'
                    onChange={e => props.setMinutes(e.target.value)}
                /><br></br>
                <label for='heartRate'>Average Heart Rate:</label>
                <input 
                    type='number' 
                    id='heartRate' 
                    name='heartRate'
                    onChange={e => props.setHeartRate(e.target.value)}
                /><br></br>
                <label for='volume'>Exercise Volume:</label>
                <input 
                    type='number' 
                    id='volume' 
                    name='volume'
                    value={props.volume}
                /><br></br>
                <input type='submit' value="Submit"/>
            </fieldset>
        </form>
    )
}