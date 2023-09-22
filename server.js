const express = require("express");
const cors = require("cors");

const { readdirSync } = require("fs");

const app = express();
const port = "https://react-quiz-backend.netlify.app";

const corsOptions = {
  origin: "https://react-quiz-app11.netlify.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

readdirSync("./routes").map((route) =>
  app.use("/", require(`./routes/${route}`))
);

app.listen(port, () => {
  console.log(`Example app listening at${port}`);
});
