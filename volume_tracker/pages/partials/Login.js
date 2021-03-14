import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
// import { redirect } from 'next/dist/next-server/server/api-utils';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Login (props) {
    const user = props.user
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleSubmit = e => {
        e.preventDefault();
        console.log("this is a login attempt")
        setRedirect(true);
        props.setToken(1234);
        props.handleAuth(user)
    }

    const handleClick = () => {
        setLoading(true);
        console.log('login click working')
    }

    if (redirect) return <PrivateRoute />

    return (
        <div className="card">
            <Form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Login To Your Account</legend>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email</Form.Label>
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

