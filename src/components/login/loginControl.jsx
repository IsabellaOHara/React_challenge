import LogInButton from "./logInButton";
import LogOutButton from "./logOutButton";
import Message from "./message";
import { useState } from "react";

const LoginControl = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const button = (loggedIn) ? <LogOutButton onClick={() => setLoggedIn(false)}/> : <LogInButton onClick={() => setLoggedIn(true)}/>
    
    return (

        <div>
        <header className="Page-header">
            <h2>All of Bella Ltd. In one place.</h2>
        </header>
    
            <Message loggedIn = {loggedIn}/>
            {button}
       
        </div>


    )
}

export default LoginControl;