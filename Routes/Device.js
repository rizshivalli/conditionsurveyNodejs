var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetDevices', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetDevices", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.get('/GetDevice', function (req, res) {

    var request = new sql.Request();
    request.input("DeviceID", sql.Int, req.query.DeviceID)
    request.execute("spGetDevice", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.post('/InsertDevice', function (req, res) {

    var request = new sql.Request();

    request.input("DeviceName", sql.NVarChar(25), req.body.DeviceName)
    request.input("ModelName", sql.NVarChar(255), req.body.ModelName)
    request.input("OperatingSystem", sql.NVarChar(100), req.body.OperatingSystem)
    request.input("EffectiveDate", sql.Date, req.body.EffectiveDate)
    request.input("MACAddress", sql.NVarChar(100), req.body.MACAddress)
    request.input("DeviceNumber", sql.NVarChar(100), req.body.DeviceNumber)
    request.input("Status", sql.NVarChar(25), req.body.Status)
    request.input("Vendor", sql.NVarChar(50), req.body.Vendor)
    request.input("CreatedBy", sql.Int, req.body.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.body.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.body.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.body.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.body.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.body.DeletedTime)
    request.input("IsDeleted", sql.Int, req.body.IsDeleted)
    request.execute("spInsertDevice", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})




router.delete('/DeleteDevice', function (req, res) {

    var request = new sql.Request();

    request.input("DeviceID", sql.Int, req.query.DeviceID)
   
    request.execute("spDeleteDevice", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.put('/UpdateDevice', function (req, res) {

    var request = new sql.Request();

    request.input("DeviceID", sql.Int, req.query.DeviceID)
    request.input("DeviceName", sql.NVarChar(25), req.body.DeviceName)
    request.input("ModelName", sql.NVarChar(255), req.body.ModelName)
    request.input("OperatingSystem", sql.NVarChar(100), req.body.OperatingSystem)
    request.input("EffectiveDate", sql.Date, req.body.EffectiveDate)
    request.input("MACAddress", sql.NVarChar(100), req.body.MACAddress)
    request.input("DeviceNumber", sql.NVarChar(100), req.body.DeviceNumber)
    request.input("Status", sql.NVarChar(25), req.body.Status)
    request.input("Vendor", sql.NVarChar(50), req.body.Vendor)
    request.input("CreatedBy", sql.Int, req.body.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.body.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.body.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.body.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.body.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.body.DeletedTime)
    request.input("IsDeleted", sql.Int, req.body.IsDeleted)
    request.execute("spUpdateDevice", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


module.exports = router;