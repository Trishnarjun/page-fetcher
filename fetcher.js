const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);

const web = input[0];
const indexPath = input[1];

const contentFromWeb = (error, response, body) => {
  fs.writeFile(input[1], body, err => {
    if (err) {
      console.log('error:', error);
    }
    console.log("statusCode:", response && response.statusCode);
    console.log(`Downloaded and saved ${body.length} to ${indexPath}`);
  });
};
request(web, contentFromWeb);
/////////////////////////////////////////////////////////////////////////////