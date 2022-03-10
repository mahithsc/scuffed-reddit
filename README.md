# Scuffed Reddit

You can take a look at this project at: https://scuffed-reddit.vercel.app/authPage

## Tech Stack
For this build I decided to use NextJs for the front end, Firebase for the backend, and tried using Typescript for the first time.

## Problems I Encoutnered
Probably the largest problem I encountered was trying to retrieve all the posts using the realtime feature on firebase. I had to stear clear from this technique, because it was too inefficient searching the whole database for any changes. Instead the solution I used was querying a certain number of posts at a time. This allowed for better memory usage from the client side.


