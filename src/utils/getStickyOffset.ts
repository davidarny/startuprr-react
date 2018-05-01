import { MenuNavbar } from "@components";

/**
 * Get element offset in order to center in viewport
 * @param {string} to
 * @return {number}
 */
export const getStickyOffset = (to: string) => {
    if (!to) {
        return 0;
    }
    if (to === "header") {
        return -1 * MenuNavbar.MENU_HEIGHT;
    }
    const container = document.getElementById(to);
    if (!container) {
        return 0;
    }
    const innerHeight = container.offsetHeight;
    if (innerHeight > window.innerHeight) {
        return 0;
    }
    return -1 * Math.abs((innerHeight - window.innerHeight) / 2);
};
