export default function Header (props) {
    // console.log(props)
    // console.log(props.currentUser)
    // console.log(props.currentUser[0].fname)
    



    // console.log(currentuser)
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