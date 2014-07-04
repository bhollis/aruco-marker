describe("ArucoMarker", function() {
  var ArucoMarker = require('../aruco-marker');

  it("accepts a valid ID", function() {
    new ArucoMarker(15);
  });

  it("rejects a negative ID", function() {
    expect(function() {
      new ArucoMarker(-15);
    }).toThrow();
  });

  it("rejects a too-large ID", function() {
    expect(function() {
      new ArucoMarker(10000);
    }).toThrow();
  });

  it("can generate a marker matrix for 1", function() {
    var expected = [[1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 1]];
    var marker = new ArucoMarker(1);

    expect(marker.markerMatrix()).toEqual(expected);
  });

  it("can generate a marker matrix for 18", function() {
    var expected = [[1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 1]];
    var marker = new ArucoMarker(18);

    expect(marker.markerMatrix()).toEqual(expected);
  });

  it("can generate SVG", function() {
    var marker = new ArucoMarker(18);

    expect(marker.toSVG()).toEqual(
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
      '</svg>');
  });

  it("can generate SVG with dimensions", function() {
    var marker = new ArucoMarker(18);

    expect(marker.toSVG('5em')).toEqual(
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
      '</svg>');
  });

});
