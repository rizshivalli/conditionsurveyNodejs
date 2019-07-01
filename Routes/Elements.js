var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetMajorElements', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetMajorElements", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})



router.get('/GetSuperElements', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetSuperElements", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})




router.get('/GetSubElements', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetSubElements", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


module.exports = router;