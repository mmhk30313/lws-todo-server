const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db_todos.json');

const middleWares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 9000;
server.use(middleWares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

//PROCFILE
// web: node server.js