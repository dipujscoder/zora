import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, Button, NavLink, NavbarText } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';



import Logo from '../assets/img/zora_full.png'

const Header = (prpos) => {
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = prpos.history.location;


    return (

        <>

            {
                pathname !== '/login' ?
                    <header className="header">
                        <Navbar expand="md">
                            <Link to="/">
                                <img src={Logo} alt="Zora" className="logo" />
                            </Link>
                            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                            <Collapse navbar isOpen={isOpen}>
                                <Nav className="ms-auto" navbar >
                                    <NavItem>
                                        <Link to="/" className="nav-link">
                                            About
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/" className="nav-link">
                                            Product
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/contact-us" className="nav-link">
                                            Contact-us
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </NavItem>

                                </Nav>
                            </Collapse>
                        </Navbar>
                    </header> :
                    ""
            }


        </>
    )


}


export default withRouter(Header);