const request = require('request');
const fs = require('fs');

const contentFromWeb = (error, response, body) => {
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
    }
    return;
  });
};
request('http://www.example.edu', contentFromWeb);
/////////////////////////////////////////////////////////////////////////////


