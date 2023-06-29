const resolve = require('resolve.exports');
const { readFile } = require('fs');

readFile('package.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  const pkg = JSON.parse(data);

  console.log(resolve.exports(pkg));
});
