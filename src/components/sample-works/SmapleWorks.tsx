import * as React from "react";
import { Section, SectionTitle } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import { SampleItem } from "@components/sample-works/components";
import "./SmapleWorks.scss";

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
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                </Row>
            </Grid>
        </Section>
    );
};
