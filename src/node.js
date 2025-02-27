import * as http from "http";

const server = http.createServer({}, (request, response) => {
  const body = JSON.stringify({ hello: "world" }) + "/n";
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Length", Buffer.byteLength(body));
  response.end(body);
});

server.listen(8080, "0.0.0.0");

server.on("error", (err) => {
  console.log("exit");
  process.exit(1);
});
console.log("start node http");
