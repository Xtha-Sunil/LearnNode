1. What is node?

   - Ryan Dahl in May 27, 2009
   - NodeJS is a runtime environmwnt which makes possible to run Js in server outside the browser.
   - It is built on V8 engine.

2. How it differ from JS

   - Js can only run in the browser but node runs on computer or serer.
   - Js is limited to the browser specific functionality, interactions, AJAX but node can interact with DB, creat web servers, file manipulation.

3. V8 engine is developed by google which compiles JS code to machine code.

4. Advantages

   - No need to learn new language.
   - Can share code between front end and back end
   - Huge amouunt of third party packages and tools.

5. streams and buffer

   - If the data is very big we can get it chunk by chunk
   - For this we use `streams`, and chunks are called `buffer`
   - `createReadStream` , `createWriteStream`, `duplexStream`

6. IP address and domains

   - Ip address is the address of server computers
   - As ip address is hard to remember we use domain name
   - domain name is literal value to ip address

7. localhost

   - localhost is loop back domain name
   - `localhost` is domain for the ip `127.0.0.1`
   - loopback means the device connect to itself making it the server

8. Ports

   - specific channel/gateway on the computer through which softwares communicate
   - two services cant use same port simultaneously

9. Status Code

   - status code describe the type of respond sent to user
   - 1xx : informational response
   - 2xx : success
   - 3xx : redirect
   - 4xx : client side error
   - 5xx : server side error

10. package.json

- It consist info about the project like name, version, dependencies etc
- `dependencies` are useful to share our code because it consist of packages that are required for the project which we can install by `npm i`

11. Express.JS

- framework which help us to manage the routing, responses in easy and clean way.
- we can set route using the get method
- `res.send(<msg>)` to send inline response
- `res.sendFile(<absolutePath> , {root : <folderFromWhereAbsolute>})` to send file response
- `res.redirect(<destinationUrl>)`
- `app.use(callback())` is fired on every request made if code runs upto this point
- so we should use `app.use()` :
  - at `first` to run every time , like logger middleware
  - at `last` to workk as `catch all`

12. View engines : EJS

- view engines allows to inject dynamic content and variables in html before sending to browser
- `ejs` means Embedded Javascript which is a templating language
- ejs helps to generate markup using plain JS
- EJS templates are processed through the EJS view engine in the server
- ejs are written inside the `<% %>`
- some flags in ejs
  - <%= ... %> : for HTML escaped output i.e No markup is applied
  - <%- ... %> : for unescaped HTML output i.e Markup is applied
  - <% ... %> : for executing JS without outputting anything
  - <%_ ... _%> : for executing JS and troms whitespace
  - <%- include("file") %> : include another ejs template
- `include`is used to include ejs template which is known as `partials`.

13. Middleware

- `middleware` is code which runs on server between getting `request` and sending the `response`
- Some of its use are :
  - Logger middleware for logging the detail of every request
  - authentication check middleware for protected routes
  - mddleware to parse json from request
  - returning 404 pages
  - adding static files
- this is generally done with `app.use(func)`
- we should use `next()` to move program control to next middleware
- we can also use 3rd-party middleware which are available by usig `npm install <name>`
- `app.use(express.static("public"));` this middleware tells Express to serve files from `public` directory
- any file placed in `public` can be accessed by url

12. Types of request

- GET request to get resourse
- POST request to create new data
- DELETE request to delete data
- PUT request to update data
