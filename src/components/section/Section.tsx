import * as React from "react";
import { ISectionProps } from "./ISectionProps";
import "./Section.scss";

export const Section: React.SFC<ISectionProps> = ({
                                                      children,
                                                      className,
                                                      isDark,
                                                  }) => {
    return (
        <div
            className={`
                section ${className ? className : ""}
                ${isDark ? "section--dark" : ""}`
            }
        >
            <div
                className={`
                    section__inner
                    ${className ? className + "__inner" : ""}
                `}
            >
                {children}
            </div>
        </div>
    );
};
