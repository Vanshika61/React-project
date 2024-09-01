import { useDispatch, useSelector } from "react-redux";
import CartItemsCard from "./CartItemsCard";
import { emptyCart } from "./utility/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector(store => store.cart.item);
    const dispatch = useDispatch(emptyCart);
    const handleEmptyCart = ()=>{
        dispatch(emptyCart([]));
    }

    return(
        <>
        <div className="flex justify-center">
            <h1 className="text-3xl font-bold p-2 m-2">Cart Items</h1>
            <button className="p-2 m-2 bg-red-600 text-white rounded-lg" onClick={()=>handleEmptyCart()}>Empty Cart</button>
        </div>
        <div>{cartItems.map((item)=> <CartItemsCard key={item.id} {...item} />)}  </div>
        </>
    );
};

export default Cart;