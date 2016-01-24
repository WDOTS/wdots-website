const debug = require('debug')('wdots');
const app = require('./lib/server');
const port = 9000;

app.listen(port, () => {
  debug('Listening on port %s', port);
});
