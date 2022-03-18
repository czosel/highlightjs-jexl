const grammar = require("./languages/jexl");

module.exports = function(hljs) {
    hljs.registerLanguage('jexl', grammar);
};

module.exports.jexl = grammar;
