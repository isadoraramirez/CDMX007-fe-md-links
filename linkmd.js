//--TO DO--
// se exporta el validate para que muestre las stats //href: URL encontrada.
//text: Texto que aparecía dentro del link (<a>). //file: Ruta del archivo donde se encontró el link.


const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

const markdownSearchLinks = (data) => {

  const regex =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

  const result = data.match(regex);
  console.log(result);

};




module.exports.markdownSearchLinks = markdownSearchLinks;
