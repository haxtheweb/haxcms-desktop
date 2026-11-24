module.exports = {
    ignore: ['./src/boilerplate/**/*', './src/public/**/*', './src/public/*'],
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: '22',
          },
        },
      ],
    ],
  };
