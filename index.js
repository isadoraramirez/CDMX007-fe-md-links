module.exports = () => {};
  const fs = require('fs');
  const path = require('path');
  
  fs.readdir('./', (err, data) => {
      data.forEach(format => {
      if(path.extname(format) === ".md"){
         let mdFormat= format;
         fs.readFile(`./${mdFormat}`, 'utf8', (err,fileMd) =>
              {
                  if(fileMd)
                      console.log(fileMd)
                  else
                      console.log(err);
              });
      } 
      });
   });
  
//   module.exports = search;



// accede al fichero para lectura y lo devuelve uen string

// accede al fichero para lectura y lo devuelve uen string
// const fs = require('fs');
// const path = require('path');
 
// fs.readdir('./(err,data');   {
    
//     if(path.extname() === ".md"){
        
//                  if(err)
//                      console.log(err)
//                  else
//                      console.log(data);
             
//             };
     
//  };

// const mdLinks = require("md-links");



// // Ruta relativa con option (validate)
// mdLinks("./some/example.md", { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }]
//   })
//   .catch(console.error);


//leer archivo linea por linea
// const readline = require("readline");
// const fs = require('fs');
//     fileName = "README.md";

// let lector = readline.createInterface({
//     input: fs.createReadStream(fileName)
// });

// lector.on("line", line => {
//     console.log("this is a line:", line);
// });


// function visible(a) {
//     var R  =  ''
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == '\b') {  R -= 1; continue; }  
//         if (a[i] == '\u001b') {
//             while (a[i] != 'm' && i < a.length) i++
//             if (a[i] == undefined) break
//         }
//         else R += a[i]
//     }
//     return  R
// }

// function empty(a) {
//     a = visible(a)
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] != ' ') return false
//     }
//     return  true
// }

// var readline = require('readline')
// var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false })

// rl.on('line', function(line) {
//     if (!empty(line)) console.log(line) 
// })


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
