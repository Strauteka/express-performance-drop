# Express performance comparison 

Simple node http **GET(src/node.js)** vs express **GET(src/express.js)**. Performance drop observed ~2.5x times. 


-   INSTALL:
    -   `npm install`
-   RUN:
    -   `npm run node`
    -   `npm run express`
-   TEST
    -   `ab -n 10000 -c 10 -T 'application/json'   http://localhost:8080/temp/test/`