var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetPriorities', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetPriorities", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.get('/GetPriority', function (req, res) {

    var request = new sql.Request();
    request.input("PriorityID", sql.Int, req.query.PriorityID)
    request.execute("spGetPriority", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.post('/InsertPriority', function (req, res) {

    var request = new sql.Request();

    request.input("Priority", sql.Int, req.body.Priority)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.input("Color", sql.NVarChar(25), req.body.Color)
    request.execute("spInsertPriority", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.delete('/DeletePriority', function (req, res) {

    var request = new sql.Request();

    request.input("PriorityID", sql.Int, req.query.PriorityID)
   
    request.execute("spDeletePriority", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})



router.put('/UpdatePriority', function (req, res) {

    var request = new sql.Request();

    request.input("PriorityID", sql.Int, req.query.PriorityID)
    request.input("Priority", sql.Int, req.body.Priority)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.input("Color", sql.NVarChar(25), req.body.Color)
    request.execute("spUpdatePriority", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;