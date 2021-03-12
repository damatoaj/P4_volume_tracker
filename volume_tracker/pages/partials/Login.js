import {useState} from 'react';

export default function Login (props) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("this is a login attempt")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login To Your Account</legend>
                <label htmlFor='fname'>First Name:</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='fname'
                    onChange={e=> setFname(e.target.value)} 
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
                <input type='submit' value="Login"/>
            </fieldset>
        </form>
    )
}