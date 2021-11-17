import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, Button, NavLink, NavbarText } from 'reactstrap';
import { Link, } from 'react-router-dom';

import Logo from '../assets/img/zora_full.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
                                about
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}


export default Header;