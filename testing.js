global.fetch = require('node-fetch');
const cc = require('cryptocompare');


cc.coinList().then(data => {
  console.log(data)
})
