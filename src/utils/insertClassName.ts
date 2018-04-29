import { trimClassName } from "@utils";

/**
 * Insert classNames and trim them before
 * @param {string} classNames
 * @return {string}
 */
export function insertClassName(...classNames: string[]) {
    return trimClassName(classNames.join(" "));
}
