// Dependencies
var express = require("express");
var path = require("path");


// Sets up the Express app
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log("App listening on PORT http//:localhost:" + PORT);
});



