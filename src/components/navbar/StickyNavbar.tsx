import * as React from "react";
import { PureComponent } from "react";
import bind from "bind-decorator";
import { Sticky } from "react-sticky";
import { IStickyNavbarState } from "./IStickyNavbarState";
import { IStickyProps } from "./IStickyProps";
import { MenuNavbar } from "@components";
import { SCROLL_DURATION } from "@components/vendor";
import { IStickyOptions } from "./IStickyNavbarOptions";

const SmoothScroll = require("smooth-scroll");

export class StickyNavbar extends PureComponent<{}, IStickyNavbarState> {
    state: IStickyNavbarState = { innerHeight: window.innerHeight };
    protected options: IStickyOptions = { speed: SCROLL_DURATION };
    protected selector = "a[href*=\"#\"]";
    protected scroll = new SmoothScroll();

    private static renderStickyNavbar(props: IStickyProps): JSX.Element {
        if (props.isSticky) {
            props.style = {
                ...MenuNavbar.STICKY_STYLE,
                ...props.style,
            };
        }
        return <MenuNavbar style={props.style}/>;
    }

    componentDidMount() {
        const options: AddEventListenerOptions = { passive: true };
        window.addEventListener("resize", this.updateInnerHeight, options);
        window.addEventListener("scroll", this.updateInnerHeight, options);
        window.addEventListener("click", this.onSmoothScrollClick);
        this.setNavbarOffset();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateInnerHeight);
        window.removeEventListener("scroll", this.updateInnerHeight);
        window.removeEventListener("click", this.onSmoothScrollClick);
    }

    render() {
        return (
            <Sticky
                disableCompensation={true}
                topOffset={this.getWindowInnerHeight()}
            >
                {StickyNavbar.renderStickyNavbar}
            </Sticky>
        );
    }

    private setNavbarOffset() {
        this.options.offset =
            (MenuNavbar.MENU_HEIGHT / 2) +
            (MenuNavbar.PADDING / 2.5) +
            (MenuNavbar.BORDER_WIDTH * 2);
    }

    @bind
    private updateInnerHeight() {
        this.setState({ innerHeight: window.innerHeight });
    }

    @bind
    private onSmoothScrollClick(event: WindowEventMap["click"]): void {
        this.animateSmoothScroll(event, this.selector, this.options);
    }

    @bind
    private animateSmoothScroll(event: WindowEventMap["click"],
                                selector: string,
                                settings: object): void {
        event.preventDefault();
        if (!event.target) {
            return;
        }
        const target = event.target as HTMLAnchorElement;
        const toggle = target.closest<"a">(selector as "a");
        if (!toggle || toggle.tagName.toLowerCase() !== "a") {
            return;
        }
        if (!toggle.hash) {
            return;
        }
        const anchor = document.querySelector(toggle.hash);
        if (!anchor) {
            return;
        }
        this.scroll.animateScroll(anchor, toggle, settings || {});
    }

    private getWindowInnerHeight(): number {
        return this.state.innerHeight;
    }
}
