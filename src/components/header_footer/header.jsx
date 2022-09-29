import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <h1>Bella Ltd</h1>
                <h3>Empowering Every Bella</h3>
                
            </header>
            <div className="App-navbar">
                <Link to="/" style={{ color: '#FFF' }}> Home </Link>
                <Link to="/login" style={{ color: '#FFF' }}> Log in </Link>
                <Link to="/contact" style={{ color: '#FFF' }}> Contact Us </Link>
            </div>
        </div>
    )
}

export default Header;