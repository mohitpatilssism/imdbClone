import { Link } from "react-router-dom";

function Page404(){
    return(
        <>
        <h1>404page</h1>
        <p>This page not found</p>
        <Link to="/Home">Go to Home page</Link>
        </>
    )
}
export default Page404;