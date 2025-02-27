# Express performance comparison 

Simple node http **GET(src/node.js)** vs express **GET(src/express.js)**. Performance drop observed.


-   INSTALL:
    -   `apt-get install apache2-utils`
    -   `npm install`
-   RUN:
    -   GET
        -   `npm run node`
        -   `npm run express`
    -   POST
        -   `npm run node-post` 
        -   `npm run express-post`
-   TEST
    - GET  `ab -n 10000 -c 10 -T 'application/json'   http://localhost:8080/temp/test/`
    - POST  `ab -k -n 10000 -c 10   -T 'application/json' -p ./post.json  http://localhost:8080/temp/test`