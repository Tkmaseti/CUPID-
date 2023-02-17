const { authJwt } = require("../middlewares"); 
const controller = require("../controllers/user.controllers");
const restControllers = require("../controllers/events.controllers");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/restuarant", [authJwt.verifyToken, authJwt.isAdmin], restControllers.createEvent);
    app.get("/api/restuarant", restControllers.findAll);
    app.put("/api/restuarant/:id", [authJwt.verifyToken, authJwt.isAdmin], restControllers.update);
    app.delete("/api/restuarant/:id", [authJwt.verifyToken, authJwt.isAdmin], restControllers.deleteOne);
};