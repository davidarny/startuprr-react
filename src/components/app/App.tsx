import * as React from "react";
import { Features, Header, MoreFeatures, Offerings, Skills } from "@components";
import { StickyContainer } from "react-sticky";
import { StickyNavbar } from "@components/navbar";

export const App: React.SFC = () => {
    return (
        <StickyContainer>
            <Header/>
            <StickyNavbar/>
            <Offerings/>
            <Features/>
            <MoreFeatures/>
            <Skills/>
        </StickyContainer>
    );
};
