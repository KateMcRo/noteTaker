const express = require('express');
const app = express();
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const apik= ('./apik');
const htmlRoutes = ("./routes/htmlRoutes.js");
const birds = require('./birds')
const api = require('./api')

// helper functions
async function getDBNotes(){
    const dbNotes = await fs.readFileSync("./db/db.json", "utf-8")
    return dbNotes
}

getDBNotes()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apik)




app.listen(3001, () => {
    console.log('Server started on port 3001');
});