import {useState} from 'react';

export default function Signup(props) {
    const user = props.user
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');

    //TODO add email/password verification
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Signup atttempt");
        setRedirect(true);
        props.setToken(1234)
        props.handleAuth(user)
    }
    if(redirect) return( <PrivateRoute />)

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Signup for the App</legend>
                <label htmlFor='fname'>First Name:</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='fname'
                    onChange={e=> setFname(user.fname)} 
                /><br></br>
                <label htmlFor='lname'>Last Name:</label>
                <input 
                    type='text' 
                    id='lname' 
                    name='lname'
                    onChange={e => setLname(e.target.value)} 
                /><br></br>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={e=> setEmail(e.target.value)}
                /><br></br>
                <input type='submit' value="Signup"/>
            </fieldset>
        </form>
    )
}