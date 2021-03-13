import { useState, useEffect, Component } from 'react';
import Head from 'next/head';

import Volume from './Volume';
import HeartRate from './HeartRate';
import ExerciseTime from './ExerciseTime';
import WorkoutForm from './WorkoutForm';
import Auth from './Auth';


import dummyData from '../api/DummyData';
import dummyPerson from '../api/dummyPerson';
// import { filterProps } from 'recharts/types/util/types';

export default function Form (props) {
    // console.log(props)
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [heartRate, setHeartRate] = useState(0)
    const [volume, setVolume] = useState(0);

    console.log(date, minutes, heartRate, volume)

    const data = dummyData;
    const user = dummyPerson;

    useEffect (() => {
        setVolume(minutes*heartRate)
    }, [minutes, heartRate]);
  
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
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1" ></li>
                    <li data-target="#demo" data-slide-to="2" ></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item-active">
                        <Volume 
                            data={data}
                            />
                    </div>
                    <div className="carousel-item">
                        <HeartRate 
                            data={data}
                        />
                    </div>
                    <div className="carousel-item">
                        <ExerciseTime 
                            data={data}
                        />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>  
            </div>
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