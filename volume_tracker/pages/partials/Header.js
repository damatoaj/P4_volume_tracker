export default function Header (props) {

    let conditionalHeader = props.currentUser.length > 0 ?
        props.currentUser.map((user) => (
            <h1>Welcome {user.fname} {user.lname}</h1>
        )) :
        <h1>Login or Sign Up</h1> 
        
    return (
            <header>
                {conditionalHeader}
            </header>
        )
}