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
    }

    if (redirect) return <PrivateRoute />

    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <fieldset>
                <legend>Login To Your Account</legend>
                <label htmlFor='email'>Email:</label>
                <input 
                    className="form-control"
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={e=> setEmail(e.target.value)}
                /><br></br>
                <input type='submit' value="Login" className="btn btn-primary"/>
            </fieldset>
        </form>
    )
}

{/* <script>
    (document).ready(function(){
        (".btn-primary:first").click(function(){
            (this).button('toggle');
        })
    }
</script> */}