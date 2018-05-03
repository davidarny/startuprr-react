import * as React from "react";
import "./SmapleWorks.scss";
import { Section, SectionTitle } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import { SampleItem } from "@components/sample-works/components";

export const SampleWorks: React.SFC = () => {
    return (
        <Section className={"sample-works"} id={"sample-works"}>
            <Grid>
                <Row>
                    <Col sm={12}>
                        <SectionTitle
                            focusPart={"last"}
                            firstPart={"sample"}
                            lastPart={"works"}
                            subtitle={
                                "Let’s take a look at some of the \ " +
                                "best of our works here, we love \ " +
                                "them and hope you too"
                            }
                        />
                    </Col>
                </Row>
                <Row className={"samples__row"}>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                    <SampleItem/>
                </Row>
            </Grid>
        </Section>
    );
};
