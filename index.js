const debug = require('debug')('wdots');
const app = require('./lib/app');
const argv = require('yargs').default('port', 9000).argv;
const port = argv.port;

app.listen(port, () => {
  debug('Listening on port %s', port);
});
