var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetActions', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetActions", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})


router.get('/GetAction', function (req, res) {

    var request = new sql.Request();
    request.input("ActionID", sql.Int, req.query.ActionID)
    request.execute("spGetAction", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.post('/InsertAction', function (req, res) {

    var request = new sql.Request();
    request.input("Action", sql.NVarChar(25), req.body.Action)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spInsertAction", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });
})



router.delete('/DeleteAction', function (req, res) {

    var request = new sql.Request();

    request.input("ActionID", sql.Int, req.query.ActionID)

    request.execute("spDeleteAction", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateAction', function (req, res) {

    var request = new sql.Request();

    request.input("ActionID", sql.Int, req.query.ActionID)
    request.input("Action", sql.NVarChar(25), req.body.Action)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spUpdateAction", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


module.exports = router;