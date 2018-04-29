import * as React from "react";
import { HeaderItem } from "@components/header/components";
import "./Title.scss";

export const Title: React.SFC = () => {
    return (
        <HeaderItem className={"header__title"}>
            <span className={"text-uppercase"}>Let's be creative!</span>
        </HeaderItem>
    );
};
