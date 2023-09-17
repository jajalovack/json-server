const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.NODE_PORT || 8000;

server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
