 
const mdLink = (data) => {

  const reex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const resLinko = data.match(reex);

 const resLink = resLinko
  //console.log(resLink);

  const validUrl = require('valid-url');
 
  
    resLink.forEach(resLink => {  
       
      if (validUrl.isUri(resLink)){
        console.log('Link valido'+resLink);
    } else {
        console.log('No es un link valido'+resLink);
    } 
  })  
  }
  // const validUrl = require('valid-url');
  // if (validUrl.isUri(data)){
  //           console.log('Link valido');
  //       } else {
  //           console.log('No es un link valido');
  //       }
      
    
  
  //let score = resLink.length;
  //console.log("links:"+score);



  





module.exports.mdLink = mdLink;
