 
const mdLink = (data) => {

  const reex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const resLinkone = data.match(reex);

 const resLink = resLinkone
  
  const fetch = require('node-fetch');
  
  

  if (resLink !== 0) {
    resLink.forEach(link => {
      fetch(link).then(ans => {
        const linkStatus = ans.status
        if (linkStatus === 200) {
          console.log(link,linkStatus,'valido')  
        } else{
          console.log(link,linkStatus,'invalido')
          
        }
      })
    })
  }







}
 
module.exports.mdLink = mdLink;
