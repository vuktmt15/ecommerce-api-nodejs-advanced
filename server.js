const app = require("./src/app");

const PORT = 3050;

const server = app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server stopped"));
});
