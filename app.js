const express = require(express);
const app = express();
const morgan = require(morgan);

app.use(morgan());

app.get('/', (req.res) => {
    res.send('heyo');
})

module.exports = app