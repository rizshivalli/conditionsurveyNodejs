var express = require('express');
var router = express.Router();
var sql = require('mssql');


router.post('/InsertUser', function (req, res) {

    var request = new sql.Request();

    request.input("Title", sql.NVarChar(5), req.body.Title)
    request.input("FirstName", sql.NVarChar(50), req.body.FirstName)
    request.input("LastName", sql.NVarChar(50), req.body.LastName)
    request.input("FullName", sql.NVarChar(100), req.body.FullName)
    request.input("UserName", sql.NVarChar(50), req.body.UserName)
    request.input("Email", sql.NVarChar(50), req.body.Email)
    request.input("Password", sql.NVarChar(50), req.body.Password)
    request.input("Status", sql.NVarChar(50), req.body.Status)
    request.input("CreatedBy", sql.Int, req.body.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.body.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.body.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.body.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.body.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.body.DeletedTime)
    request.input("IsDeleted", sql.Int, req.body.IsDeleted)
    request.input("DeviceID", sql.Int, req.body.DeviceID)
    request.input("Roles", sql.NVarChar(4000), JSON.stringify(req.body.Roles))
    request.input("Picture", sql.NVarChar(4000), req.body.Picture)
    request.input("OtherDevices", sql.NVarChar(4000), JSON.stringify(req.body.OtherDevices))
    request.input("SurveyTypes", sql.NVarChar(4000), JSON.stringify(req.body.SurveyTypes))
    request.execute("spInsertUser", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.get('/GetUsers', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetUsers", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });


        }
    });

})


router.get('/GetUser', function (req, res) {

    var request = new sql.Request();
    request.input("UserID", sql.Int, req.query.UserID)
    request.execute("spGetUser", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})







module.exports = router;