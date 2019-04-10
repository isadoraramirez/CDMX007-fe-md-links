 
const markdownSearchLinks = (data) => {

  const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const result = data.match(regex);

 
  console.log(result);

  let totalLinks = result.length;
  console.log("links:"+totalLinks);



  
}




module.exports.markdownSearchLinks = markdownSearchLinks;
