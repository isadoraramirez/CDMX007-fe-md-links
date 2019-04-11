 
const mdLink = (data) => {

  const reex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const resLink = data.match(reex);

 
  console.log(resLink);

  let score = resLink.length;
  console.log("links:"+score);



  
}




module.exports.mdLink = mdLink;
