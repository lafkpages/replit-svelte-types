import * as resolve from 'resolve.exports';
import { readFile } from 'fs';

readFile('package.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  const pkg = JSON.parse(data);

  console.log(resolve.exports(pkg));
});
