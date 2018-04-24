import * as React from "react";
import { IOfferingsIconProps } from "./IOfferingsIconProps";
import "./OfferingsIcon.scss";

export const OfferingsIcon: React.SFC<IOfferingsIconProps> = ({ iconName }) => {
    return (
        <div className="offerings__item__icon">
            <div className="offerings__item__icon__wrapper">
                <i className={`ion ion-ios-${iconName}`}/>
            </div>
        </div>
    );
};
