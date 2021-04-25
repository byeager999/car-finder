var cars = require("../data/cars");
var userCars = require("../data/usercars");

module.exports = function (app) {
    
    // Returns list of car suggestions
    app.get("/api/cars", function (req, res) {
        console.log(cars);
        return res.json(cars);
    });

    // Returns the user's cars and their answers
    app.get("/api/usercars", function (req, res) {
        
        return res.json(userCars);
    });

    // Adds user car to user car list
    app.post("/api/usercars", function (req, res) {

        // Var containing the users info
        var newUserInfo = req.body;

        // Print new user info to the console
        console.log(newUserInfo);

        // Adds user to the userCars array
        userCars.push(newUserInfo);

        // Passes non-object items in as json
        res.json(newUserInfo);
    });
}






