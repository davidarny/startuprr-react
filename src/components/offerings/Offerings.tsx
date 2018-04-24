import * as React from "react";
import { Section, SectionTitle } from "@components";
import { OfferingsItem } from "./components/offerings-item";
import "./Offerings.scss";

export const Offerings: React.SFC = () => {
    return (
        <Section className={"offerings"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SectionTitle
                            focusPart={"first"}
                            firstPart={"What"}
                            lastPart={"we offer"}
                            subtitle={
                                "We offer our customers the best services \ " +
                                "& solutions, this is our main services list"
                            }
                        />
                    </div>
                </div>
                <div className="row offerings__items">
                    <OfferingsItem
                        title={"Responsive & Multipurpose"}
                        iconName={"desktop"}
                        subtitle={
                            "Lorem ipsum dolor \ " +
                            "sit amet, consectetur \ " +
                            "adipisicing elit. \ " +
                            "Aliquid maxime numquam optio" +
                            "quam velit vero, vitae! \ " +
                            "Accusantium corporis, \ " +
                            "dicta, dignissimos dolore \ " +
                            "dolores doloribus est \ " +
                            "magnam modi necessitatibus \ " +
                            "nihil nostrum suscipit."
                        }
                    />
                    <OfferingsItem
                        title={"Easy Customization"}
                        iconName={"build"}
                        subtitle={
                            "Lorem ipsum dolor \ " +
                            "sit amet, consectetur \ " +
                            "adipisicing elit. \ " +
                            "Aliquid maxime numquam optio" +
                            "quam velit vero, vitae! \ " +
                            "Accusantium corporis, \ " +
                            "dicta, dignissimos dolore \ " +
                            "dolores doloribus est \ " +
                            "magnam modi necessitatibus \ " +
                            "nihil nostrum suscipit."
                        }
                    />
                    <OfferingsItem
                        title={"Awesome Friendly Support"}
                        iconName={"help-buoy"}
                        subtitle={
                            "Lorem ipsum dolor \ " +
                            "sit amet, consectetur \ " +
                            "adipisicing elit. \ " +
                            "Aliquid maxime numquam optio" +
                            "quam velit vero, vitae! \ " +
                            "Accusantium corporis, \ " +
                            "dicta, dignissimos dolore \ " +
                            "dolores doloribus est \ " +
                            "magnam modi necessitatibus \ " +
                            "nihil nostrum suscipit."
                        }
                    />
                </div>
            </div>
        </Section>
    );
};
