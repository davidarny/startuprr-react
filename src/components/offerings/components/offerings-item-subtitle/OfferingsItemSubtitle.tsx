import * as React from "react";
import { IOfferingsItemSubtitle } from "./IOfferingsItemSubtitle";
import "./OfferingsItemSubtitle.scss";

type TOfferingsItemSubtitle = React.SFC<IOfferingsItemSubtitle>;

export const OfferingsItemSubtitle: TOfferingsItemSubtitle = ({
                                                                  subtitle,
                                                              }) => {
    return (
        <div className={"offerings__item__subtitle"}>
            <p>{subtitle}</p>
        </div>
    );
};
