import * as React from "react";
import { IOfferingsItemTitle } from "./IOfferingsItemTitle";
import "./OfferingsItemTitle.scss";

export const OfferingsItemTitle: React.SFC<IOfferingsItemTitle> = ({
                                                                       title,
                                                                   }) => {
    return (
        <div className="offerings__item__title">
            <span>{title}</span>
        </div>
    );
};
