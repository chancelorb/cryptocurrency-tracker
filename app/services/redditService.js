const fetch = require('node-fetch');

function getTopFN() {
  const queryP = fetch('http://www.reddit.com/r/cryptocurrency/new.json?sort=populair')
    .then(data => {
      return data.json();
    })
  return queryP;
}

// function getOneC(id) {
//   console.log(id)
//   const queryP = fetch(` https://api.coinmarketcap.com/v1/ticker/${id}`)
//     .then(data => {
//
//       return data.json();
//     })
//   return queryP;
// }


module.exports = {
  getTopFN,
}
