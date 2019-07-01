var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetRoles', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetRoles", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.get('/GetRole', function (req, res) {

    var request = new sql.Request();
    request.input("RoleID", sql.Int, req.query.RoleID)
    request.execute("spGetRole", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.post('/InsertRole', function (req, res) {

    var request = new sql.Request();

    request.input("RoleName", sql.NVarChar(50), req.body.RoleName)
    request.input("DisplayName", sql.NVarChar(50), req.body.DisplayName)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spInsertRole", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})



router.delete('/DeleteRole', function (req, res) {

    var request = new sql.Request();

    request.input("RoleID", sql.Int, req.query.RoleID)
    request.execute("spDeleteRole", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})


router.put('/UpdateRole', function (req, res) {

    var request = new sql.Request();

    request.input("RoleID", sql.Int, req.query.RoleID)
    request.input("RoleName", sql.NVarChar(50), req.body.RoleName)
    request.input("DisplayName", sql.NVarChar(50), req.body.DisplayName)
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.execute("spUpdateRole", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
        }
        else {
            res.json({ "success": true, results });
        }
    });
})

module.exports = router;