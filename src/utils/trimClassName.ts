/**
 * Removes extra spaces and newlines
 * @param {string} value
 * @return {string}
 */
export function trimClassName(value: string) {
    return value
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\r?\n|\r/g, "");
}
