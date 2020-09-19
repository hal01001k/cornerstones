import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
 import { NavLink } from "react-router-dom";
function Header() {



    const Exa = (props) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
                <Navbar id='nb' className="fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/">Cornerstones</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/interior'>Interior</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Services
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Architecture
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to='/propertise'>Propertise</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Call Us: 8105621284</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    return (
        <div>
            <Exa/>
        </div>
    )
}

export default Header;