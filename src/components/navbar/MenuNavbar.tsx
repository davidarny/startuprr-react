import * as React from "react";
import { Component } from "react";
import { Nav, Navbar } from "@components/vendor";
import { MenuNavItem } from "@components/navbar/components";
import { IMenuNavbarState } from "./IMenuNavbarState";
import bind from "bind-decorator";
import logo from "./assets/logo.png";
import "./MenuNavbar.scss";

export interface IMenuNavbarProps {
    style: object;
}

export class MenuNavbar extends Component<IMenuNavbarProps, IMenuNavbarState> {
    state: IMenuNavbarState = { expanded: false };

    render() {
        return (
            <Navbar
                style={this.props.style}
                collapseOnSelect={true}
                expanded={this.state.expanded}
                onToggle={this.onToggle}
            >
                <Navbar.Header>
                    <Navbar.Toggle onClick={this.onForceToggle}/>
                    <Navbar.Brand>
                        <a href={"/startuprr-react"}>
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
            </Navbar>
        );
    }

    @bind
    private onForceToggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    @bind
    private onToggle() {
        if (!this.state.expanded) {
            return;
        }
        this.setState({ expanded: !this.state.expanded });
    }
}
