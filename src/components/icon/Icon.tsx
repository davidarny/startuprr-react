import * as React from "react";
import { IIconProps } from "./IIconProps";
import { insertClassName } from "@utils";
import "./Icon.scss";

export const Icon: React.SFC<IIconProps> = ({
                                                icon,
                                                isRotated,
                                                isRelative,
                                            }) => {
    return (
        <i
            className={insertClassName(`
                romb-icon
                icon ion ion-${icon}
                ${isRotated ? "romb-icon--rotated" : ""}
                ${isRelative ? "romb-icon--relative" : ""}
            `)}
        />
    );
};
