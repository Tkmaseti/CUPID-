
const { authJwt } = require("../middlewares"); 
const controller = require("../controllers/user.controllers");
const { isAdmin } = require("../middlewares/authJwt");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
    app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
    app.get("/api/users", controller.findAll)
}