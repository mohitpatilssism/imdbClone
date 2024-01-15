import { Link}  from "react-router-dom";

function Home ()  {
;
  return (
    <>
   <h1>Hello home</h1>
   <p>This is Home Page of our awesome App</p>
     <p>and here we are learning about router</p>
     <Link to="/About">Go to About Page</Link>
    
     
    </>
  )
}

export default Home;