import * as React from "react";
import { Icon, Section, SectionTitle } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import "./CompanyFacts.scss";
import { CompanyFact } from "@components/company-facts/components";

export const CompanyFacts: React.SFC = () => {
    return (
        <Section
            className={"company-facts"}
            id={"company-facts"}
            isDark={true}
        >
            <Grid>
                <Icon icon={"ios-briefcase"}/>
                <Row>
                    <Col sm={12}>
                        <SectionTitle
                            focusPart={"last"}
                            firstPart={"company"}
                            lastPart={"facts"}
                            subtitle={
                                "We do love to work and increase our \ " +
                                "counter numbers, this is what we’ve \ " +
                                "done till now"
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <CompanyFact
                            icon={"ios-checkbox-outline"}
                            count={218}
                            subtitle={"completed projects"}
                        />
                    </Col>
                    <Col lg={3}>
                        <CompanyFact
                            icon={"ios-clock"}
                            count={360}
                            subtitle={"hours of work / month"}
                        />
                    </Col>
                    <Col lg={3}>
                        <CompanyFact
                            icon={"ios-paper-plane"}
                            count={135}
                            subtitle={"solved tickets"}
                        />
                    </Col>
                    <Col lg={3}>
                        <CompanyFact
                            icon={"ios-happy"}
                            count={174}
                            subtitle={"satisfied clients"}
                        />
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};
