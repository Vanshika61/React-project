import React from "react";
import ReactDOM from "react-dom/client";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ()=>{
    return(
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_84400.JPG" alt="" />
            <h1>Burger King</h1>
            <h2>Burgers, American</h2>
            <h3>4.2 Ratings</h3>
        </div>
    );
};

const Body =()=>{
    return(
        <div>
            <RestaurantCard/>
        </div>
    );
};

const Footer =()=>{
    return(
        <div>
            <h2>footer</h2>
        </div>
    );
};

const styleObj={
    backgroundColor: "red",
}
const AppLayout =()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);