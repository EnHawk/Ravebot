const mongoose = require(`mongoose`);
const config = require(`../config.json`);
const test = require(`./index.mjs`);

(async () => {
    try {
        await mongoose.connect(config.DB_URI)
            .then(() => console.log(`Test: ${test.connection}\nStatus: ${test.status[0]}`))
            .then(() => process.exit(0));
    } catch (error) {
        console.log(`Test: ${test.connection}\nStatus: ${test.status[1]}`);
        console.error(error);
        
        process.exit(1)
    };
})();