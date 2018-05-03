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
            icon ion ion-${icon}
            ${isRotated ? "icon--rotated" : ""}
            ${isRelative ? "icon--relative" : ""}
            `)}
        />
    );
};
