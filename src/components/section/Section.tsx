import * as React from "react";
import { ISectionProps } from "@components/section";
import "./Section.scss";

export const Section: React.SFC<ISectionProps> = ({ children, className }) => {
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

function insertClassName(className?: string, infix?: boolean): string {
    if (className) {
        if (infix) {
            return `${className}__inner`;
        } else {
            return className;
        }
    } else {
        return "";
    }
}
