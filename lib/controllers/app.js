const fs = require('fs');
const hogan = require('hogan.js');
const viewsDir = './views';
const indexFile = `${viewsDir}/index.htm`;
const indexTemplate = fs.readFileSync(indexFile, 'utf8');
const indexCompiled = hogan.compile(indexTemplate);

module.exports = (req, res, next) => {
  const path = req.path === '/' ? '/home' : req.path;
  const view = `${viewsDir}${path}.htm`;

  fs.stat(view, (err) => {
    if (err) {
      req.statusCode = 404;
      return next();
    }
    const viewContent = fs.readFileSync(view, 'utf8');

    res.send(indexCompiled.render({
      content: viewContent,
      path
    }));
  });
};
