import * as http from "http";

const getBody = async (request) => {
  const body = await new Promise((resolve, reject) => {
    let data = [];
    request.on("data", (chunk) => {
      data.push(chunk);
    });
    request.on("error", (error) => {
      reject(error);
    });
    request.on("end", () => {
      resolve(data.join());
    });
  });

  return JSON.parse(body);
};

const server = http.createServer({}, async (request, response) => {
  if (request.method === "POST") {
    try {
      const body = await getBody(request, response);
      const bodyResponse = JSON.stringify(body) + "\n";
      response.setHeader("Content-Type", "application/json");
      response.setHeader("Content-Length", Buffer.byteLength(bodyResponse));
      response.end(bodyResponse);
    } catch (error) {
      console.error("Error", error);
      response.statusCode = 500;
      response.end();
    }
  } else {
    const bodyResponse = JSON.stringify({ hello: "world" }) + "\n";
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Content-Length", Buffer.byteLength(bodyResponse));
    response.end(bodyResponse);
  }
});

server.listen(8080, "0.0.0.0");

server.on("error", (err) => {
  console.log("exit");
  process.exit(1);
});
console.log("start node POST http");
