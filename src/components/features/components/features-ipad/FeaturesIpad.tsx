import * as React from "react";
import "./FeaturesIpad.scss";

export const FeaturesIpad: React.SFC = () => {
    return (
        <div className="features__ipad__wrapper">
            <div className="features__ipad features__ipad--portrait"/>
            <div className="features__ipad features__ipad--landscape"/>
        </div>
    );
};
