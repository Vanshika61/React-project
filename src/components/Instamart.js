import { useState } from "react";

const Section =({title, description, isVisible, setIsVisible})=>{


  return(
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible && <p>{description}</p>}
      {isVisible ? <button className="underline" onClick={ ()=> setIsVisible(false)}>Hide</button> : <button className="underline" onClick={()=> setIsVisible(true)}>Show</button>}
           
    </div>
  );
}



const Instamart = () => {

  const [visibleSection, setVisibleSection]=useState("about");

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-2 m-2">Instamart</h1>
      <Section title={"About Instamart"}
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={visibleSection === "about"} 
      setIsVisible={ ()=>{ setVisibleSection("about") }}/>


      <Section title={"Team Instamart"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={visibleSection==="team"}
      setIsVisible={()=>{ setVisibleSection("team") }}/>



      <Section title={"Careers"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={visibleSection==="career"}
      setIsVisible={()=>{ setVisibleSection("career") }}/>
    </div>
  );
};

export default Instamart;
