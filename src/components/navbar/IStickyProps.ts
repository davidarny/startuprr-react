import { CSSProperties } from "react";

export interface IStickyProps {
    style: CSSProperties;
    isSticky: boolean;
    wasSticky: boolean;
    distanceFromTop: number;
    distanceFromBottom: number;
    calculatedHeight: number;
}
