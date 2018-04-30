import * as React from "react";
import { Link, NavItem, SCROLL_DURATION } from "@components/vendor";
import { IMenuNavItemProps } from "./IMenuNavItemProps";
import "./MenuNavItem.scss";

export const MenuNavItem: React.SFC<IMenuNavItemProps> = ({
                                                              title,
                                                              isLink,
                                                              to,
                                                              onClick,
                                                          }) => {
    return (
        <NavItem
            className={"nav__item"}
            componentClass={"span"}
        >
            {isLink && to ?
                <Link
                    activeClass={"nav__item--active"}
                    className={"nav__item__link"}
                    to={to}
                    smooth={true}
                    spy={true}
                    ignoreCancelEvents={true}
                    duration={SCROLL_DURATION}
                    onClick={onClick}
                >
                    {title}
                </Link>
                :
                <a
                    onClick={onClick}
                    className={"nav__item__link"}
                >
                    {title}
                </a>
            }
        </NavItem>
    );
};
