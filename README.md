# highlightjs-jexl

This adds support for [Jexl](https://github.com/TomFrost/Jexl) to [highlightjs](https://highlightjs.org/).

## Usage

This module exports a function `hljsDefineJexl` - call it with the argument `hljs` to register Jexl support in highlight.js!

```javascript
import hljs from "highlight.js";
import hljsDefineJexl from "highlightjs-jexl";

hljsDefineJexl(hljs);
hljs.highlightAll();
```

If you're not using a build system and just want to embed this in your webpage:

```html
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.0/build/highlight.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-jexl/dist/highlightjs-jexl.min.js"></script>
<script>
  window.hljsDefineJexl(hljs);
  hljs.highlightAll();
</script>
```

See this [fiddle](https://jsfiddle.net/czosel/vmpLkrjc/2/) for a complete example.
