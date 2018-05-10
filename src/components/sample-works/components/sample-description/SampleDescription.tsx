import * as React from "react";
import { TSampleDescriptionProps } from "./TSampleDescriptionProps";
import { Icon } from "@components";
import "./SampleDescription.scss";

export const SampleDescription:
                 React.SFC<TSampleDescriptionProps> = ({
                                                           likesCount,
                                                           subtitle,
                                                           title,
                                                       }) => {
    return (
        <>
            <div className="sample__title">{title}</div>
            <div className="sample__subtitle">{subtitle}</div>
            <div className="sample__likes">
                <Icon icon={"ios-heart"} isRelative={true}/>
                <span>&nbsp;&nbsp;</span>
                <span>{likesCount}</span>
            </div>
        </>
    );
};
