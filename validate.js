const linkmd = require('./linkmd')
    const validUrl = require('valid-url');

    const markdownSearchLinks = (result)
  

    if (process.argv.includes('--validate')) options.validate = true;
    if (process.argv.includes('--stats')) options.stats = true;
    
//     let accion = [] // Init Array 
//     process.argv.forEach(function (val, index, array) { // Get actions terminar line
//       accion.push(val); // order array command line User
//       //console.log(index)
//     });

    if(validate == '--validate'){

    if (validUrl.isUri(markdownSearchLinks)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }


}



module.exports.validUrl= validUrl;