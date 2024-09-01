import { IMG_CDN_URL } from "../constants";
import { useSelector } from "react-redux";
import CartItemsCard from "./CartItemsCard";
// import { emptyCart } from "./utility/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector(store => store.cart.item);

    return(
        <>
        <h1 className="flex justify-center text-3xl font-bold p-2 m-2">Cart Items</h1>
        {cartItems.map((items)=> <CartItemsCard {...items} />)}  
        </>
    );
};

export default Cart;