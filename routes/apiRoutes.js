const appExpress = require("express");

// Import our files containing our routes
const notesRouter = require("./htmlRoutes");

// call express
const appApp = appExpress();

// route to notes
appApp.use("/notes", notesRouter);

// export the module
module.exports = appApp;
