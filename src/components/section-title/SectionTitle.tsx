import * as React from "react";
import "./SectionTitle.scss";
import { ISectionTitleProps } from "@components/section-title";

export const SectionTitle: React.SFC<ISectionTitleProps> = ({
                                                                focusPart,
                                                                firstPart,
                                                                lastPart,
                                                                subtitle,
                                                            }) => {
    return (
        <div
            className={`
                section-title
                header__item
                section-title--${focusPart}-word-focus
                `}
        >
            <span className="section-title__icon section-title__icon--left"/>
            <span className="section-title__first-part">{firstPart}</span>
            <span className="section-title__last-part"> {lastPart}</span>
            <span className="section-title__icon section-title__icon--right"/>
            {subtitle &&
            <div className="section-title__subtitle">{subtitle}</div>}
        </div>

    );
};
