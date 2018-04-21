const fetch = require('node-fetch');

function getTopFN() {
  const queryP = fetch('http://www.reddit.com/r/cryptocurrency/new.json?sort=populair')
    .then(data => {
      return data.json();
    })
  return queryP;
}

function getOneN(id) {
  var n = id;
  n = n.replace('-', '') //no dash in crypto subreddit names
  const queryP = fetch(`http://www.reddit.com/r/${n}/new.json?sort=populair`)
    .then(data => {

      return data.json();
    })
  return queryP;
}


module.exports = {
  getTopFN,
  getOneN
}
