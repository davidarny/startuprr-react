import * as React from "react";
import { CSSProperties, PureComponent } from "react";
import { Nav, Navbar, NavItem } from "@components/vendor";
import { IMenuNavbarState } from "./IMenuNavbarState";
import { IMenuNavbarProps } from "./IMenuNavbarProps";
import bind from "bind-decorator";
import logo from "./assets/logo.png";
import "./MenuNavbar.scss";

// TODO: implement scroll-spy
class MenuNavbar extends PureComponent<IMenuNavbarProps, IMenuNavbarState> {
    static readonly MENU_HEIGHT = 100;
    static readonly PADDING = 25;
    static readonly BORDER_WIDTH = 1;
    static readonly STICKY_STYLE: CSSProperties = {
        minHeight: `${MenuNavbar.MENU_HEIGHT / 2}px`,
        padding: `${MenuNavbar.PADDING / 5}px 0`,
    };
    static readonly DEFAULT_STYLE: CSSProperties = {
        minHeight: `${MenuNavbar.MENU_HEIGHT}px`,
        padding: `${MenuNavbar.PADDING}px 0`,
    };
    static readonly ELEMENT_ID = "navbar";
    state: IMenuNavbarState = { activeKey: 0 };

    private static setParentHeight(): void {
        const navbar = document.getElementById(MenuNavbar.ELEMENT_ID);
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
                data-scroll-header={true}
                id={MenuNavbar.ELEMENT_ID}
                style={{ ...MenuNavbar.DEFAULT_STYLE, ...this.props.style }}
                collapseOnSelect={true}
            >
                <Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Brand>
                        <a href={"/startuprr-react"}>
                            <img src={logo} alt={"brand"}/>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav
                        pullRight={true}
                        activeKey={this.state.activeKey}
                        onSelect={this.onSelect}
                    >
                        <NavItem
                            eventKey={0}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#header"}
                        >
                            Home
                        </NavItem>
                        <NavItem
                            eventKey={1}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#offerings"}
                        >
                            Offerings
                        </NavItem>
                        <NavItem
                            eventKey={2}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#features"}
                        >
                            Features
                        </NavItem>
                        <NavItem
                            eventKey={3}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#more-features"}
                        >
                            More features
                        </NavItem>
                        <NavItem
                            eventKey={4}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#skills"}
                        >
                            Skills
                        </NavItem>
                        <NavItem
                            eventKey={5}
                            className={"nav__item"}
                            data-scroll={true}
                            href={"#sample-works"}
                        >
                            Sample works
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    @bind
    private onSelect(selectedKey: /* tslint:disable:no-any */ any) {
        this.setState({ activeKey: selectedKey });
    }
}

export { MenuNavbar };
