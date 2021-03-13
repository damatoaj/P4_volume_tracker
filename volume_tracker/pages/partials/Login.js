import {useState} from 'react';
import Button from 'react-bootstrap/Button'
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
        <div className="card">
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
                    <Button as="input" type='submit' value="Signup" variant="primary" size="lg" active/>
                </fieldset>
            </form>
        </div>    
    )
}

{/* <script>
    (document).ready(function(){
        (".btn-primary:first").click(function(){
            (this).button('toggle');
        })
    }
</script> */}