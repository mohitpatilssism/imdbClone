import { Link, Outlet } from "react-router-dom";

function Contact(){

      return(
        <>
        <h1>Contact Us Page</h1>
        <h2>Here We have Some Other Business</h2>
       <Link to="company">Company</Link>
       <Link to="channel">Channel</Link>
       <Link to="other">Other</Link>
       <Outlet/>
           </>
       
    )
}
export default Contact;


