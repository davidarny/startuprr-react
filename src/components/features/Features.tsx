import * as React from "react";
import { Icon, Section, SectionTitle } from "@components";
import { FeaturesIpad, FeaturesList } from "@components/features/components";
import { Col, Grid, Row } from "@components/vendor";
import "./Feature.scss";

export const Features: React.SFC = () => {
    return (
        <Section className={"features"} id={"features"} isDark={true}>
            <Grid>
                <Icon icon={"ios-key"} isRotated={true}/>
                <Row>
                    <Col sm={12}>
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
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={5} lg={4}>
                        <FeaturesList/>
                    </Col>
                    <Col xsHidden={true} smHidden={true} md={7} lg={8}>
                        <FeaturesIpad/>
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};
