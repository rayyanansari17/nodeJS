/*
The Beginning - 2009, ryan Dahl's Vision 


at that time :

- javascript was only used in browsers 
- servers were built using php, python, or java 
- each request on the server would create a new thread, consuming memory and slowing things down under heavy load

ryan found this inefficient, especially after seeing how web browsers handled asynchronous events (non-blocking operations)

he wanted the same non-blocking behaviour on the server
thats how Node.js was born - to bring JavaScript to the backend, but in a faster and more scaleable way 





The Core Idea - Event Driven & Non Blocking I/O

Ryan built node.js using :
-google V8 Engine (the same engine that powers Chrome)
- libuv (a C library for asynchronous I/O)

this combination allowed Node.js to :

- handle many request at once using a single thread 
- avoid blocking while waiting for tasks like file reading or database queries 

In Short :

Node.js introduced a single threaded, event driven architecture that made srvers lightweight and fast 


Early Days (2009 - 2011)

- 2009: Node.js was released at the JSConf EU conference 
- 2010: npm (Node package manager) was introduced -- the game changer developers could easily install and share reusable packages 
- 2011: companies like linkedin and uber started Node.js for their backends due to its speed and scalability 

Example: 
Linkedin moved from Ruby on Rails to Node.js and saw their servers handle 10x more traffic with fewer machines 


Rise in popularity (2012 - 2015)

Node.js rapidly became the go to choice for building:
- APIs 
- Realtime applications (chat , live updates)
- command line tools
- developers utilites

big companies joined:

- netflix (for streaming)
- paypal (for faster APIs)
- ebay, walmart and NASA adopted Node.js in production 

However, around 2014 there was community tension -development was slow and contributors were frustrated 


Today's Ecosystem 

the Nodejs ecosystem is massive:
- over 2 million+ packages on npm 
- used 90% of modern web developers 
- foundations for frameworks like Express.js, Fastify and AdonisJS

its no longer "just JavaScript on the server" - its the backbone of the modern web, connecting APIs, microservices, and tools



In Ryan Dahls Words 



Time line:


- 2009      Ryan Dahll creates Node.js
- 2010      npm (node pachage manager) is launched
- 2011      linkedin and uber adopted Node.js
- 2014      io.js fork due to governance issue 
- 2015      io.js marge back -> Nodejs foundation formed 
- 2017+     async/ await, ES modules, and major improvements
- 2020s     Node.js becomes a global standard for web servers 






*/