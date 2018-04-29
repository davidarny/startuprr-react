import * as React from "react";
import { HeaderItem } from "@components/header/components";
import "./SubtitleUpper.scss";

export const SubtitleUpper: React.SFC = () => {
    return (
        <HeaderItem className={"header__subtitle header__subtitle--upper"}>
            <span className={"text-uppercase"}>What are you waiting for?</span>
        </HeaderItem>
    );
};
