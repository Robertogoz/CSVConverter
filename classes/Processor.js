class Processor {
    static Process(data) {
        var rowArr = data.split("\r\n");
        var rows = [];

        rowArr.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        })
        return rows;
    }
}

module.exports = Processor;