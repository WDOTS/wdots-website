#!/usr/bin/env node
const spawn = require('child_process').spawn;
const fs = require('fs');
const nodeSassPath = './node_modules/node-sass/bin/node-sass';

fs.readdir('./styles', (err, files) => {
  files.forEach((fileName) => {
    if (fileName.match(/\.scss$/)) {
      const nodeSassArgs = [
        `./styles/${fileName}`,
        '--output', './build/css'
      ];

      spawn(nodeSassPath, nodeSassArgs);
    }
  });
});
