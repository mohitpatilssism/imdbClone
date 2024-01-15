// import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            navigate('/')
        }
    });
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <form id="log">
                            <h1>LOGIN</h1>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="checkbox">
                                <label><input type='checkbox'></input>Remember me</label>
                            </div>

                            <div class="d-grid gap-2">
                                <button onClick={login} class="btn btn-info mt-5" type="submit">LOGIN</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                </div>
            </div>
        </>
    )
}
export default Login;