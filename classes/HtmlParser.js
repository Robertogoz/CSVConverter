const ejs = require('ejs');

class HTMLParser {
    static async Parse(table) {
        try {
            return await ejs.renderFile('./table.ejs', {header: table.header, rows: table.rows});
        } catch(err) {
            console.error('Error: Fail to parse html')
        }
    }
}

module.exports = HTMLParser;