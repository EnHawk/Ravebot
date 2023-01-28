const express = require(`express`);
const app = express();
// Import

module.exports = (port) => {
    app.use(express.static(`${__dirname}/public`));
    app.listen(port, () => console.log(`Listening on port ${port}.`));
};
// Export