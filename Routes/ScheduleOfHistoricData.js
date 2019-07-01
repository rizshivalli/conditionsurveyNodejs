var express = require('express');
var router = express.Router();
var sql = require('mssql');




router.get('/GetScheduledSites', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetListOfScheduledSites", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})

router.get('/GetScheduledYearsOfASite', function (req, res) {

    var request = new sql.Request();
    request.input("UPRN", sql.NVarChar(50), req.query.UPRN)
    request.execute("spGetListOfScheduledYearsForASite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})

    router.get('/GetScheduledBuildingsOfASite', function (req, res) {

    var request = new sql.Request();
    request.input("UPRN", sql.NVarChar(50), req.query.UPRN)
    request.input("SurveyYear", sql.Int, req.query.SurveyYear)
    request.execute("spGetListOfScheduledBuildingsForASite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})

    router.get('/GetScheduledBuildingInformationOfASite', function (req, res) {

    var request = new sql.Request();
    request.input("UPRN", sql.NVarChar(50), req.query.UPRN)
    request.input("SurveyYear", sql.Int, req.query.SurveyYear)
    request.input("BuildingID", sql.Int, req.query.BuildingID)
    request.execute("spGetListOfScheduledBuildingInformationForASite", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})

router.get('/GetScheduledElementsForABuilding', function (req, res) {

    var request = new sql.Request();
    request.input("UPRN", sql.NVarChar(50), req.query.UPRN)
    request.input("SurveyYear", sql.Int, req.query.SurveyYear)
    request.input("BuildingID", sql.Int, req.query.BuildingID)
    request.execute("spGetListOfElementsforABuilding", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})

router.get('/GetEstimatedCostOfAnElement', function (req, res) {

    var request = new sql.Request();
    request.input("UPRN", sql.NVarChar(50), req.query.UPRN)
    request.input("SurveyYear", sql.Int, req.query.SurveyYear)
    request.input("BuildingID", sql.Int, req.query.BuildingID)
    request.input("ElementID", sql.Int, req.query.ElementID)
    request.execute("spGetEstimatedCostforAnElement", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})



module.exports = router;