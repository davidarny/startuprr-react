import * as React from "react";
import { MenuNavbar } from "./MenuNavbar";
import { IStickyProps } from "./IStickyProps";
import { Sticky } from "react-sticky";

const renderStickyNavbar = (props: IStickyProps) => {
    if (props.isSticky) {
        props.style = {
            ...MenuNavbar.STICKY_STYLE,
            ...props.style,
        };
    }
    return <MenuNavbar style={props.style}/>;
};

// TODO: handling window resize
const StickyNavbar: React.SFC = () => {
    return (
        <Sticky
            disableCompensation={true}
            topOffset={window.innerHeight}
        >
            {renderStickyNavbar}
        </Sticky>
    );
};

export { StickyNavbar };
