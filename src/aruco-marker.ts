// Based on https://github.com/rmsalinas/aruco/blob/master/trunk/src/arucofidmarkers.cpp

/** Generate a marker as a 5x5 matrix of 0s and 1s. */
export function arucoMarkerMatrix(id: number) {
	if (id < 0 || id > 1023) {
		throw new RangeError('Marker ID must be in the range [0..1023]');
	}

	const ids = [16, 23, 9, 14];
	let index = 0,
		val = 0,
		x = 0,
		y = 0;
	const marker = [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	];

	for (y = 0; y < 5; y++) {
		index = (id >> (2 * (4 - y))) & 3;
		val = ids[index];
		for (x = 0; x < 5; x++) {
			marker[x][y] = (val >> (4 - x)) & 1;
		}
	}

	return marker;
}

/**
 * Create an SVG image of the marker, as a string.
 * Optionally pass a size (in any SVG-compatible units) or leave it out to size it on your own.
 */
export function arucoToSVGString(id: number, size?: number | string) {
	let x = 0,
		y = 0;
	const marker = arucoMarkerMatrix(id);
	let image = '';

	if (size) {
		size = 'height="' + size + '" width="' + size + '"';
	} else {
		size = '';
	}

	image =
		'<svg ' +
		size +
		' viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
		'  <rect x="0" y="0" width="7" height="7" fill="black"/>\n';

	for (y = 0; y < 5; y++) {
		for (x = 0; x < 5; x++) {
			if (marker[x][y] === 1) {
				image +=
					'  <rect x="' +
					(x + 1) +
					'" y="' +
					(y + 1) +
					'" width="1" height="1" fill="white" ' +
					// Slight stroke to get around aliasing issues with adjacent rectangles
					'stroke="white" stroke-width="0.01" />\n';
			}
		}
	}

	image += '</svg>';

	return image;
}
