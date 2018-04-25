import { Features, Header, Navbar, Offerings } from "@components";
import * as React from "react";

export const App: React.SFC = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Offerings/>
            <Features/>
        </>
    );
};
