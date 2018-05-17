import * as React from "react";
import { Icon, Section, SectionTitle } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import "./CompanyFacts.scss";

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
            </Grid>
        </Section>
    );
};
