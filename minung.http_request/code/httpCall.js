module.exports.function = function httpCall () {
  const http = require('http');
  const console = require('console');
  const result = http.getUrl('https://bixby-http-demo.appspot.com/shoes', { format: 'json' });
  console.log(result);
  return result;
}
