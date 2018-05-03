import * as React from "react";
import { Col } from "@components/vendor";
import { Icon } from "@components";
import "./SampleItem.scss";

export const SampleItem: React.SFC = () => {
    return (
        <Col lg={2} md={3} sm={4} xs={6}>
            <div className={"samples__item"}/>
            <div className={"samples__item__content"}>
                <Icon icon={"ios-key"} isRelative={true}/>
                <Icon icon={"ios-briefcase"} isRelative={true}/>
            </div>
        </Col>
    );
};
