import { useContext } from "react";
import UserContext from "./utility/UserContext";

const Footer =()=>{

    const {user} = useContext(UserContext);
    return(
        <div>
            <h2 className="flex justify-center m-4 p-4 font-bold">Made with love by {user.name}</h2>
        </div>
    );
};

export default Footer;