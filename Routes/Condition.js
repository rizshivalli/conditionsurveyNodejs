var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetConditions', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetConditions", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.get('/GetCondition', function (req, res) {

    var request = new sql.Request();
    request.input("ConditionID", sql.Int, req.query.ConditionID)
    request.execute("spGetCondition", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.post('/InsertCondition', function (req, res) {

    var request = new sql.Request();

    request.input("Condition", sql.NVarChar(2), req.body.Condition)
    request.input("Description", sql.NVarChar(25), req.body.Description)
    request.input("Color", sql.NVarChar(25), req.body.Color)

    request.execute("spInsertCondition", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.delete('/DeleteCondition', function (req, res) {

    var request = new sql.Request();

    request.input("ConditionID", sql.Int, req.query.ConditionID)
   
    request.execute("spDeleteCondition", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.put('/UpdateCondition', function (req, res) {

    var request = new sql.Request();

    request.input("ConditionID", sql.Int, req.query.ConditionID)
    request.input("Condition", sql.NVarChar(2), req.body.Condition)
    request.input("Description", sql.NVarChar(25), req.body.Description)
    request.input("Color", sql.NVarChar(25), req.body.Color)
    request.execute("spUpdateCondition", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;