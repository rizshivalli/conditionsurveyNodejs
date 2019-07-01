var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetUnitsOfMeasurements', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetUnitsOfMeasurements", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.get('/GetUnitsOfMeasurementsApp', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetUnitsOfMeasurementsApp", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})

router.get('/GetUnitsOfMeasurement', function (req, res) {

    var request = new sql.Request();
    request.input("UnitsOfMeasurementID", sql.Int, req.query.UnitsOfMeasurementID)
    request.execute("spGetUnitsOfMeasurement", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.post('/InsertUnitsOfMeasurement', function (req, res) {

    var request = new sql.Request();

    request.input("UnitName", sql.NVarChar(25), req.body.UnitName)
    request.input("UnitSymbol", sql.NVarChar(10), req.body.UnitSymbol)
    request.input("Format", sql.NVarChar(25), req.body.Format)
    request.input("IsDefault", sql.Int, req.body.IsDefault)
    request.execute("spInsertUnitsOfMeasurement", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})



router.delete('/DeleteUnitsOfMeasurement', function (req, res) {

    var request = new sql.Request();

    request.input("UnitsOfMeasurementID", sql.Int, req.query.UnitsOfMeasurementID)
    request.execute("spDeleteUnitsOfMeasurement", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateUnitsOfMeasurement', function (req, res) {

    var request = new sql.Request();

    request.input("UnitsOfMeasurementID", sql.Int, req.query.UnitsOfMeasurementID)
    request.input("UnitName", sql.NVarChar(25), req.body.UnitName)
    request.input("UnitSymbol", sql.NVarChar(10), req.body.UnitSymbol)
    request.input("Format", sql.NVarChar(25), req.body.Format)
    request.input("IsDefault", sql.Int, req.body.IsDefault)
    request.execute("spUpdateUnitsOfMeasurement", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;