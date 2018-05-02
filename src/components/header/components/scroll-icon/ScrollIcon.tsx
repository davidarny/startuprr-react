import * as React from "react";
import { HeaderItem } from "@components/header/components";
import "./ScrollIcon.scss";

export const ScrollIcon: React.SFC = () => {
    return (
        <a href={"#offerings"} data-scroll={true}>
            <HeaderItem className={"header__scroll-icon"}/>
        </a>
    );
};
