function hljsDefineJexl(hljs) {
  return {
    name: 'Jexl',
    contains: [
      {
        scope: 'string',
        match: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        relevance: 0
      },
      // transforms
      {
        begin: [
          /(\|\s*)/,
          /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
        ],
        beginScope: {
          1: "operator",
          2: "title.function.call"
        },
      },
      {
        scope: 'title.function.call',
        match: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
        relevance: 0
      },
      {
        begin: [
          /\.\s*/,
          /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
        ],
        beginScope: {
          1: "punctuation",
          2: "property"
        },
      },
      {
        scope: 'number',
        match: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
        relevance: 0
      },
      {
        scope: 'operator',
        match: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
        relevance: 0
      },
      { beginKeywords: [ "true", "false", "in"].join(" ") },
      {
        scope: 'punctuation',
        match: /[{}[\](),.]/,
        relevance: 0
      },
      {
        scope: 'variable',
        match: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
        relevance: 0
      },
    ],
    illegal: '\\S'
  };
}

module.exports = hljsDefineJexl;
