import * as React from "react";
import { Button, Section, SectionTitle } from "@components";
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
                            isLined={true}
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
                        title={"Protect Yourself"}
                        subtitle={"Aids / security"}
                        likesCount={26}
                        leftIcon={"ios-bug"}
                        rightIcon={"ios-git-branch"}
                    />
                    <SampleItem
                        title={"Corporate Brochure"}
                        subtitle={"Illustration / Print"}
                        likesCount={138}
                        leftIcon={"ios-attach"}
                        rightIcon={"ios-search"}
                    />
                    <SampleItem
                        title={"Bosnia: We’re There to Help"}
                        subtitle={"Military / Action"}
                        likesCount={72}
                        leftIcon={"ios-flame"}
                        rightIcon={"ios-moon"}
                    />
                    <SampleItem
                        title={"Dan Quayle Was Right"}
                        subtitle={"Values / Declining"}
                        likesCount={64}
                        leftIcon={"ios-cog"}
                        rightIcon={"ios-color-filter"}
                    />
                    <SampleItem
                        title={"Seat Belts For Everyone"}
                        subtitle={"Safety / Seatbelt"}
                        likesCount={235}
                        leftIcon={"ios-finger-print"}
                        rightIcon={"ios-flash"}
                    />
                    <SampleItem
                        title={"Be Fit For Life"}
                        subtitle={"Health / Exercise"}
                        likesCount={14}
                        leftIcon={"ios-alarm"}
                        rightIcon={"ios-aperture"}
                    />
                    <SampleItem
                        title={"We Are Killing the Earth"}
                        subtitle={"Environment / Recycle"}
                        likesCount={59}
                        leftIcon={"ios-basketball"}
                        rightIcon={"ios-globe"}
                    />
                    <SampleItem
                        title={"Why Not Smoke?"}
                        subtitle={"Drugs / Smoking"}
                        likesCount={108}
                        leftIcon={"ios-ice-cream"}
                        rightIcon={"ios-key"}
                    />
                    <SampleItem
                        title={"A Real Turn Off"}
                        subtitle={"Censorship / T.V."}
                        likesCount={366}
                        leftIcon={"ios-laptop"}
                        rightIcon={"ios-leaf"}
                    />
                    <SampleItem
                        title={"Are We Equal?"}
                        subtitle={"Gender / Equity"}
                        likesCount={23}
                        leftIcon={"ios-female"}
                        rightIcon={"ios-male"}
                    />
                    <SampleItem
                        title={"Let’s Speed Up"}
                        subtitle={"Laws / Speed"}
                        likesCount={1976}
                        leftIcon={"ios-pulse"}
                        rightIcon={"ios-speedometer"}
                    />
                    <SampleItem
                        title={"Helmet Heads Live"}
                        subtitle={"Safety / Motorcycle"}
                        likesCount={56}
                        leftIcon={"ios-walk"}
                        rightIcon={"ios-paper-plane"}
                    />
                </Row>
                <Row>
                    <Button
                        alwaysActive={true}
                        className={"sample-works__button"}
                        value={"View all works"}
                        href={"#"}
                    />
                </Row>
            </Grid>
        </Section>
    );
};
