 
const mdLink = (data) => {

  const reex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const resLinkone = data.match(reex);

 const resLink = resLinkone
  
  const fetch = require('node-fetch');
  const path = require('path');
  

  if (resLink !== null) {
    resLink.forEach(element => {
      fetch(element).then(res => {
        const linkStatus = res.status
        if (linkStatus === 200) {
          console.log(element,linkStatus,'valido')  
        } else{
          console.log(element,linkStatus,'invalido')
          
        }
      })
    })
  }







}
 
module.exports.mdLink = mdLink;
