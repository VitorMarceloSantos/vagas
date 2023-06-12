import app from "./app.js";

const port = 3000;
const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

export default server;

