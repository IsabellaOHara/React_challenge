
import LoggedInPage from "./loggedInPage";
import LoggedOutPage from "./loggedOutPage";

const Message = (props) => {
    const loggedIn = props.loggedIn;
    if (loggedIn) {
        return (
            <LoggedInPage/>)
    } else {
           return (
                <LoggedOutPage/>)
        }
    }
export default Message;