var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetSites', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetSites", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})


router.get('/GetSite', function (req, res) {

    var request = new sql.Request();
    request.input("SiteID", sql.Int, req.query.SiteID)
    request.execute("spGetSite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.post('/InsertSite', function (req, res) {

    var request = new sql.Request();
    
    request.input("SiteNumber", sql.Int, req.query.SiteNumber)
    request.input("SiteName", sql.NVarChar(100), req.body.SiteName)
    request.input("SiteDescription", sql.NVarChar(50), req.body.SiteDescription)
    request.input("SiteArea", sql.Float, req.query.SiteArea)
    request.input("SiteNetArea", sql.Float, req.query.SiteNetArea)
    request.input("Status", sql.NVarChar(50), req.body.Status)
    request.input("IsSchool", sql.Int, req.query.IsSchool)
    request.input("ClientRefID", sql.Int, req.query.ClientRefID)
    request.input("CreatedBy", sql.Int, req.query.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.query.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.query.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.query.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.query.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.query.DeletedTime)
    request.input("IsDeleted", sql.Int, req.query.IsDeleted)
    request.execute("spInsertSite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.delete('/DeleteSite', function (req, res) {

    var request = new sql.Request();

    request.input("SiteID", sql.Int, req.query.ActionID)

    request.execute("spDeleteSite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateSite', function (req, res) {

    var request = new sql.Request();
    request.input("SiteID", sql.Int, req.query.SiteID)
    request.input("SiteNumber", sql.Int, req.query.SiteNumber)
    request.input("SiteName", sql.NVarChar(100), req.body.SiteName)
    request.input("SiteDescription", sql.NVarChar(50), req.body.SiteDescription)
    request.input("SiteArea", sql.Float, req.query.SiteArea)
    request.input("SiteNetArea", sql.Float, req.query.SiteNetArea)
    request.input("Status", sql.NVarChar(50), req.body.Status)
    request.input("IsSchool", sql.Int, req.query.IsSchool)
    request.input("ClientRefID", sql.Int, req.query.ClientRefID)
    request.input("CreatedBy", sql.Int, req.query.CreatedBy)
    request.input("CreatedTime", sql.DateTime, req.query.CreatedTime)
    request.input("ModifiedBy", sql.Int, req.query.ModifiedBy)
    request.input("ModifiedTime", sql.DateTime, req.query.ModifiedTime)
    request.input("DeletedBy", sql.Int, req.query.DeletedBy)
    request.input("DeletedTime", sql.DateTime, req.query.DeletedTime)
    request.input("IsDeleted", sql.Int, req.query.IsDeleted)




    request.execute("spUpdateSite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


module.exports = router;