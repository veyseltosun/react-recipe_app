import React, { useState } from 'react'
import { Nav, Logo, Hamburger, MenuLink, Menu } from './NavbarStyle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
        
        setIsOpen((prevSta) => !prevSta)
        
    }

    return (
        <Nav>
            <Logo to="/">
                <i>{"<veyo>"}</i> <span>recipe</span>
            </Logo>
            <Hamburger onClick={handleClick}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen} >
                <MenuLink to="/about">About</MenuLink>
                <a
                    href="https://github.com/veyseltosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration:"none"}}
                >
                    Github
                </a>
                <MenuLink to="/login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar