import * as React from "react";
import { Component } from "react";
import { Grid, Nav, Navbar } from "@components/vendor";
import { MenuNavItem } from "@components/navbar/components";
import { IMenuNavbarState } from "./IMenuNavbarState";
import bind from "bind-decorator";
import logo from "./assets/logo.png";
import "./MenuNavbar.scss";

export class MenuNavbar extends Component<{}, IMenuNavbarState> {
    state: IMenuNavbarState = { expanded: false };

    render() {
        return (
            <Navbar
                collapseOnSelect={true}
                expanded={this.state.expanded}
                onToggle={this.onToggle}
            >
                <Grid>
                    <Navbar.Header>
                        <Navbar.Toggle onClick={this.onToggle}/>
                        <Navbar.Brand>
                            <a href="/">
                                <img src={logo} alt={"brand"}/>
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight={true}>
                            <MenuNavItem
                                onClick={this.onToggle}
                                isLink={true}
                                to={"header"}
                                title={"Home"}
                            />
                            <MenuNavItem
                                isLink={true}
                                to={"offerings"}
                                title={"Offerings"}
                                onClick={this.onToggle}
                            />
                            <MenuNavItem
                                isLink={true}
                                to={"features"}
                                title={"Features"}
                                onClick={this.onToggle}
                            />
                            <MenuNavItem
                                title={"Blog"}
                                onClick={this.onToggle}
                            />
                            <MenuNavItem
                                title={"Pages"}
                                onClick={this.onToggle}
                            />
                            <MenuNavItem
                                title={"Mega Menu"}
                                onClick={this.onToggle}
                            />
                            <MenuNavItem
                                title={"Contact"}
                                onClick={this.onToggle}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Grid>
            </Navbar>
        );
    }

    @bind
    private onToggle() {
        this.setState({ expanded: !this.state.expanded });
    }
}
