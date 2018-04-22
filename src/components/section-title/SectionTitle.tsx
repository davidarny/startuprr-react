import * as React from "react";
import "./SectionTitle.scss";

interface ISectionTitleProps {
    focusPart: "first" | "last";
    firstPart: string;
    lastPart: string;
    subtitle?: string;
}

export const SectionTitle: React.SFC<ISectionTitleProps> = ({ focusPart, firstPart, lastPart, subtitle }) => {
    return (
        <div className={`section-title section-title--${focusPart}-word-focus`}>
            <span className="section-title__icon section-title__icon--left"/>
            <span className="section-title__first-part">{firstPart}</span>
            <span className="section-title__last-part"> {lastPart}</span>
            <span className="section-title__icon section-title__icon--right"/>
            {subtitle && <div className="section-title__subtitle">{subtitle}</div>}
        </div>

    );
};
