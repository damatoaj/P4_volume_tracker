import { useState, useEffect, Component } from 'react';


import Volume from '../components/Volume';
import HeartRate from '../components/HeartRate';
import ExerciseTime from '../components/ExerciseTime';
import WorkoutForm from '../components/WorkoutForm';
import Auth from '../components/Auth';


import dummyData from '../api/DummyData';
import dummyPerson from '../api/dummyPerson';
// import { filterProps } from 'recharts/types/util/types';

export default function Form (props) {
    // console.log(props)
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [heartRate, setHeartRate] = useState(0)
    const [volume, setVolume] = useState(0);

    const data = dummyData;
    const user = dummyPerson;
    // const [token, setToken] = useState(null);

    // console.log(user)
    
    const PrivateRoute = () => {
        
        return (
            props.token ? 
            <>
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
            :
            <>
                <Auth
                    user={user}
                    setToken={props.setToken}
                    handleAuth={props.handleAuth}
                    setCurrentUser={props.setCurrentUser}
                    isAuthenticated={props.isAuthenticated}
                />
            </> 
        )
    }

    useEffect (() => {
        setVolume(minutes*heartRate)
    }, [minutes, heartRate]);
    

    return(
        <>
        <PrivateRoute />
        </>
    )
}