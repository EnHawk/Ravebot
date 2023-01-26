module.exports = (port) => {
    const express = require(`express`);
    const app = express();

    app.use(express.static(`${__dirname}/public`));

    app.listen(port, () => console.log(`Listening on port ${port}.`));
};