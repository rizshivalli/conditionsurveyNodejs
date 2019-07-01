var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/SurveyLandingPage', function (req, res) {

    var request = new sql.Request();
    request.input("SurveyorID", sql.Int, req.query.SurveyorID)
    request.execute("spSurveyLandingPage", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})



router.get('/SurveyLandingPageBuildingDetails', function (req, res) {

    var request = new sql.Request();
    request.input("ScheduleSurveyHeaderID", sql.Int, req.query.ScheduleSurveyHeaderID)
    request.input("SurveyorID", sql.Int, req.query.SurveyorID)
    request.execute("spSurveyLandingPageBuildingDetails", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.get('/SurveyLandingPageBuilding', function (req, res) {

    var request = new sql.Request();
    request.input("ScheduleSurveyHeaderID", sql.Int, req.query.ScheduleSurveyHeaderID)
    request.input("SurveyorID", sql.Int, req.query.SurveyorID)
    request.input("BuildingID", sql.Int, req.query.BuildingID)
    request.execute("spSurveyLandingPageBuilding", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


module.exports = router;