# highlightjs-jexl

This adds support for [Jexl](https://github.com/TomFrost/Jexl) to [highlightjs](https://highlightjs.org/).

## Usage

Simply include the `highlight.js` script package in your webpage or Node app, load up this module, and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script src="https://cdn.jsdelivr.net/npm/highlight.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-jexl"></script>
<script>
  window.hljsDefineJexl(hljs);
  hljs.highlightAll();
</script>
```

If you're using webpack / rollup / browserify / node:

```javascript
import hljs from "highlight.js";
import hljsDefineJexl from "highlightjs-jexl";

hljsDefineJexl(hljs);
hljs.highlightAll();
```
