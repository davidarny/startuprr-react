import * as React from "react";
import { IButtonProps } from "./IButtonProps";
import "./Button.scss";
import { insertClassName } from "@utils";

export const Button: React.SFC<IButtonProps> = ({
                                                    href,
                                                    value,
                                                    className,
                                                    alwaysActive = false,
                                                }) => {
    return (
        <div
            className={insertClassName(`
                button ${className || ""}
                ${alwaysActive ? "button--active" : ""}
            `)}
        >
            <a href={href} className={"button__link"}>{value}</a>
        </div>
    );
};
