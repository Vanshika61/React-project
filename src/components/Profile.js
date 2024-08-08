import { useEffect } from "react";

const Profile = (props)=>{

    // useEffect(()=>{
    //     const timer = setInterval(() => {
    //         console.log("Hello Vanshika, Accenture is calling you");
    //       }, 1000);

    //       return()=>{
    //         clearInterval(timer);
    //         console.log("useEffect return kind of unmounting")
    //       }
    // },[]);
    return(
        <>
        <hr />
        <h2>Profile Functional Component</h2>
        <h3>Name : {props.name}</h3>
        </>
    );
}

export default Profile;