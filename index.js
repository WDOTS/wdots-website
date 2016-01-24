const debug = require('debug')('wdots');
const app = require('./lib/server');

app.listen(9000, () => {
  debug('Listening on port 9000');
});
