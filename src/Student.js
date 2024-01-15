import React,{useState} from 'react';


function Student() {
    const [Status,setStatus]=useState(false)
 

     return ( 
    <div className="App">
    {
     Status? <h1>Hello world</h1>:null
    }
    
    {/* <button onClick={()=>setStatus(false)}>Hide</button>
    <button onClick={()=>setStatus(true)}>Show</button> */}
    
    <button onClick={()=>setStatus(!Status)}>Toggle</button>

  
  
    </div>
 
     );
 }

export default Student;  