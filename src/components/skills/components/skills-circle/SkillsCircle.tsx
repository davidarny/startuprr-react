import * as React from "react";
import "./SkillsCircle.scss";
import { ISkillsCircleProps } from "./ISkillsCircleProps";

export const SkillsCircle: React.SFC<ISkillsCircleProps> = ({
                                                                title,
                                                                percent,
                                                            }) => {
    return (
        <div className={"skills__circle"}>
            <div
                className={
                    "circle__progress__overlay \ " +
                    `circle__progress__overlay--${percent}`
                }
            >
                <div className={"circle__progress"}>
                    <span className={"circle__percent"}>{percent}
                        <span className={"circle__percent__sign"}>%</span>
                    </span>
                </div>
            </div>
            <div className={"circle__title"}>{title}</div>
        </div>
    );
};
