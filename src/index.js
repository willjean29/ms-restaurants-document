const app = require("./express-app");
const dotenv = require("dotenv");
dotenv.config();
async function main() {
  await app.listen(5000);
  console.log("listening to port ", 5000);
}

main();
