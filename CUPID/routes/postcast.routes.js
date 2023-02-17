const { authJwt } = require("../middlewares"); 
const controller = require("../controllers/user.controllers");
const podcastControllers = require("../controllers/podcast.controllers");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/event", [authJwt.verifyToken, authJwt.isAdmin], podcastControllers.createPodcast);
    app.get("/api/event", podcastControllers.findAll);
    app.put("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], podcastControllers.update);
    app.delete("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin], podcastControllers.deleteOne);
};