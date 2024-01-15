import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1>Hello About</h1>
            <p>This is Aboout Page of our awesome App</p>
            <p>and here we are learning about router</p>
            <Link to="/Home">Go to Home Page</Link>
            <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/peter">peter</Link></li>

        </>
    )
}

export default About;