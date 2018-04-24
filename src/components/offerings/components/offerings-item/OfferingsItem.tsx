import * as React from "react";
import { IOfferingsItem } from "./IOfferingsItem";
import { Button } from "@components";
import {
    OfferingsIcon,
    OfferingsItemSubtitle,
    OfferingsItemTitle,
} from "@components/offerings/components";
import "./OfferingsItem.scss";

export const OfferingsItem: React.SFC<IOfferingsItem> = ({
                                                             title,
                                                             subtitle,
                                                             iconName,
                                                         }) => {
    const cols: string = "col-sm-12 col-md-12 col-lg-4";
    return (
        <div className={`${cols} offerings__item`}>
            <OfferingsIcon iconName={iconName}/>
            <OfferingsItemTitle title={title}/>
            <OfferingsItemSubtitle subtitle={subtitle}/>
            <Button href={"#"} value={"Read more"}/>
        </div>
    );
};
