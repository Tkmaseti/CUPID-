const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.user = require("./user.models")
db.role = require("./roles.models")
db.events = require("./events.models")
db.gifts = require("./gifts.models")
db.postcast = require("./podcast.models")
db.restuarants = require("./restuarants.models")
db.ROLES = ["users", "admin", "moderator"];

module.exports = db;