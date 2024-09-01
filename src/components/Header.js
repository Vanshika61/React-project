import { Link } from "react-router-dom";
import logoImage from "./assets/Logo.jpg";
import { useContext } from "react";
import UserContext from "./utility/UserContext";
import {useSelector} from "react-redux";

const Logo=()=>{
    return(
        <Link to="/">
            <img className="h-28 p-2" src={logoImage} alt="logo" />
        </Link>
    );
};


const Header =()=>{

    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.item);
    // console.log(cartItems);

    return(
        <div className="flex justify-between bg-gray-100 shadow-lg">
            <Logo/>         {/* Component composition or composing component*/}
            <div>
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
                </ul>
            </div>
            <span className="flex py-10 px-2 font-bold text-amber-900">{user.name}</span>
        </div>
    );
};

export default Header;