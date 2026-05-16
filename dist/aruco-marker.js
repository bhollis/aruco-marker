//#region src/aruco-marker.ts
function e(e) {
	if (e < 0 || e > 1023) throw RangeError("Marker ID must be in the range [0..1023]");
	let t = [
		16,
		23,
		9,
		14
	], n = [
		[
			0,
			0,
			0,
			0,
			0
		],
		[
			0,
			0,
			0,
			0,
			0
		],
		[
			0,
			0,
			0,
			0,
			0
		],
		[
			0,
			0,
			0,
			0,
			0
		],
		[
			0,
			0,
			0,
			0,
			0
		]
	];
	for (let r = 0; r < 5; r++) {
		let i = t[e >> 2 * (4 - r) & 3];
		for (let e = 0; e < 5; e++) n[e][r] = i >> 4 - e & 1;
	}
	return n;
}
function t(t, n) {
	let r = e(t), i = "";
	n = n ? `height="${n}" width="${n}"` : "", i = `<svg ${n} viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="7" height="7" fill="black"/>
`;
	for (let e = 0; e < 5; e++) for (let t = 0; t < 5; t++) r[t][e] === 1 && (i += `  <rect x="${t + 1}" y="${e + 1}" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />
`);
	return i += "</svg>", i;
}
//#endregion
export { e as arucoMarkerMatrix, t as arucoToSVGString };

//# sourceMappingURL=aruco-marker.js.map