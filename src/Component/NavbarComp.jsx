import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavbarText,
    NavItem,
    // NavLink,
    Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './CSS/NavbarComp.css';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="md" className="p-3 shadow-lg fixed-top">
                <NavbarBrand to="/">Berisi</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;