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

  const [sectionConfig, setSectionConfig]=useState({
    showAbout : false,
    showTeam : false,
    showCareer : false,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-2 m-2">Instamart</h1>
      <Section title={"About Instamart"}
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={sectionConfig.showAbout} 
      setIsVisible={ ()=>{
        setSectionConfig({
          showAbout: true,
          showTeam: false,
          showCareer: false
        })}
      }/>


      <Section title={"Team Instamart"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={sectionConfig.showTeam}
      setIsVisible={()=>{
        setSectionConfig({
          showAbout:false,
          showTeam:true,
          showCareer:false
        })
      }}/>



      <Section title={"Careers"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, cum optio vero id debitis expedita magni amet similique dolorum odit, eaque molestiae provident reprehenderit perspiciatis aperiam cumque fuga repellendus?"} 
      isVisible={sectionConfig.showCareer}
      setIsVisible={()=>{
        setSectionConfig({
          showAbout:false,
          showTeam:false,
          showCareer:true
        })
      }}/>
    </div>
  );
};

export default Instamart;
