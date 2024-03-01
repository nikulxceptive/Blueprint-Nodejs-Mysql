const express = require("express");
const cors = require("cors");
const formidableMiddleware = require("express-formidable");
const sequelize = require("./helpers/db");

const app = express();

app.use(formidableMiddleware());
app.use(cors()); //Allow cors

//Add Routes
app.use("/", require("./routes"));

//Exclude Public Folder
app.use(express.static("/public"));

//Default Route
app.head("/", async (req, res) => {
    return res.status(200).send({ status: 'online' });
});

//Starting Server & Database Connection
sequelize.authenticate().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server Started & Listing to PORT ${process.env.SERVER_PORT}`);
    });
}).catch((error) => {
    console.error("Unable to connect to the database: ", error);
});

module.exports = app;
