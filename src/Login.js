import React,{useState} from "react";
function Login(){

    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[userErr,setUserErr]=useState(false)
    const[userPassword,setUserPassword]=useState(false)
    function loginHandle(e){
         if(user.length<8 || password.length<8)
         {
            alert("type correct values")
         }
         else{
            alert("all good")
         }
        e.preventDefault()
    }
    function userHandler(e){
      let item = e.target.value;
      if(item.length<8){
       setUserErr(true)
      }
      else{
        setUserErr(false)
      }
      setUser(item)
    }

    
    function passwordHandler(e){
      let item = e.target.value;
      if(item.length<8){
       setUserPassword(true)
      }
      else{
        setUserPassword(false)
      }
      setPassword(item)
    }

    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter user id" onChange={userHandler}/> {userErr? <span>Name size 8 Character Minimum</span> :null} <br/><br/>
        <input type="text" placeholder="Enter user Password  " onChange={passwordHandler}/> {userPassword? <span>Password size 8 Character Minimum</span> :null}<br/><br/>
        <button type="submit">Login</button>
        </form>
    </div>
    )
   
}

export default Login;