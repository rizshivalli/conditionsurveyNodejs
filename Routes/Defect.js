var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetDefects', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetDefects", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.get('/GetDefect', function (req, res) {

    var request = new sql.Request();
    request.input("DefectID", sql.Int, req.query.DefectID)
    request.execute("spGetDefect", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.post('/InsertDefect', function (req, res) {

    var request = new sql.Request();
    request.input("Defect", sql.NVarChar(25), req.body.Defect)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spInsertDefect", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.delete('/DeleteDefect', function (req, res) {

    var request = new sql.Request();

    request.input("DefectID", sql.Int, req.query.DefectID)

    request.execute("spDeleteDefect", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateDefect', function (req, res) {

    var request = new sql.Request();

    request.input("DefectID", sql.Int, req.query.DefectID)
    request.input("Defect", sql.NVarChar(25), req.body.Defect)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spUpdateDefect", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;