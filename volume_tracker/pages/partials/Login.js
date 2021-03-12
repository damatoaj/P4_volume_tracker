import {useState} from 'react';
// import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
// import { redirect } from 'next/dist/next-server/server/api-utils';

export default function Login (props) {
    const user = props.user
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);
    console.log(user)

    const handleSubmit = e => {
        e.preventDefault();
        console.log("this is a login attempt")
        setRedirect(true);
        props.setToken(1234);
        props.handleAuth(user)
        // axios.post(
        //     `${process.env.REACT_APP_SERVER_URL}/api/login`,
        //     {email}
        // ).then(response => {
        //     // localStorage.setItem('jwtToken', response.data.token);
        //     // setAuthToken(response.data.token);
        //     props.handAuth(user);
        //     setRedirect(true);
        // }).catch(err => console.log('WE HAVE AN ERROR AT LOGIN', ERR))
    }

    if (redirect) return <PrivateRoute />

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login To Your Account</legend>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={e=> setEmail(e.target.value)}
                /><br></br>
                <input type='submit' value="Login"/>
            </fieldset>
        </form>
    )
}