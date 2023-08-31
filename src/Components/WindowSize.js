
import React ,{useEffect,useState} from "react";

const WindowSize =()=>{
const [currsize,setCurrsize]=useState(window.screen.width);

const Actualwidth=()=>{
    setCurrsize(window.innerWidth);

}
useEffect(()=>{
    window.addEventListener("resize",Actualwidth)
}
);


return(
    <>
    <h1>{currsize}</h1>
    
    
    </>
)







}
export default  WindowSize;

