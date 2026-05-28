// external modules
const express = require("express");
const cookiesParser = require("cookie-parser");

// import routes
const cookieRoutes = require("./routes/cookies");

const app = express();

// parse cookies attached to incoming requests so we can read them via req.cookies
app.use(cookiesParser());

// let express understand JSON request bodies
app.use(express.json());

// any request starting with /cookies goes to the cookieRoutes handler
app.use("/cookies", cookieRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`server run PORT : ${PORT}`));
