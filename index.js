//module.exports = () => {};
// const http = require('http');


const fs = require('fs');
// acceder a sistema de ficheros para leer archivo md
fs.readFile('README.md', 'utf-8', (err, data) => {
  if (err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});
// accede al fichero para lectura y lo devuelve uen string

// let links = document.links;
// for(let i = 0; i < links.length; i++) {
//   let linkHref = document.createTextNode(links[i].href);
//    lineBreak = document.createElement("br");
//   document.body.appendChild(linkHref);
//   document.body.appendChild(lineBreak);
//   console.log(linkHref);
// }
//debolver una coleccion de los elementos con atributo href



// function UrlExists(url) {
//   var http = new XMLHttpRequest();
//   http.open('HEAD', url, false);
//   http.send();
//   return http.status!=404;
// }