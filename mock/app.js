let jsonServer = require('json-server'),
    app = jsonServer.create(),
    middlewares = jsonServer.defaults(),
    server = require('./server');

app.use(middlewares)

app.use(jsonServer.bodyParser);

server(app);

app.listen(3020, function () {
  console.log('JSON Server is running')
})