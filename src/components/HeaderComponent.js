import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

function Header() {


    // useEffect(() => {
    //     window.onscroll = () => {
    //         const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
    //         if (this.state.currentScrollHeight != newScrollHeight) {
    //             this.setState({currentScrollHeight: newScrollHeight})
    //         }
    //     }
    // });

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
                                <NavLink href="/components/">Interior</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Architecture</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Services
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Properties
                                    </DropdownItem>
                                    <DropdownItem>
                                        Construction
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Call Us</NavbarText>
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