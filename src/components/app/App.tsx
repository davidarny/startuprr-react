import { Features, Header, MenuNavbar, Offerings } from "@components";
import * as React from "react";

export const App: React.SFC = () => {
    return (
        <>
            <Header/>
            <MenuNavbar/>
            <Offerings/>
            <Features/>
        </>
    );
};
