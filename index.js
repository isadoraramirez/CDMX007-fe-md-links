

  const fs = require('fs');
  const path = require('path');
  
  fs.readdir('./', (err, data) => {
      data.forEach(extend => {
      if(path.extname(extend) === ".md"){
         let mdExtend= extend;
         fs.readFile(`./${mdExtend}`, 'utf8', (err,fileMd) =>
              {
                  if(fileMd)
                      console.log(true);
                  else
                      console.log(err);

                      let cad = fileMd;
                      //console.log(cad);
                      //sacamos links
                      //let er1 = new RegExp ("(https*)+");
                      let er2 = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                      let rta = er2.test(cad);
                      //console.log(rta);
                      const arr = cad.match(er2);
                      console.log(arr);

                       //expresion regular para links validos,da true?
                     let reex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
                     let reaxtest = reex.test(arr);
                     console.log(reaxtest);


                    //  const valid = arr.match(reex);
                    //  console.log(valid)
                    //  //console.log(reaxtest);
                    //  if(reaxtest == reaxtest){ 
                    //  console.log(true);
                    //  }else{
                    //   console.log(err);
                    //  }
                      const newArr = [];
                    

                  





                  

                    });
                    
      } 


      });
   });

 

   //module.exports.direct = direct;


