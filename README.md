# Generate SVG Aruco Marker Images with JavaScript

`aruco-marker` is a JavaScript library that can generate marker images (fiducials) for the [Aruco](https://github.com/paroj/aruco) augmented reality marker library. Aruco codes can be recognized by the original Aruco C++ library, or in the browser by [js-aruco](https://github.com/jcmellado/js-aruco). `aruco-marker` generates images as SVG, making them easy to scale to any size or print out. There is also a custom HTML element allowing you to easily embed codes anywhere on a page.

[![NPM version](https://badge.fury.io/js/aruco-marker.svg)](https://www.npmjs.com/package/aruco-marker)

# Demos

There are two demos that show off marker generation either directly or via the custom HTML element:

- [Random Aruco markers via custom element](http://bhollis.github.io/aruco-marker/demos/element.html) ([View Source](https://github.com/bhollis/aruco-marker/blob/master/demos/element.html))
- [Random Aruco markers via string](http://bhollis.github.io/aruco-marker/demos/index.html) ([View Source](https://github.com/bhollis/aruco-marker/blob/master/demos/index.html))

# Usage

`aruco-marker` is available for use in the browser, or in NodeJS. It is installable as `aruco-marker` from NPM.

```javascript
import { arucoToSVGString } from 'aruco-marker';

const svgImage = arucoToSVGString(155, '500px'); // the size is optional
document.getElementById('marker').innerHTML = svgImage;
```

See [`demos/index.html`](https://github.com/bhollis/aruco-marker/blob/master/demos/index.html) for a complete example.

# Custom Element

`aruco-marker` is available for use in the browser, or in NodeJS. It is installable as `aruco-marker` from NPM.

```html
<script src="https://unpkg.com/aruco-marker/element"></script>

<aruco-marker markerid="155" size="500px"></aruco-marker>
```

# SVG to Canvas

While SVG images are very flexible and are perfect for most applications, you can use [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) to draw an SVG image to an HTML Canvas in order to obtain an image data URL if you need a raster image.

# Developing

First, install NodeJS however you like for your system (on macOS, I use `brew install node`).

Then check out and build the project:

```bash
git clone https://github.com/bhollis/aruco-marker
cd aruco-marker
npm ci
npm run demo
```

## License

Copyright (c) 2014 Benjamin Hollis. MIT Licensed, see [MIT-LICENSE.txt](https://github.com/bhollis/aruco-marker/blob/master/MIT-LICENSE.txt) for details.
