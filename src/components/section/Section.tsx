import * as React from "react";
import { ISectionProps } from "./ISectionProps";
import "./Section.scss";

export const Section: React.SFC<ISectionProps> = ({
                                                      children,
                                                      className,
                                                  }) => {
    return (
        <div className={`section ${insertClassName(className)}`}>
            <div
                className={`
                    section__inner
                    ${insertClassName(className, true)}
                `}
            >
                {children}
            </div>
        </div>
    );
};

function insertClassName(className?: string, postfix?: boolean): string {
    if (className) {
        if (postfix) {
            return `${className}__inner`;
        } else {
            return className;
        }
    } else {
        return "";
    }
}
