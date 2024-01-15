
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDtail/movie";
import Login from "./components/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Protected from "./components/login/Protected";

// import { Card } from "react-bootstrap";






function App() {
return(
  <div className="App">
  <Router>
  
    <Header/>
  
    <Routes>
      <Route index element={<Protected Component={Home}/>}></Route>
      <Route path="movie/:id" element={<Protected Component={Movie}/>}></Route>
      <Route path="movies/:type" element={<Protected Component={MovieList}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="*" element={<h1>Error Page</h1>}></Route>
    </Routes>
  </Router>
 
</div>
)
  
 
}
export default App;
