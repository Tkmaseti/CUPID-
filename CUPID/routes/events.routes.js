const { authJwt } = require("../middlewares"); 
const controller = require("../controllers/user.controllers");
const eventControllers = require("../controllers/events.controllers");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/event", [authJwt.verifyToken, authJwt.isAdmin], eventControllers.createEvent);
    app.get("/api/event", eventControllers.findAll);
    app.put("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], eventControllers.update);
    app.delete("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], eventControllers.deleteOne);
};