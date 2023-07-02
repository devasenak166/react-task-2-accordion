import {useState} from 'react';
import '../App.css'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsDashCircleFill } from "react-icons/bs";
const Acc=({property})=>{
    console.log(property)
    const{question,answer}=property;
    const[show,setshow]=useState(false)
    return(
    <>
<div className="items">
<div className="question">
{question}
{show ? <span onClick={()=>setshow(false)}><BsDashCircleFill style={{background:"white",fontSize:"30px"}}/></span> :<span onClick={()=>setshow(true)}><BsFillPlusCircleFill style={{background:"white",fontSize:"30px"}}/></span>}
    </div>
  
    {show ? <div className="answerShow"><p>
{answer}</p></div>:<div className="answer">{answer}</div>}
 
  </div>
  </>
)}
export default Acc;