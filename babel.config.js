module.exports = {
    ignore: ['./src/boilerplate/**/*', './src/public/**/*', './src/public/*'],
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: '22',
          },
          // Electron loads dist/src/main.js as CommonJS (it require()s the
          // server); Babel 8 no longer converts modules unless asked.
          modules: 'commonjs',
        },
      ],
    ],
  };
