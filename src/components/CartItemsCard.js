import { IMG_CDN_URL } from "../constants";

const CartItemsCard = ({imageId, name, description, price})=>{
    return(
        <>
        <div className="flex justify-center">
            <div className="flex items-center shadow-lg bg-gray-100 p-2 m-5 w-[60%] rounded-lg">
                <img className="w-32 rounded-lg" src={IMG_CDN_URL + imageId} alt="image of item" /> 
                <div className="p-2 m-2">
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm">{description}</p>
                    <p>{(price)/100} Rs.</p>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default CartItemsCard;