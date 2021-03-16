import Login from '../partials/Login';
import Signup from '../partials/Signup';

export default function Auth (props) {
    console.log(props)
    
    return(
        <div>
            <Signup 
                setCurrentUser={props.setCurrentUser} 
                handleAuth={props.handleAuth} 
                setToken={props.setToken} 
                password={props.password}
                setPassword={props.setPassword}
            />
            <Login 
                
                setCurrentUser={props.setCurrentUser} 
                handleAuth={props.handleAuth} 
                setToken={props.setToken}
                password={props.password}
                setPassword={props.setPassword}
            />
        </div>
    )
}