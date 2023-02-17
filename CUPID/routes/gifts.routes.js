const { authJwt } = require("../middlewares"); 
const controller = require("../controllers/user.controllers");
const giftControllers = require("../controllers/gifts.controllers");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/event", [authJwt.verifyToken, authJwt.isAdmin], giftControllers.createGift);
    app.get("/api/event", giftControllers.findAll);
    app.put("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], giftControllers.update);
    app.delete("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], giftControllers.deleteOne);
};