import * as React from "react";
import { FeaturesItem, Section } from "@components";
import { Col, Grid, Row } from "@components/vendor";
import "./MoreFeatures.scss";

export const MoreFeatures: React.SFC = () => {
    return (
        <Section className={"more-features"} id={"more-features"}>
            <Grid>
                <Row>
                    <Col sm={12}>
                        <FeaturesItem
                            iconName={"desktop"}
                            title={"Responsive & multipurpose"}
                            subtitle={"Desktop, Tablets & Phones"}
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                        <FeaturesItem
                            iconName={"cube"}
                            title={"Easy customization"}
                            subtitle={"One Click Demo Content Installation"}
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                        <FeaturesItem
                            iconName={"star"}
                            title={"Unlimited features"}
                            subtitle={
                                "Shortcodes, Typography \ " +
                                "& Different Layouts"
                            }
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                        <FeaturesItem
                            iconName={"list-box"}
                            title={"Clean & modular coding"}
                            subtitle={
                                "100% Clean, Valid \ " +
                                "& Well-Commented Coding"
                            }
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                        <FeaturesItem
                            iconName={"cart"}
                            title={"The best e-commerce solutions"}
                            subtitle={"WooCommerce Fully Integration"}
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                        <FeaturesItem
                            iconName={"help-buoy"}
                            title={"Awesome friendly support"}
                            subtitle={"Free Lifetime Support & Updates"}
                            content={
                                "Proin in magna a ipsum viverra \ " +
                                "scelerisq enec turp, nunc vestibulum."
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};
