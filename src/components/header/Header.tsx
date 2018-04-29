import * as React from "react";
import { Section, SectionTitle } from "@components";
import {
    HeaderBackground,
    ScrollIcon,
    SubtitleLower,
    SubtitleUpper,
    Title,
} from "@components/header/components";
import { Col, Grid, Row } from "@components/vendor";
import "./Header.scss";

export const Header: React.SFC = () => {
    return (
        <Section className={"header"}>
            <HeaderBackground/>
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={8} lgOffset={0}>
                        <SubtitleUpper/>
                        <Title/>
                        <SubtitleLower/>
                        <SectionTitle
                            focusPart={"first"}
                            firstPart={"Start"}
                            lastPart={"doing this"}
                        />
                        <ScrollIcon/>
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};
