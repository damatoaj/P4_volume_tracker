export default function Header (props) {

    let conditionalHeader = props.currentUser.length > 0 ?
        props.currentUser.map((user) => (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-1">Welcome {user.fname} {user.lname}</h1>
                    <h1>Keep Track Of Those Gains!</h1>
                </div>
            </div>
        )) :
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-1">Login or Sign Up</h1>
                <h1>To Track Your Exercise Volume</h1> 
            </div>
        </div>
        
    return (
            <header>
                {conditionalHeader}
            </header>
        )
}