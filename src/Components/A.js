import React from 'react'
const A=(props)=>{
    let a=props.verified=="true"?<span>🕸</span>:<span>null </span>

    return (
        <>
        <div className="cards">  
        <div className="card">
<img src={props.src}></img>
<div className="info">
    <span><h3>{props.title}</h3>
<span>Netflix original</span></span>

<a href={props.link}><button><span>watch now {a}</span></button></a>

</div>

        </div>










        </div>
        
        
        
        
        
        
        
        </>







    );}
    export default  A;
    