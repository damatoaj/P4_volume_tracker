import { useState, useEffect } from 'react';


import Volume from '../components/Volume';
import HeartRate from '../components/HeartRate';
import ExerciseTime from '../components/ExerciseTime';
import WorkoutForm from '../components/WorkoutForm';


import dummyData from '../api/DummyData';
// import { filterProps } from 'recharts/types/util/types';

export default function Form () {
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [heartRate, setHeartRate] = useState(0)
    const [volume, setVolume] = useState(0);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const data = dummyData;
    // console.log(data)   
    
    // setVolume(minutes * heartRate)

    useEffect (() => {
        setVolume(minutes*heartRate)
    }, [minutes, heartRate]);
    

    return(
        <>
        {/* <form>
            <fieldset>
                <legend>Enter Your Exercise Data Here</legend>
                <label for='fname'>First Name:</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='fname'
                    onChange={e=> setFname(e.target.value)} 
                /><br></br>
                <label for='lname'>Last Name:</label>
                <input 
                    type='text' 
                    id='lname' 
                    name='lname'
                    onChange={e => setLname(e.target.value)} 
                /><br></br>
                <label for='email'>Email:</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={e=> setEmail(e.target.value)}
                /><br></br>
                <label for='date'>Workout Date:</label>
                <input 
                    type='date' 
                    id='date' 
                    name='date'
                    onChange={e => setDate(Date.parse(e.target.value))}
                /><br></br>
                <label for='time'>Workout Time (minutes):</label>
                <input 
                    type='number' 
                    id='time' 
                    name='time'
                    onChange={e => setMinutes(e.target.value)}
                    // onChange={() => setVolume(minutes*heartRate) }
                /><br></br>
                <label for='heartRate'>Average Heart Rate:</label>
                <input 
                    type='number' 
                    id='heartRate' 
                    name='heartRate'
                    onChange={e => setHeartRate(e.target.value)}
                    // onChange={() => setVolume(minutes*heartRate) }
                /><br></br>
                <label for='volume'>Exercise Volume:</label>
                <input 
                    type='number' 
                    id='volume' 
                    name='volume'
                    value={volume}
                /><br></br>
                <input type='submit' value="Submit"/>
            </fieldset>
        </form> */}
        <WorkoutForm 
            date={date}
            setDate={setDate}
            minutes={minutes}
            setMinutes={setMinutes}
            volume={volume}
            setVolume={setVolume}
            heartRate={heartRate}
            setHeartRate={setHeartRate}
        />
        <Volume 
            data={data}
        />
        <HeartRate 
            data={data}
        />
        <ExerciseTime 
            data={data}
        />
        </>
    )
}