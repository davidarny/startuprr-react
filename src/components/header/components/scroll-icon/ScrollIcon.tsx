import * as React from "react";
import { Link, SCROLL_DURATION } from "@components/vendor";
import { HeaderItem } from "@components/header/components";
import "./ScrollIcon.scss";

export const ScrollIcon: React.SFC = () => {
    return (
        <Link
            to={"offerings"}
            smooth={true}
            ignoreCancelEvents={true}
            isDynamic={true}
            duration={SCROLL_DURATION}
        >
            <HeaderItem className={"header__scroll-icon"}/>
        </Link>
    );
};
