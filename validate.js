
  const validUrl = require('valid-url');
const validate= (resLink) => {





  if (validUrl.isUri(resLink)){
            console.log('Looks like an URI');
        } else {
            console.log('Not a URI');
        }

  
} 
  validate()
module.exports.validate = validate;
      
