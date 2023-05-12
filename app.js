const express = require('express');
const colors = require('colors');
const routes = require('./routes/index');
const path = require('path');
const port = 8080;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => {
    console.log(`Serwer zostal uruchomiony port: ${port}!`.blue);
    console.log(`Link -> http://localhost:8080`.blue);
});