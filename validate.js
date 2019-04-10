
  const validUrl = require('valid-url');
const validate= (resLink) => {


  if (validUrl.isUri(resLink)){
            console.log('Looks like an URI');
        } else {
            console.log('Not a URI');
        }

  // const fetch = require('node-fetch');
    
  //   resLink.forEach(element => {
  //         fetch(element)
  //           .then(response => {
  //             if (response.status == 200) {
  //               console.log(`${element}` + " " + response.status + " " + response.statusText);
  //             } else if (response.status == 404) {
  //               console.log(`${element}` + " " + response.status + " " + response.statusText);
  //             }
  //           })
  //           .catch(err => console.log(err));
  //       })
      
       }

module.exports.validate = validate;


