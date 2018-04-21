

const fetch = require('node-fetch');

function q1(id) {
  fetch(`http://www.reddit.com/r/${id}/new.json?sort=populair`)
    .then(data => {
      return data.json();
    })
    .then (data => {
      // (data.data.children).forEach((children) => {
      //   console.log(children.data.permalink, children.data.thumbnail, children.data.title)
      // })
      for (let i = 0; i < 5; i++) {
        console.log((data.data.children[i]).data)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

q1("bitcoin");
// <% for (let i = 0; i < 5 ; i++) { %>
// <% console.log((coinN.data.children[i]).data.permalink) %>
//   <a href="https://www.reddit.com<%= ((news.data.children[i]).data.permalink) %>">
//     <div class="coin-field">
//       <img class="news-img" src="<%= (news.data.children[i]).data.thumbnail %>" alt="NO PIC!">
//       <p class="news-title"><%= (news.data.children[i]).data.title %></p>
//     </div>
//   </a>
// <% } %>
