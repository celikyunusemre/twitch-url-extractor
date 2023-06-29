const express = require('express');
const path = require('path');

const app = express();

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/css", express.static(path.join(__dirname, "public/css/")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use("/js", express.static(path.join(__dirname, "public/js/")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running on port ' + port);
})

module.exports = app;