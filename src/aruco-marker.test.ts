import { arucoMarkerMatrix, arucoToSVGString } from './aruco-marker.js';
import { describe, assert, it } from 'vitest';

describe('arucoMarkerMatrix', () => {
	it('accepts a valid ID', () => {
		arucoMarkerMatrix(15);
	});

	it('rejects a negative ID', () => {
		assert.throws(() => {
			arucoMarkerMatrix(-15);
		});
	});

	it('rejects a too-large ID', () => {
		assert.throws(() => {
			arucoMarkerMatrix(10000);
		});
	});

	it('can generate a marker matrix for 1', () => {
		var expected = [
			[1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1],
			[0, 0, 0, 0, 1],
			[0, 0, 0, 0, 1],
		];

		assert.deepEqual(arucoMarkerMatrix(1), expected);
	});

	it('can generate a marker matrix for 18', () => {
		var expected = [
			[1, 1, 1, 1, 0],
			[0, 0, 0, 0, 1],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 1],
		];

		assert.deepEqual(arucoMarkerMatrix(18), expected);
	});

	it('can generate SVG', () => {
		const expected =
			'<svg  viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
			'  <rect x="0" y="0" width="7" height="7" fill="black"/>\n' +
			'  <rect x="1" y="1" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="2" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="3" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="4" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="5" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="4" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="2" y="5" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="5" y="5" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'</svg>';

		assert.equal(arucoToSVGString(18), expected);
	});

	it('can generate SVG with dimensions', () => {
		const expected =
			'<svg height="5em" width="5em" viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
			'  <rect x="0" y="0" width="7" height="7" fill="black"/>\n' +
			'  <rect x="1" y="1" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="2" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="3" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="4" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="5" y="3" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="1" y="4" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="2" y="5" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'  <rect x="5" y="5" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n' +
			'</svg>';

		assert.equal(arucoToSVGString(18, '5em'), expected);
	});
});
