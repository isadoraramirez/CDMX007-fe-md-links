
const fs = require('fs');
const path = require('path');
const searchURL = require('./linkmd');
const validation = require('./validate');


const mdextract = () => {

  fs.readdir('./', (err, data) => {
    if (err) {
      console.log('error', err);
    } else {


      data.forEach(element => {
        if (path.extname(element) === ".md") {
          fs.readFile(element, 'utf-8', (err, data) => {
            {
              if (err)
                console.log('error', err);
              else
                searchURL.mdLink(data)
            }
          })
        }
      })
    }
  })
}
mdextract()
module.exports.mdextract = mdextract;


                  

 

