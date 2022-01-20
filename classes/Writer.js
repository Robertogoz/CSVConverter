const fs = require('fs');
const util = require('util');

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(fileName, data) {
        try{
            await this.writer(fileName,data);
            return true;
        } catch(err) {
            console.error('Error: Fail to write file');
            return false;
        }
    }
}

module.exports = Writer;