import * as React from "react";
import { IButtonProps } from "./IButtonProps";
import "./Button.scss";

export const Button: React.SFC<IButtonProps> = ({ href, value }) => {
    return (
        <div className={"button"}>
            <a href={href} className={"button__link"}>{value}</a>
        </div>
    );
};
