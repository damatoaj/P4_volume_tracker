import { useState, useEffect } from 'react';


import Volume from '../components/Volume';
import HeartRate from '../components/HeartRate';
import ExerciseTime from '../components/ExerciseTime';
import WorkoutForm from '../components/WorkoutForm';
import Auth from '../components/Auth';


import dummyData from '../api/DummyData';
// import { filterProps } from 'recharts/types/util/types';

export default function Form () {
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [heartRate, setHeartRate] = useState(0)
    const [volume, setVolume] = useState(0);
    const data = dummyData;
    // console.log(data)   
    
    // setVolume(minutes * heartRate)

    useEffect (() => {
        setVolume(minutes*heartRate)
    }, [minutes, heartRate]);
    

    return(
        <>
        <Auth 
        />
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