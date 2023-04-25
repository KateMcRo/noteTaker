const express = require('express');
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message)
    } else {
        console.log(`App running on ${PORT}`);
    }
});