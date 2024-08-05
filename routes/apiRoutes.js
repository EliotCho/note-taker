const appExpress = require("express");

// Import our files containing our routes
const notesRouter = require("./htmlRoutes");

// call express
const app = appExpress();

// route to notes
app.use("/notes", notesRouter);

// export the module
module.exports = app;
