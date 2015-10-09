# Savvior

[![Build Status](https://travis-ci.org/attila/savvior.svg?branch=prototype)](https://travis-ci.org/attila/savvior) [![Code Climate](https://codeclimate.com/github/attila/savvior/badges/gpa.svg)](https://codeclimate.com/github/attila/savvior) [![Test Coverage](https://codeclimate.com/github/attila/savvior/badges/coverage.svg)](https://codeclimate.com/github/attila/savvior)

A Javascript solution for multicolumn layouts, an alternative to Salvattore or Masonry, without CSS driven configuration or absolute CSS positioning. A large part of the code is heavily inspired by the excellent [Salvattore](http://salvattore.com), however it fixes many of its quirks.

## Features

* __Requirements:__ Savvior depends on on `window.matchMedia` and [enquire.js](http://wicky.nillia.ms/enquire.js/).
* __Integrates easily:__ No automatic execution, init the script when YOU think it should happen. For further integration, custom events are dispatched after initialisation or redrawing the layout.
* __Sensible configuration:__ No CSS-driven configuration can make parsing CSS on a CDN troubled, just pass the element selector and a single config object to init() and it's done.
* __Lightweight:__ ~2.2 kB minified and gzipped
* __Wide browser support:__ most modern devices/browsers and IE9+

## Installation

Install it via [npm](https://npmjs.com) for your Browserify-based project

```
npm install savvior
```

Install it via [Bower](http://bower.io)

```
bower install savvior
```

Or just grab the latest release from the [Releases page](https://github.com/attila/savvior/releases)

## Usage

Please refer to the [Examples](https://github.com/attila/savvior-examples) for detailed usage information.

### Add some CSS

Add some CSS to support the layout when multiple columns are created, e.g

````css
.column { float: left; }
.size-1of2 { width: 50%; }
.size-1of3 { width: 33.33333%; }
.size-1of4 { width: 25%; }
````

### Load the JavaScript

#### CommonJS

In your Browserify projects you can require the module as usual:

````js
var savvior = require('savvior');
````

#### using AMD/Require.js

In your configuration:

````js
// Configure paths
requirejs.config({
  paths: {
    enquire: 'path/to/enquire',
    savvior: 'path/to/savvior'
  }
});
```

Then in your project:

```js
require(['savvior', 'domReady!'], function(savvior) {
  // Initialise savvior here.
  //
  // Enquire is a dependency of savvior which should already be loaded by Require
  // You will need to load your own polyfills though.
});
````

#### using Modernizr

````html
<script type="text/javascript">
var mq = Modernizr.mq("only all");
Modernizr.load([{
  test: mq && !window.matchMedia, // Media query support wihtout matchMedia support.
  yep: "/path/to/media.match.js", // Load the polyfill for matchMedia
  complete: function() {
    (typeof window.matchMedia === "function") && Modernizr.load('/path/to/enquire.js');
  }
},
{
  load: '/path/to/savvior.js',
  complete: function() {
      // Initialise savvior here.
    }
  }
}]);
</script>
````

#### Using a plain script tag

Just add these before your `</body>`.

````html
<!--[if IE 9]>
<script src="/path/to/media-match.js"></script>
<![endif]-->
<script src="/path/to/enquire.js"></script>
<script src="/path/to/savvior.js"></script>
````


### Initialise

````javascript
  savvior.init("#myGrid", {
    "screen and (max-width: 20em)": { columns: 2 },
    "screen and (min-width: 20em) and (max-width: 40em)": { columns: 3 },
    "screen and (min-width: 40em)": { columns: 4 },
  });
````

Grid items can be excluded by using `filter` in the options. This takes a
string consumable by `document.querySelectorAll()`. This is processed in each
mediaMatch breakpoint, examples:

````javascript
  savvior.init("#myGrid", {
    "screen and (max-width: 20em)": {
      columns: 2,
      filter: '#excludeme'
    },
    "screen and (min-width: 20em) and (max-width: 40em)": {
      columns: 3,
      filter: '#excludeme, .filter-these-as-well'
    },
    "screen and (min-width: 40em)": { columns: 4 },
  });
````

### Get status

````javascript
  savvior.ready();
  // returns ["#myGrid"]
  savvior.ready("#myGrid");
  // returns true
````

### Destroy

````javascript
  // destroy all instances
  savvior.destroy();
  // destroy specific instances
  savvior.destroy(["#myGrid", "#anotherGrid"]);
````

## History of changes

See [CHANGELOG](https://github.com/attila/savvior/blob/master/CHANGELOG.md)

## Contributing

If you find an bug or a problem please open an issue.

This project uses Grunt for running the builds and tests. The module uses an UMD
wrapper to retain compatibility with CommonJS and AMD module formats.
Tests are run by Jasmine in PhantomJS.

### Install the development environment

To install the development dependencies, make sure you have
[nodejs](http://nodejs.org) installed, then:

1. Install grunt-cli with `npm i grunt-cli -g`
2. Install development dependencies with `npm i`
3. Build the project by running `grunt`

Pull requests for new features or bug fixes are most welcome, just make sure it
conforms the current coding  style of the project.

## Development

Development is sponsored by [Dennis Interactive](http://www.dennis.co.uk/) and [Front Seed Labs](http://frontseed.com/)

## License

License: MIT (See [LICENSE](https://github.com/attila/savvior/blob/master/LICENSE) for details)
