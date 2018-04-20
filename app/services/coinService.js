const fetch = require('node-fetch');

function getTopF() {
  const queryP = fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
    .then(data => {
      return data.json();
    })
  return queryP;
}

function getOneC(id) {
  const queryP = fetch(` https://api.coinmarketcap.com/v1/ticker/${id}`)
    .then(data => {

      return data.json();
    })
  return queryP;
}


module.exports = {
  getTopF,
  getOneC
}
