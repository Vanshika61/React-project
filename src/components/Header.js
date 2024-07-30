import { Link } from "react-router-dom";

const Logo=()=>{
    return(
        <a href="/">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/010/816/011/non_2x/food-house-logo-logo-template-vector.jpg" alt="logo" />
        </a>
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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;