import * as React from "react";
import { IOfferingsItem } from "./IOfferingsItem";
import { Button } from "@components";
import {
    OfferingsIcon,
    OfferingsItemSubtitle,
    OfferingsItemTitle,
} from "@components/offerings/components";
import { Col } from "@components/vendor";
import "./OfferingsItem.scss";

export const OfferingsItem: React.SFC<IOfferingsItem> = ({
                                                             title,
                                                             subtitle,
                                                             iconName,
                                                         }) => {
    return (
        <Col sm={12} md={12} lg={4} className={"offerings__item"}>
            <OfferingsIcon iconName={iconName}/>
            <OfferingsItemTitle title={title}/>
            <OfferingsItemSubtitle subtitle={subtitle}/>
            <Button href={"#"} value={"Read more"}/>
        </Col>
    );
};
