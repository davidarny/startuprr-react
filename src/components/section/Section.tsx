import * as React from "react";
import { ISectionProps } from "./ISectionProps";
import { insertClassName } from "@utils";
import "./Section.scss";

export const Section: React.SFC<ISectionProps> = ({
                                                      children,
                                                      className,
                                                      id,
                                                      isDark,
                                                  }) => {
    return (
        <div
            className={insertClassName(
                `section ${className ? className : ""}`,
                `${isDark ? "section--dark" : ""}`,
            )}
            id={id}
        >
            <div
                className={insertClassName(
                    "section__inner",
                    `${className ? className + "__inner" : ""}`,
                )}
            >
                {children}
            </div>
        </div>
    );
};
