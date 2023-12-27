import React, { useState } from "react"
import './joue.css'


export default function PresentationF(props){
  const [face,setFace]=useState(0);
   const [num,setNum]= useState(0)
 
const handlerFace =( )=>{
 setFace(Math.floor(Math.random()*6)+1)
  setNum(preventnum => num + 1)
   
} 
const  handlerInitial =( )=>{
  setFace( 0)
   setNum( 0)
    
 } 
const winceur =()=>{
  if(face === props.winner){
    return (<>Bravo vous avez trouvez la face cachée….<br />
    <button onClick={handlerInitial}>initialiser</button>
    </>)
  }else{
    return  <button onClick={handlerFace}>jouer</button>;
  }
} 
const AfichePhoto =()=>{
  if(face === 1){
    return <img src="data:image/png;base64,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" />
    
  }
  if(face === 2){
    return <img src="data:image/png;base64,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" />
    
  }
  if(face === 3){
    return <img src="data:image/png;base64,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" />
    
  }if(face === 4){
    return <img src="data:image/png;base64,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" />
    
  }
  if(face === 5){
    return <img src="data:image/png;base64,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" />
    
  }
  if(face === 6){
    return <img src="data:image/png;base64,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" />
    
  }
} 
 return (
      <>
      {AfichePhoto()}
      <h1>Face : {face}</h1>
      <h1>Nombre D'essais :{num}</h1>
      <h1>{winceur()} </h1>
      
      </> 
      
    )
}