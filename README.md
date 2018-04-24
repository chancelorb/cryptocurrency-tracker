# cryptocurrency-tracker
track your coins together with news (and meetups)

# Project Overview


## Project Description
CryptoCurrency Tracker

The app is an easy tool to keep track of your favorite cryptocurrencies together with reddit updates on the


## Wireframes

![Wireframes](app/images/IMG_0227.JPG?raw=true "Wireframes")
![Wireframes](app/images/IMG_0228.JPG?raw=true "Wireframes")



## MVP

top 5 crypto with price on homepage.
crypto news from reddit.
Being able to log in.   
if change is negative price in red otherwise green.

## POST MVP

- see meetups near you.
- Graphic display of the price course.



## API used

 - coinmarketcap
 - reddit

## Code Snippet
Here I write js in ejs.
```
<% if ( coin[0].percent_change_1h > 0) { %>
    <p>Last Hour: <span class="pos-change"><%= coin[0].percent_change_1h %>%</span></p>
<% } else { %>
  <p>Last Hour: <span class="neg-change"><%= coin[0].percent_change_1h %>%</span></p>

<% }%>
<% if ( coin[0].percent_change_24h > 0) { %>
    <p>Last 24h: <span class="pos-change"><%= coin[0].percent_change_24h %>%</span></p>
<% } else { %>
  <p>Last 24h: <span class="neg-change"><%= coin[0].percent_change_24h %>%</span></p>

<% }%>
<% if ( coin[0].percent_change_7d > 0) { %>
    <p>Last 7d: <span class="pos-change"><%= coin[0].percent_change_7d %>%</span></p>
<% } else { %>
  <p>Last 7d: <span class="neg-change"><%= coin[0].percent_change_7d %>%</span></p>

<% }%>
<p>Price USD: $<%= coin[0].price_usd %></p>
```



## Change Log
 None.

## Issues and Resolutions
When I want to deploy on heroku the error keeps giving me an undefined error here :
```
<%= coin[0].id %>, <%= coin[0].symbol %>
```
(views/show.ejs)
This variable is only defined when used, I havn't found a solution yet
