import SubtitleLower from "@components/header/components/subtitle-lower";
import SubtitleUpper from "@components/header/components/subtitle-upper";
import Title from "@components/header/components/title";
import SectionTitle from "@components/section-title";
import * as React from "react";
import "./Header.scss";

export const Header: React.SFC = () => {
    return (
        <div className="header section">
            <div className="header__background"/>
            <div className="section__inner header__inner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-lg-offset-0">
                            <SubtitleUpper/>
                            <Title/>
                            <SubtitleLower/>
                            <SectionTitle
                                focusPart={"first"}
                                firstPart={"Start"}
                                lastPart={"doing this"}
                            />
                            <div className="header__item header__scroll-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
