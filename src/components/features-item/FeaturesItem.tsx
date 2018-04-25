import * as React from "react";
import { IFeaturesItemProps } from "./IFeaturesItemProps";
import "./FeaturesItem.scss";

export const FeaturesItem: React.SFC<IFeaturesItemProps> = ({
                                                                subtitle,
                                                                iconName,
                                                                title,
                                                                content,
                                                            }) => {
    return (
        <div className="features__list__item clearfix">
            <div className="features__icon">
                <i className={`ion ion-ios-${iconName}`}/>
            </div>
            <div className="features__description">
                {title && <div className="features__title">{title}</div>}
                {subtitle &&
                <div className="features__subtitle">{subtitle}</div>}
                {content && <div className="features__content">{content}</div>}
            </div>
        </div>

    );
};
