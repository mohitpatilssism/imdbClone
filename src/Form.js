import { useState } from "react";

function Form(){

    const[name,setName]=useState("");
    const[interest,setInterest]=useState("")
    const[tnc,setTnc]=useState(false);
   function getFormData(e)
   {
    console.warn(name,interest,tnc)
    e.preventDefault()
   }

 return(
     <>
     <h1>handle Form in React</h1>
     <form onSubmit={getFormData}>
        <input type ="text" placeholder="Entar Your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
            <option>select Options</option>
            <option>ITEG</option>
            <option>BTEG</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>I Accept Terms And Conditions</span>
        <br/><br/>
        <button type="submit">Sumbit</button>
        
        
     </form>
     </>
 );


}
export default Form