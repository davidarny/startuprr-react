import * as React from "react";
import { PureComponent } from "react";
import bind from "bind-decorator";
import { Sticky } from "react-sticky";
import { IStickyNavbarState } from "./IStickyNavbarState";
import { IStickyProps } from "./IStickyProps";
import { MenuNavbar } from "./MenuNavbar";

export class StickyNavbar extends PureComponent<{}, IStickyNavbarState> {
    state: IStickyNavbarState = { innerHeight: window.innerHeight };

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
        window.addEventListener("resize", this.onResize);
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

    @bind
    private onResize() {
        this.setState({ innerHeight: window.innerHeight });
    }

    private getWindowInnerHeight(): number {
        return this.state.innerHeight;
    }
}
