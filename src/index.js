import grammar from "./languages/jexl.js";

export default function(hljs) {
    hljs.registerLanguage('jexl', grammar);
};
