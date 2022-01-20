const Reader = require('./classes/Reader');
const Writer = require('./classes/Writer');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HTMLParser = require('./classes/HtmlParser');
const PDFWriter = require('./classes/PDFWriter');

var reader = new Reader();
var writer = new Writer();

async function main() {
    let data = await reader.Read('./file.csv');
    var processedData = Processor.Process(data);

    let table = new Table(processedData);

    let html = await HTMLParser.Parse(table);

    writer.Write('./ConvertedFiles/html/file'+Date.now()+'.html', html);

    PDFWriter.WritePDF('./ConvertedFiles/pdf/file'+Date.now()+'.pdf', html);
}

main();
