

const fetch = require('node-fetch');

function q1() {
  fetch('http://www.reddit.com/r/cryptocurrency/new.json?sort=populair')
    .then(data => {
      return data.json();
    })
    .then (data => {
      // (data.data.children).forEach((children) => {
      //   console.log(children.data.permalink, children.data.thumbnail, children.data.title)
      // })
      for (let i = 0; i < 5; i++) {
        console.log((data.data.children[i]).data.title)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

q1()
<hr>
<div class="crypto-top">
  <h1 class="div-title">TOP 5</h1>
  <div class="coin-container">
    <% coins.forEach((coin) => { %>
      <a href="<%= coin.id %>">
        <div class="coin-field">
          <p><%= coin.name %>, <%= coin.symbol %></p>
          <hr>
          <% if ( coin.percent_change_1h > 0) { %>
              <p>Last Hour: <span class="pos-change"><%= coin.percent_change_1h %>%</span></p>
          <% } else { %>
            <p>Last Hour: <span class="neg-change"><%= coin.percent_change_1h %>%</span></p>

          <% }%>
          <% if ( coin.percent_change_24h > 0) { %>
              <p>Last 24h: <span class="pos-change"><%= coin.percent_change_24h %>%</span></p>
          <% } else { %>
            <p>Last 24h: <span class="neg-change"><%= coin.percent_change_24h %>%</span></p>

          <% }%>
          <% if ( coin.percent_change_7d > 0) { %>
              <p>Last 7d: <span class="pos-change"><%= coin.percent_change_7d %>%</span></p>
          <% } else { %>
            <p>Last 7d: <span class="neg-change"><%= coin.percent_change_7d %>%</span></p>

          <% }%>
          <p>Price USD: $<%= coin.price_usd %></p>
        </div>
      </a>
    <% }) %>
  </div>
</div>
