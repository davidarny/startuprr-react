import * as React from "react";
import { Icon, Section } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import { SkillsCircle } from "@components/skills/components";
import "./Skills.scss";

export const Skills: React.SFC = () => {
    return (
        <Section className={"skills"} id={"skills"} isDark={true}>
            <Grid>
                <Icon icon={"ios-briefcase"}/>
                <Row>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={75}
                            title={"web design"}
                        />
                    </Col>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={92}
                            title={"web development"}
                        />
                    </Col>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={68}
                            title={"speed optimization"}
                        />
                    </Col>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={100}
                            title={"customer support"}
                        />
                    </Col>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={83}
                            title={"marketing"}
                        />
                    </Col>
                    <Col xs={6} sm={4} lg={2}>
                        <SkillsCircle
                            percent={50}
                            title={"advertisement"}
                        />
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};
