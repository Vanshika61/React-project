// import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";

const About=()=>{
    return(
        <div className="about">
            <h1>About us</h1>
            <h3>Welcome to about section of the website</h3>
            {/* <Outlet/> */}
            <ProfileFunctionalComponent     name={"Vanshika"} />
            <ProfileClass     name={"VanshikaClass"} />
        </div>
    );
}

export default About;