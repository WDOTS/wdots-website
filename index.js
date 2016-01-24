const debug = require('debug')('wdots');
const app = require('./lib/app');
const port = 9000;

app.listen(port, () => {
  debug('Listening on port %s', port);
});
