import { Link } from "react-router-dom";
import logoImage from "./assets/Logo.jpg";

const Logo=()=>{
    return(
        <Link to="/">
            <img className="h-28 p-2" src={logoImage} alt="logo" />
        </Link>
    );
};


const Header =()=>{
    return(
        <div className="flex justify-between bg-gray-100 shadow-lg">
            <Logo/>         {/* Component composition or composing component*/}
            <div>
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;