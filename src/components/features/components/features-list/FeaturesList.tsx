import * as React from "react";
import { FeaturesItem } from "@components";
import "./FeaturesList.scss";

export const FeaturesList: React.SFC = () => {
    return (
        <div className="features__list clearfix">
            <FeaturesItem
                iconName={"desktop"}
                title={"Responsive & multipurpose"}
                content={"Proin in magna a ipsum viverra scelerisq enec \ " +
                "turp, nunc vestibulum."}
            />
            <FeaturesItem
                iconName={"build"}
                title={"Easy customization"}
                content={"Proin in magna a ipsum viverra scelerisq enec \ " +
                "turp, nunc vestibulum."}
            />
            <FeaturesItem
                iconName={"star"}
                title={"Unlimited features"}
                content={"Proin in magna a ipsum viverra scelerisq enec \ " +
                "turp, nunc vestibulum."}
            />
        </div>
    );
};
