import { useState } from "react";

const Section =({title, description})=>{

  const [isVisible, setIsVisible]=useState(false);

  return(
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible && <p>{description}</p>}
      {isVisible ? <button className="underline" onClick={ ()=> setIsVisible(false)}>Hide</button> : <button className="underline" onClick={()=> setIsVisible(true)}>Show</button>}
           
    </div>
  );
}



const Instamart = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-2 m-2">Instamart</h1>
      <Section title={"About Section"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} />


      <Section title={"Team Section"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} />


      <Section title={"Career Section"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} />
    </div>
  );
};

export default Instamart;
