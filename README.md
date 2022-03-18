# highlightjs-jexl

This adds support for [Jexl](https://github.com/TomFrost/Jexl) to [highlightjs](https://highlightjs.org/).

## Usage

Simply include the `highlight.js` script package in your webpage or Node app, load up this module, and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script src="https://cdn.jsdelivr.net/npm/highlightjs"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-jexl"></script>
<script>
  hljs.registerLanguage("jexl", window.hljsDefineVue);
  hljs.highlightAll();
</script>
```

If you're using webpack / rollup / browserify / node:

```javascript
var hljs = require("highlightjs");
var hljsDefineJexl = require("highlightjs-jexl");

hljsDefineJexl(hljs);
hljs.highlightAll();
```

## Credits

The Code is largely based on the [Jexl support for Prism.js](https://github.com/PrismJS/prism/pull/2764).

Packaging stuff and this README is based on the [`highlightjs-octave` package](https://github.com/highlightjs/highlightjs-octave).
