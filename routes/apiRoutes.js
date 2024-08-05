const express = require("express");

// Import our files containing our routes
const noteRoute = require("./htmlRoutes");

// call express
const app = express();

// route to notes
app.use("/notes", noteRoute);

// export the module
module.exports = app;
