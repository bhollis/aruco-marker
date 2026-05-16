/** Generate a marker as a 5x5 matrix of 0s and 1s. */
export declare function arucoMarkerMatrix(id: number): number[][];
/**
 * Create an SVG image of the marker, as a string.
 * Optionally pass a size (in any SVG-compatible units) or leave it out to size it on your own.
 */
export declare function arucoToSVGString(id: number, size?: number | string): string;
