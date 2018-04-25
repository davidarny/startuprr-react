import * as React from "react";
import { Section, SectionTitle } from "@components";
import { FeaturesIpad, FeaturesList } from "@components/features/components";
import "./Feature.scss";

export const Features: React.SFC = () => {
    return (
        <Section className={"features"} isDark={true}>
            <div className="container">
                <i
                    className={
                        "section__icon section__icon--rotated \ " +
                        "ion ion-ios-key"
                    }
                />
                <div className="row">
                    <div className="col-sm-12">
                        <SectionTitle
                            focusPart={"last"}
                            firstPart={"Amazing"}
                            lastPart={"features"}
                            subtitle={
                                "With unlimited features that we \ " +
                                "offer, we promise it’s possible to make \ " +
                                "everything that was impossible for you!"
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-4">
                        <FeaturesList/>
                    </div>
                    <div
                        className={
                            "hidden-xs hidden-sm col-md-7 \ " +
                            "col-lg-8"
                        }
                    >
                        <FeaturesIpad/>
                    </div>
                </div>
            </div>
        </Section>
    );
};
