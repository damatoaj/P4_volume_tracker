import Login from '../partials/Login';
import Signup from '../partials/Signup';

export default function Auth (props) {
    console.log(props)
    const user = props.user
    return(
        <section>
            <Signup user={user} handleAuth={props.handleAuth} />
            <Login user={user} handleAuth={props.handleAuth} />
        </section>
    )
}