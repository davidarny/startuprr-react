import * as React from "react";
import { Features, Header, Offerings } from "@components";
import { StickyContainer } from "react-sticky";
import { StickyNavbar } from "@components/navbar";

export const App: React.SFC = () => {
    return (
        <StickyContainer>
            <Header/>
            <StickyNavbar/>
            <Offerings/>
            <Features/>
        </StickyContainer>
    );
};
