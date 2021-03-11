import Volume from '../components/Volume';
import HeartRate from '../components/HeartRate';
import ExerciseTime from '../components/ExerciseTime';

import dummyData from '../api/DummyData';
import { connectProps } from '@devexpress/dx-react-core';

export default function Form () {
    const data = dummyData;
    // console.log(data)    
    return(
        <>
        <form>
            <fieldset>
                <legend>Enter Your Exercise Data Here</legend>
                <label for='fname'>First Name:</label>
                <input type='text' id='fname' name='fname'/><br></br>
                <label for='lname'>Last Name:</label>
                <input type='text' id='lname' name='lname'/><br></br>
                <label for='email'>Email:</label>
                <input type='email' id='email' name='email'/><br></br>
                <label for='date'>Workout Date:</label>
                <input type='date' id='date' name='date'/><br></br>
                <label for='time'>Workout Time (minutes):</label>
                <input type='number' id='time' name='time'/><br></br>
                <label for='heartRate'>Average Heart Rate:</label>
                <input type='number' id='heartRate' name='heartRate'/><br></br>
                <label for='volume'>Exercise Volume:</label>
                <input type='number' id='volume' name='volume'/><br></br>
                <input type='submit' value="Submit"/>
            </fieldset>
        </form>
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