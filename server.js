const express = require('express');
const app = express();
const fs = require("fs")
const path = require("path");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


app.listen(3001, () => {
    console.log('Server started on port 3001');
});