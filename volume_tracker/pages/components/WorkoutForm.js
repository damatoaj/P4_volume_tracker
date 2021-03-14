import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function WorkoutForm (props) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])
    
    const handleClick = e => {
        setLoading(true)
        e.preventDefault();
        console.log("Submitting data")
    };

    

    return(

            <Form id="workout-form">
                <fieldset >
                    <legend>Enter Your Exercise Data Here</legend>
                    <Form.Group id="workout-date">
                        <Form.Label htmlFor='date'>Workout Date:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='date' 
                            id='date' 
                            name='date'
                            onChange={e => props.setDate(Date.parse(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group id="workout-time">
                        <Form.Label htmlFor='time'>Workout Time (minutes):</Form.Label>
                        <Form.Control
                            className="form-control"
                            type='number' 
                            id='time' 
                            name='time'
                            onChange={e => props.setMinutes(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="workout-heartRate">
                        <Form.Label htmlFor='heartRate'>Average Heart Rate:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='number' 
                            id='heartRate' 
                            name='heartRate'
                            onChange={e => props.setHeartRate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="workout-volume">
                        <Form.Label htmlFor='volume'>Exercise Volume:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='number' 
                            id='volume' 
                            name='volume'
                            value={props.volume}
                        />
                    </Form.Group>
                    <Button 
                        as="input"
                        disabled={isLoading} 
                        onClick={!isLoading ? handleClick: null }
                        type='submit' 
                        value="Submit"
                        variant="primary" 
                        size="lg" 
                        active
                        block
                    />
                </fieldset>
            </Form>

    )
}