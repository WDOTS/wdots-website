const fs = require('fs');
const Q = require('q');
const hogan = require('hogan.js');
const getViewContent = (viewPath, cssPath) => {
  const deferred = Q.defer();

  fs.stat(viewPath, (viewPathErr) => {
    if (viewPathErr) {
      deferred.reject('404: view not found');
    }
    fs.readFile(viewPath, 'utf8', (readViewErr, data) => {
      if (readViewErr) {
        deferred.reject(readViewErr);
      }
      fs.stat(cssPath, (cssPathErr) => {
        deferred.resolve({
          content: data,
          cssPath: !cssPathErr ? cssPath.slice(1) : null
        });
      });
    });
  });

  return deferred.promise;
};
const getViewPath = (route) => {
  const viewsDir = './views';

  return `${viewsDir}${route}.htm`;
};
const getCSSPath = (route) => {
  const cssDir = './build/css';

  return `${cssDir}${route}.css`;
};
const getIndexContent = () => {
  const deferred = Q.defer();
  const indexFile = getViewPath('/index');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve(data);
  });

  return deferred.promise;
};

module.exports = (req, res, next) => {
  const route = req.path === '/' ? '/home' : req.path;
  const viewPath = getViewPath(route);
  const cssPath = getCSSPath(route);
  const indexContent = getIndexContent();
  const viewContent = getViewContent(viewPath, cssPath);
  const promises = [indexContent, viewContent];

  Q.all(promises).then(
    (results) => {
      const indexTemplate = results[0];
      const viewOptions = results[1];
      const indexCompiled = hogan.compile(indexTemplate);

      res.send(indexCompiled.render(viewOptions));
    },
    () => {
      req.statusCode = 404;
      next();
    }
  );
};
