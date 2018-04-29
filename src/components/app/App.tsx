import * as React from "react";
import { Features, Header, MenuNavbar, Offerings } from "@components";
import { Sticky, StickyContainer } from "react-sticky";

export const App: React.SFC = () => {
    return (
        <StickyContainer>
            <Header/>
            {/* TODO: handling window resize */}
            <Sticky topOffset={window.innerHeight}>
                {(props: { style: object }) =>
                    <MenuNavbar style={props.style}/>}
            </Sticky>
            <Offerings/>
            <Features/>
        </StickyContainer>
    );
};
