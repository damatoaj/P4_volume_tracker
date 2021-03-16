import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
// import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
// import { redirect } from 'next/dist/next-server/server/api-utils';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Login (props) {
    const password = props.password;
    const user = props.user;
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


    const handleClick = e => {
        e.preventDefault();
        console.log("this is a login attempt")
        axios.get(`/api/User/[id]/userGetById`, {email, password})
        .then(response => {
            setRedirect(true);
            props.setToken(1234);
            props.handleAuth(user)
            setLoading(true);
            console.log(response)
            console.log('login click working')
            if (redirect) return <PrivateRoute />
        })
    }


    return (
        <Form 
            id="login-form"
            method="GET"
            action={`api/User/[id]/userGetById`}>
            <fieldset>
                <legend>Login To Your Account</legend>
                <Form.Group id="login-email">
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        id='email' 
                        name='email'
                        onChange={e=> setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group id="login-password">
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        id='password' 
                        name='password'
                        onChange={e=> props.setPassword(e.target.value)}
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
    )
}

