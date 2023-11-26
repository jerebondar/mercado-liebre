const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("public"));


/* app.listen(3000, () => {
    console.log("Servidor funcionando")
}) */

const port = process.env.PORT || 3000;
app.listen(port, () =>console.log('Servidor corriendo'))

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html")
    res.sendFile(htmlPath)
})

app.get("/creatucuenta", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html")
    res.sendFile(htmlPath)
})

app.get("/ingresa", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html")
    res.sendFile(htmlPath)
})

