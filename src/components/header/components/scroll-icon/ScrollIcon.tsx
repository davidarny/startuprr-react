import * as React from "react";
import { PureComponent } from "react";
import { Link, SCROLL_DURATION } from "@components/vendor";
import { HeaderItem } from "@components/header/components";
import { getStickyOffset } from "@utils";
import { IScrollIconState } from "./IScrollIconState";
import bind from "bind-decorator";
import "./ScrollIcon.scss";

export class ScrollIcon extends PureComponent<{}, IScrollIconState> {
    private static readonly ID = "offerings";
    state: IScrollIconState = { stickyOffset: 0 };

    componentDidMount() {
        const options: AddEventListenerOptions = { passive: true };
        window.addEventListener("load", this.updateStickyOffset, options);
        window.addEventListener("scroll", this.updateStickyOffset, options);
        window.addEventListener("resize", this.updateStickyOffset, options);
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.updateStickyOffset);
        window.removeEventListener("scroll", this.updateStickyOffset);
        window.removeEventListener("resize", this.updateStickyOffset);
    }

    render() {
        return (
            <Link
                to={ScrollIcon.ID}
                smooth={true}
                spy={true}
                isDynamic={true}
                offset={this.state.stickyOffset}
                ignoreCancelEvents={true}
                duration={SCROLL_DURATION}
            >
                <HeaderItem className={"header__scroll-icon"}/>
            </Link>
        );
    }

    @bind
    private updateStickyOffset() {
        this.setState({ stickyOffset: getStickyOffset(ScrollIcon.ID) });
    }
}
