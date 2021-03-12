import Login from '../partials/Login';
import Signup from '../partials/Signup';

export default function Auth (props) {
    console.log(props)
    const user = props.user
    return(
        <section>
            <Signup user={user} setCurrentUser={props.setCurrentUser} handleAuth={props.handleAuth} setToken={props.setToken}/>
            <Login user={user} setCurrentUser={props.setCurrentUser} handleAuth={props.handleAuth} setToken={props.setToken} />
        </section>
    )
}