import { IHeaderItemProps } from "./index";
import * as React from "react";
import "./HeaderItem.scss";

export const HeaderItem: React.SFC<IHeaderItemProps> = ({
                                                            children,
                                                            className,
                                                        }) => {
    return (
        <div className={`header__item ${className ? className : ""}`}>
            {children}
        </div>
    );
};
