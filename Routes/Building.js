var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetBuildings', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetBuildings", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})


router.get('/GetBuilding', function (req, res) {

    var request = new sql.Request();
    request.input("BuildingID", sql.Int, req.query.ActionID)
    request.execute("spGetBuilding", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.post('/InsertBuilding', function (req, res) {

    var request = new sql.Request();
  
    request.input("BuildingNumber", sql.Int, req.query.BuildingNumber)
    request.input("BuildingName", sql.NVarChar(255), req.body.BuildingName)
    request.input("BuildingDescription", sql.NVarChar(255), req.body.BuildingDescription)
    request.input("BuildingType", sql.NVarChar(50), req.body.BuildingType)
    request.input("SiteID", sql.Int, req.query.SiteID)
    request.input("YearBuild", sql.Int, req.query.YearBuild)
    request.input("LifeRemainingYears", sql.Int, req.query.LifeRemainingYears)
    request.input("LifeYearEnd", sql.Int, req.query.LifeYearEnd)
    request.input("Status", sql.NVarChar(50), req.body.Status)
    request.input("ClientRefID", sql.Int, req.query.ClientRefID)
    request.input("CreatedBy", sql.Int, req.query.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.query.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.query.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.query.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.query.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.query.DeletedTime)
    request.input("IsDeleted", sql.Int, req.query.IsDeleted)
    request.execute("spInsertBuilding", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.delete('/DeleteBuilding', function (req, res) {

    var request = new sql.Request();

    request.input("BuildingID", sql.Int, req.query.ActionID)

    request.execute("spDeleteBuilding", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateBuilding', function (req, res) {

    var request = new sql.Request();
    request.input("BuildingID", sql.Int, req.query.BuildingID)
    request.input("BuildingNumber", sql.Int, req.query.BuildingNumber)
    request.input("BuildingName", sql.NVarChar(255), req.body.BuildingName)
    request.input("BuildingDescription", sql.NVarChar(255), req.body.BuildingDescription)
    request.input("BuildingType", sql.NVarChar(50), req.body.BuildingType)
    request.input("SiteID", sql.Int, req.query.SiteID)
    request.input("YearBuild", sql.Int, req.query.YearBuild)
    request.input("LifeRemainingYears", sql.Int, req.query.LifeRemainingYears)
    request.input("LifeYearEnd", sql.Int, req.query.LifeYearEnd)
    request.input("Status", sql.NVarChar(50), req.body.Status)
    request.input("ClientRefID", sql.Int, req.query.ClientRefID)
    request.input("CreatedBy", sql.Int, req.query.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.query.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.query.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.query.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.query.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.query.DeletedTime)
    request.input("IsDeleted", sql.Int, req.query.IsDeleted)




    request.execute("spUpdateBuilding", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


module.exports = router;