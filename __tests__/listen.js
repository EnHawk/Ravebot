const express = require(`express`);
const app = express();
const config = require(`../config.json`);
const test = require(`./index`);

try {
    app.listen(config.PORT, () => {
        console.log(`Test: ${test.listen}\nStatus: ${test.status[0]}`);
        
        process.exit(0)
    });
} catch (error) {
    console.log(`Test: ${test.listen}\nStatus: ${test.status[1]}`);
    console.error(error);

    process.exit(1);
};