# Generate SVG Aruco Marker Images with JavaScript

`aruco-marker` is a JavaScript library that can generate marker images (fiducials) for the [Aruco](http://www.uco.es/investiga/grupos/ava/node/26) augmented reality marker library. Aruco codes can be recognized by the original Aruco C++ library, or in the browser by [js-aruco](https://code.google.com/p/js-aruco/). `aruco-marker` generates images as SVG, making them easy to scale to any size or print out.

[![NPM version](https://badge.fury.io/js/aruco-marker.png)](http://badge.fury.io/js/aruco-marker) [![Bower version](https://badge.fury.io/bo/aruco-marker.png)](http://badge.fury.io/bo/aruco-marker) [![Build Status](https://api.travis-ci.org/bhollis/aruco-marker.png)](https://travis-ci.org/bhollis/aruco-marker)

# Demos

There are two demos that show off marker generation either directly or via the AngularJS directive:

* [Random Aruco markers](http://bhollis.github.io/aruco-marker/demos/index.html) ([View Source](https://github.com/bhollis/aruco-marker/blob/master/demos/index.html))
* [Select a marker ID (AngularJS)](http://bhollis.github.io/aruco-marker/demos/angular.html) ([View Source](https://github.com/bhollis/aruco-marker/blob/master/demos/angular.html))

# Usage

`aruco-marker` is available for use directly in the browser, or via AMD (RequireJS), or in NodeJS. It is installable as `aruco-marker` from either NPM or Bower.

```javascript
// In Node or RequireJS, require the library - otherwise 
// ArucoMarker is already available as a browser global.
var ArucoMarker = require('aruco-marker');

var myMarker = new ArucoMarker(155);
var svgImage = myMarker.toSVG('500px'); // the size is optional
document.getElementById('marker').innerHTML = svgImage;
```

See [`demos/index.html`](https://github.com/bhollis/aruco-marker/blob/master/demos/index.html) for a complete example.

# AngularJS Support

If you want to embed Aruco markers in your [AngularJS](http://angularjs.org/) application, you can use the `<aruco-marker>` directive defined in `ng-aruco-marker.js`:

```html
<aruco-marker marker-id="{{markerId}}" size="500px" />
```

See [`demos/angular.html`](https://github.com/bhollis/aruco-marker/blob/master/demos/angular.html) for a complete example.

# SVG to Canvas

While SVG images are very flexible and are perfect for most applications, you can use [this technique](https://developer.mozilla.org/en-US/docs/HTML/Canvas/Drawing_DOM_objects_into_a_canvas) to draw an SVG image to an HTML Canvas in order to obtain an image data URL if you need a raster image.

# Developing

First, install NodeJS however you like for your system (on OSX, I use `brew install node`).

Then check out and build the project:

```bash
npm install -g grunt-cli
git clone https://github.com/bhollis/aruco-marker
cd aruco-marker
npm install
grunt
```

## License

Copyright (c) 2014 Benjamin Hollis. MIT Licensed, see [MIT-LICENSE.txt](https://github.com/bhollis/aruco-marker/blob/master/MIT-LICENSE.txt) for details.
