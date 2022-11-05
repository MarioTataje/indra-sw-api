const serverless = require("serverless-http");
const app = require('./src/index');

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world!",
  });
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
