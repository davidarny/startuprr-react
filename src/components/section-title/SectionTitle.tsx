import * as React from "react";
import { ISectionTitleProps } from "./ISectionTitleProps";
import { insertClassName } from "@utils";
import "./SectionTitle.scss";

export const SectionTitle: React.SFC<ISectionTitleProps> = ({
                                                                focusPart,
                                                                firstPart,
                                                                lastPart,
                                                                subtitle,
                                                                isLined = false,
                                                            }) => {
    return (
        <div
            className={insertClassName(
                "section-title",
                `${isLined ? "section-title--lined" : ""}`,
                "header__item",
                `section-title--${focusPart}-word-focus`,
            )}
        >
            <div className="section-title__title">
                <div className="section-title__line"/>
                <div className="section-title__inner">
                    <span
                        className={"section-title__icon \ " +
                        "section-title__icon--left"}
                    />
                    <span
                        className={"section-title__word \ " +
                        "section-title__first-part"}
                    >
                        {firstPart}
                    </span>
                    <span
                        className={"section-title__word \ " +
                        "section-title__last-part"}
                    >
                        {lastPart}
                    </span>
                    <span
                        className={"section-title__icon \ " +
                        "section-title__icon--right"}
                    />
                </div>
            </div>
            {subtitle &&
            <div className={"section-title__subtitle"}>{subtitle}</div>}
        </div>
    );
};
