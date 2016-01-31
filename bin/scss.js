#!/usr/bin/env node
const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');
const debug = require('debug')('wdots');
const scssRegExp = /(\w*)\.scss$/;
const buildDir = './build/css/';
const stylesDir = './styles';
const render = (fileNameStem) => {
  sass.render({
    file: `${stylesDir}/${fileNameStem}.scss`,
    outFile: `${buildDir}/${fileNameStem}.css`
  }, (sassErr, result) => {
    if (sassErr) {
      debug(sassErr);
      return;
    }
    fs.writeFile(`${buildDir}/${fileNameStem}.css`, result.css);
  });
};

mkdirp(buildDir, (mkdirErr) => {
  if (mkdirErr) {
    debug(mkdirErr);
    return;
  }
  fs.readdir(stylesDir, (readErr, files) => {
    if (readErr) {
      debug(readErr);
      return;
    }
    files.forEach((fileName) => {
      const fileNameStem = scssRegExp.test(fileName) && scssRegExp.exec(fileName)[1];

      if (fileNameStem) {
        render(fileNameStem);
      }
    });
  });
});
