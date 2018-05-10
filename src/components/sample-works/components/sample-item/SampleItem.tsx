import * as React from "react";
import { Col } from "@components/vendor";
import { Icon } from "@components";
import { ISampleItemProps } from "./ISampleItemProps";
import { SampleDescription } from "@components/sample-works/components";
import "./SampleItem.scss";

export const SampleItem: React.SFC<ISampleItemProps> = ({
                                                            title,
                                                            subtitle,
                                                            leftIcon,
                                                            likesCount,
                                                            rightIcon,
                                                        }) => {
    return (
        <Col lg={2} md={3} sm={4} xs={6}>
            <div className={"samples__item"}/>
            <div className={"samples__item__content"}>
                <div className="sample__icon__wrapper">
                    <Icon icon={leftIcon} isRelative={true}/>
                    <Icon icon={rightIcon} isRelative={true}/>
                </div>
                <div className="sample__description">
                    <SampleDescription
                        likesCount={likesCount}
                        subtitle={subtitle}
                        title={title}
                    />
                </div>
            </div>
        </Col>
    );
};
