import {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Signup(props) {
    const user = props.user
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    //TODO add email/password verification
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleClick = () => {
        setLoading(true);
        console.log('handle click works')
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Signup atttempt");
        setRedirect(true);
        props.setToken(1234)
        props.handleAuth(user)
    }
    if(redirect) return( <PrivateRoute />)

    return (
        <div className="card">
            <Form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Signup for the App</legend>
                    <Form.Group>
                        <Form.Label htmlFor='fname'>First Name:</Form.Label>
                        <Form.Control 
                            type='text' 
                            id='fname' 
                            name='fname'
                            onChange={e=> setFname(user.fname)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='lname'>Last Name:</Form.Label>
                        <Form.Control 
                            type='text' 
                            id='lname' 
                            name='lname'
                            onChange={e => setLname(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email:</Form.Label>
                        <Form.Control 
                            type='email' 
                            id='email' 
                            name='email'
                            onChange={e=> setEmail(e.target.value)}
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
                    />              
                </fieldset>
            </Form>
        </div>
    )
}