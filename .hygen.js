module.exports = {
  helpers: {
    getBasePath: () => {
      return 'src/';
    },
    extended: (s) => s.toUpperCase(),
    getTypePath: (s) => {
      switch (s) {
        case 'page':
        case 'pages':
        case 'screen':
        case 'screens':
          return 'screens';
        case 'pattern':
        case 'patterns':
          return 'patterns';
        default:
          return 'atoms';
      }
    },
    lint: (s) => {
      return `yarn lint:fix ${s}`;
    },
  },
};
