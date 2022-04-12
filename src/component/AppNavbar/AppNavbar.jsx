import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css'
import '../../index.css'


function AppNavbar() {
    return(
        <React.Fragment>
            <Navbar expand="lg" className="main-navbar" sticky="top">
                <Container>
                    <Link to="/" className="navbar-brand title__color">Islamic Cognizance</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto nav-font">

                            <Link  to='/' className="NavUl" >Home</Link>
                            <Link  to='secondCard' className="NavUl">SecondCard</Link>
                            <Link  to='listen-quran' className="NavUl">Listen Quran</Link>
                            <Link  to='al-hadees' className="NavUl">Al-Hadees</Link>
                            <Link  to='feedback' className="NavUl">Feedback</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default AppNavbar;

// 01AC67
// 26A567
// #F5F9FC
// #007300