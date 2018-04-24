import * as React from "react";
import { Section, SectionTitle } from "@components";
import {
    HeaderBackground,
    ScrollIcon,
    SubtitleLower,
    SubtitleUpper,
    Title,
} from "@components/header/components";
import "./Header.scss";

export const Header: React.SFC = () => {
    return (
        <Section className={"header"}>
            <HeaderBackground/>
            <div className="container">
                <div className="row">
                    <div
                        className={
                            "col-sm-12 col-md-12 col-lg-8 col-lg-offset-0"
                        }
                    >
                        <SubtitleUpper/>
                        <Title/>
                        <SubtitleLower/>
                        <SectionTitle
                            focusPart={"first"}
                            firstPart={"Start"}
                            lastPart={"doing this"}
                        />
                        <ScrollIcon/>
                    </div>
                </div>
            </div>
        </Section>
    );
};
