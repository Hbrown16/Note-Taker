// setting up dependencies
const fs = require("fs")
const path = require("path")
const express = require("express")


// Creating port connection
const app = express();
const PORT = process.env.PORT || 8080;

// Create Express APP
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// serves files from directory
app.use(express.static("public"));


app.use("/", require("./Routes/HTMLroutes"));
app.use("/api", require("./Routes/apiroutes"));

//Listener

app.listen(PORT, function() {
    console.log(`APP listening on PORT ${PORT}`);
});