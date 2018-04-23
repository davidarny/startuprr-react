import * as React from "react";
import { HeaderItem } from "@components/header/components";
import "./SubtitleLower.scss";

export const SubtitleLower: React.SFC = () => {
    return (
        <HeaderItem className={"header__subtitle header__subtitle--lower"}>
            <div className="header__subtitle__inner">
                <span className="header__subtitle__first-word">
                    <span
                        className="header__subtitle__first-word__first-letter"
                    >
                        S
                    </span>
                    <span>tartuprr,&nbsp;</span>
                </span>
                <span className="text-uppercase">
                    NEXT GENERATION & HIGHLY FLEXIBLE WORDPRESS THEME
                </span>
            </div>
        </HeaderItem>
    );
};
