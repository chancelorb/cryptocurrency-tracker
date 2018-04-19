

const fetch = require('node-fetch');

function q1() {
  fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then(data => {
      return data.json();
    })
    .then (data => {
      data.forEach((naam) => {
        console.log(`${naam.id}, ${naam.percent_change_24h}`)
      })

    })
    .catch(err => {
      console.log(err)
    })
}

q1()
