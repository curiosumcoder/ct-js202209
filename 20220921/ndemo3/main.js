import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import * as xml2js from 'xml2js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/customer.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        result.customers.customer.forEach(c => {
            console.log(`${c.id}, ${c.companyName}, ${c.contactName}`);
        });

        console.log('Done');
    });
});