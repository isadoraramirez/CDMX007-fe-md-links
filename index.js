//module.exports = () => {};
// const http = require('http');

// accede al fichero para lectura y lo devuelve uen string
const fs = require('fs');
// acceder a sistema de ficheros para leer archivo md
fs.readFile('README.md', 'utf-8', (err, data) => {
  if (err) {
    // console.log('error: ', err);
  } else {
    // console.log(data);
  }


  const datamd = data;
  console.log(datamd);
});

  //aqui estoy contando no se que cosa 
//   cuenta = 0;
//   posicion = datamd.indexOf("http");
//   while ( posicion != -1 ) {
//      cuenta++;
//      posicion = datamd.indexOf("http",posicion+1);
//      console.log(posicion);
//   }
 

//(searchElement[, fromIndex])

  //aqui estoy contando no se que cosa pero creo un loop
//   cuenta = 0;
//   posicion = datamd.toString("http");
//   while ( posicion != -1 ) {
//      cuenta++;
//      posicion = datamd.toString("http",posicion+1);
//      if (posicion.indexOf(datamd)) {
//        posicion.push(datamd);
//        console.log(datamd);

//      }
//   }
// });


// console.log(data)
// fetch('README.md')
// .then(res => res.json())
// .then(load => {
//   data = load;
//   console.log(data)
// })

//const http = require('http');
// const url = require('url');






// const myURL = url.href('https://');

// console.log(myURL.href);


// let obtain = http(function (req, res) {
//     let urlParts = url.parse(req.url, true),
//         urlPathname = urlParts.pathname,
//         body = '',
//         reqInfo = {};

//     req.on('data', function (data) {
//         body += data; 
//     });
//     console.log(urlPathname)



// });



// const http = require('http');

// const url = require('url');
// const myURL = new URL('https:');
// console.log(myURL.pathname);
// // Prints /abc/xyz

// myURL.pathname = '/abcdef';
// console.log(myURL.href);
// Prints https://example.org/abcdef?123


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
