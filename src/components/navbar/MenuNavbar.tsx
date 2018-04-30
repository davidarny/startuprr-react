import * as React from "react";
import { CSSProperties, PureComponent } from "react";
import { Nav, Navbar } from "@components/vendor";
import { MenuNavItem } from "@components/navbar/components";
import { IMenuNavbarState } from "./IMenuNavbarState";
import { IMenuNavbarProps } from "./IMenuNavbarProps";
import bind from "bind-decorator";
import logo from "./assets/logo.png";
import "./MenuNavbar.scss";

class MenuNavbar extends PureComponent<IMenuNavbarProps, IMenuNavbarState> {
    public static readonly STICKY_STYLE: CSSProperties = {
        minHeight: "50px",
        padding: "5px 0",
    };
    private static readonly DEFAULT_STYLE: CSSProperties = {
        minHeight: "100px",
        padding: "25px 0",
    };
    private static readonly ID = "navbar";
    state: IMenuNavbarState = { expanded: false };

    private static setParentHeight(): void {
        const navbar = document.getElementById(MenuNavbar.ID);
        if (!navbar) {
            return;
        }
        const parent = navbar.parentElement;
        if (!parent) {
            return;
        }
        parent.style.height = MenuNavbar.DEFAULT_STYLE.minHeight as string;
    }

    componentDidMount() {
        MenuNavbar.setParentHeight();
    }

    render() {
        return (
            <Navbar
                id={MenuNavbar.ID}
                style={{ ...MenuNavbar.DEFAULT_STYLE, ...this.props.style }}
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

export { MenuNavbar };
