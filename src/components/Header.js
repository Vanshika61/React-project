import { Link } from "react-router-dom";
import logoImage from "./assets/Logo.jpg";

const Logo=()=>{
    return(
        <Link to="/">
            <img className="logo" src={logoImage} alt="logo" />
        </Link>
    );
};


const Header =()=>{
    return(
        <div className="header">
            <Logo/>         {/* Component composition or composing component*/}
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;