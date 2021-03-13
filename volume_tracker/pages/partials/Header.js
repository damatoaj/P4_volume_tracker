import { Jumbotron } from "react-bootstrap"

export default function Header (props) {

    let conditionalHeader = props.currentUser.length > 0 ?
        props.currentUser.map((user) => (
            <Jumbotron>
                <h1 className="display-1">Welcome {user.fname} {user.lname}</h1>
                <h1>Keep Track Of Those Gains!</h1>
            </Jumbotron>
        )) :
            <Jumbotron>
                <h1 className="display-1">Login or Sign Up</h1>
                <h1>To Track Your Exercise Volume</h1> 
            </Jumbotron>
    return (
            <header>
                {conditionalHeader}
            </header>
        )
}