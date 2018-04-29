import * as React from "react";
import { Grid, Nav, Navbar, NavItem } from "@components/vendor";
import logo from "./assets/logo.png";
import "./MenuNavbar.scss";

export const MenuNavbar: React.SFC = () => {
    return (
        <Navbar collapseOnSelect={true}>
            <Grid>
                <Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Brand>
                        <a href="/">
                            <img src={logo} alt={"brand"}/>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight={true}>
                        <NavItem active={true} href={"#"}>Home</NavItem>
                        <NavItem href={"#"}>Portfolio</NavItem>
                        <NavItem href={"#"}>Blog</NavItem>
                        <NavItem href={"#"}>Pages</NavItem>
                        <NavItem href={"#"}>Features</NavItem>
                        <NavItem href={"#"}>Mega Menu</NavItem>
                        <NavItem href={"#"}>Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Grid>
        </Navbar>
    );
};
