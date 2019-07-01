var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetSORS', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetScheduleOfRates", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.get('/GetSORSApp', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetScheduleOfRatesApp", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})

router.get('/GetSOR', function (req, res) {

    var request = new sql.Request();
    request.input("ScheduleOfRatesID", sql.Int, req.query.ScheduleOfRatesID)
    request.execute("spGetScheduleOfRate", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.post('/InsertSOR', function (req, res) {

    var request = new sql.Request();

    request.input("Service", sql.NVarChar(25), req.body.Service)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.input("MeasurementUnit", sql.NVarChar(25), req.body.MeasurementUnit)
    request.input("Rate", sql.Float, req.body.Rate)
    request.input("CreatedBy", sql.Int, req.body.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.body.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.body.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.body.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.body.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.body.DeletedTime)
    request.input("IsDeleted", sql.Int, req.body.IsDeleted)
    request.execute("spInsertScheduleOfRates", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.delete('/DeleteSOR', function (req, res) {

    var request = new sql.Request();

    request.input("ScheduleOfRatesID", sql.Int, req.query.ScheduleOfRatesID)
    request.execute("spDeleteScheduleOfRates", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateSOR', function (req, res) {

    var request = new sql.Request();

    request.input("ScheduleOfRatesID", sql.Int, req.query.ScheduleOfRatesID)
    request.input("Service", sql.NVarChar(25), req.body.Service)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.input("MeasurementUnit", sql.NVarChar(25), req.body.MeasurementUnit)
    request.input("Rate", sql.Float, req.body.Rate)
    request.input("CreatedBy", sql.Int, req.body.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.body.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.body.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.body.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.body.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.body.DeletedTime)
    request.input("IsDeleted", sql.Int, req.body.IsDeleted)
    request.execute("spUpdateScheduleOfRates", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;