import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login(){

    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/home')
    }
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/home')
        }
    });

    return(
   <>
    <input type="text"/><br/>
    <input type="text"/><br/>
    <button onClick={login}>Log In</button>
   </>
    )
}
export default Login;