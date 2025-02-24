import * as http from "http";

const server = http.createServer({}, (req, resp) => {
  resp.end(JSON.stringify({ hello: "world" }));
});

server.listen(8080, "0.0.0.0");

server.on("error", (err) => {
  console.log("exit");
  process.exit(1);
});
console.log("start node http");
