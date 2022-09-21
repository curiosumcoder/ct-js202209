var fs = require("fs"), xml2js = require("xml2js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // Los datos aquí
  var parser = new xml2js.Parser();
  let customers = [];
  fs.readFile(__dirname + "/customer.xml", function (err, data) {
    parser.parseString(data, function (err, result) {
      console.log(__dirname);
      console.dir(result);
      customers = result.customers.customer ?? [];

      console.log(`filter: ${req.query.filter}`);
      const filter = req.query.filter ?? '';
      if (customers.length > 0)
      {
        console.log(customers);
        customers.forEach(c => {
          console.log(c.companyName.join());
        });
        customers = customers.filter(
          c => c.companyName.join().includes(filter));
        console.log(customers);
      }

      console.log("Done");

      // Pasar los datos al página inicial
      res.render("index", { title: "Express", customers, filter });
    });
  });
});
module.exports = router;
