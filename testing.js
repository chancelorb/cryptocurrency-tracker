// global.fetch = require('node-fetch');
// const cc = require('cryptocompare');
//
//
// cc.coinList().then(data => {
//   console.log(data)
// })
// not good for use changed to coinmarketcap api!!!!!


const fetch = require('node-fetch');

function q1() {
  fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then(data => {
      return data.json();
    })
    .then (data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}

q1()
