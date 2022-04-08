const app = require("./express-app");
const dotenv = require("dotenv");
dotenv.config();
async function main() {
  await app.listen(process.env.PORT);
  console.log("listening to port ", process.env.PORT);
}

main();
