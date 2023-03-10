const express = require('express');
const cors = require('cors');
const app = express();

const db = require("./models");
const Role = db.role;
const dbConfig = require("./config/db.config")

db.mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => {
    console.log("Successfully connected to mongodb");
    initial();
})
// .catch( err => {
//     console.err("Connection error", err);
//     process.exit();
// });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0){
            new Role({name: "user"})
            .save(err => {
                if(err){console.log("error", err);}
                console.log("added 'user' to roles collection");
            });
            new Role({name: "admin"})
            .save(err => {
                if(err){console.log("error", err);}
                console.log("added 'admin' to roles collection");
            });
        }
    });
}


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to my App"});
});

const PORT = process.env. PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/events.routes")(app);
require("./routes/gifts.routes")(app);
require("./routes/postcast.routes")(app);
require("./routes/restuarants.routes")(app);
