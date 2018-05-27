import * as React from "react";
import { SFC } from "react";
import { ICompanyFactProps } from "./ICompanyFactProps";
import "./CompanyFact.scss";

export const CompanyFact: SFC<ICompanyFactProps> = ({
                                                        subtitle,
                                                        icon,
                                                        count,
                                                    }) => {
    return (
        <div className={"company-fact"}>
            <div className="company-fact__count">{count}</div>
            <div className="company-fact__icon">
                <i className={`company-fact__icon__ion icon ion ion-${icon}`}/>
            </div>
            <div className="company-fact__subtitle">{subtitle}</div>
        </div>
    );
};
