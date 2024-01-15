import React from "react";
import "./Header.css";
import { Link,useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/login")
        
    }
    return (

        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/"><img className="header_icon" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2250646-f082-466e-a7ba-09aa53e98ec9/dca1sbl-31287d3a-7709-48e7-84ec-672305bd15a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyMjUwNjQ2LWYwODItNDY2ZS1hN2JhLTA5YWE1M2U5OGVjOVwvZGNhMXNibC0zMTI4N2QzYS03NzA5LTQ4ZTctODRlYy02NzIzMDViZDE1YTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TkaM473TdINQ2eUDzhQv4kMsetcnEzEyr_X7oVZFKgg" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link ><Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link></Nav.Link>
                            <Nav.Link><Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top_Rated</span></Link></Nav.Link>
                            <Nav.Link><Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link></Nav.Link>
                            {
                                localStorage.getItem("login")?
                                <Nav.Link><button className="btn btn-info" style={{ textDecoration: "none" }} onClick={logout}>logout</button></Nav.Link>
:
                                <Nav.Link><Link to="/login" style={{ textDecoration: "none" }}><span>Log In</span></Link></Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;
