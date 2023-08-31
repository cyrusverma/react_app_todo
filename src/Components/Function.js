import React from "react";
import A from "./A";
import Aa from "./Aa.css";
import movies from './data';
import { useState } from "react";

const Function = (props) => {
  const [movi,setMovi]=useState(movies)
  const handler=()=>{
    setMovi([])


  }
 
  return (
    <div id="cards">
      <div>movie</div>
      {
movies.map(movie=><A title={movie.title} src={movie.src} verified={movie.verified} key={movies.key}/>)





      }
      {<button onClick={handler}></button>}
     
     
      


    </div>
  );
};
export default Function;
