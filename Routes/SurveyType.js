var express = require('express');
var router = express.Router();
var sql = require('mssql');



router.get('/GetSurveyTypes', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetSurveyTypes", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.get('/GetSurveyTypesList', function (req, res) {

    var request = new sql.Request();

    request.execute("spGetSurveyTypesList", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})

router.get('/GetSurveyType', function (req, res) {

    var request = new sql.Request();
    request.input("SurveyTypeID", sql.Int, req.query.SurveyTypeID)
    request.execute("spGetSurveyType", function (error, results, feilds) {
        if (error) {
            res.json({ "success": false, "error": error });
        }
        else {
            res.json({ "success": true, results });
        }
    });

})


router.post('/InsertSurveyType', function (req, res) {

    var request = new sql.Request();

    request.input("SurveyType", sql.NVarChar(25), req.body.SurveyType)
    
    request.input("Description", sql.NVarChar(50), req.body.Description)
    request.input("Code", sql.NVarChar(2), req.body.Code)
    request.execute("spInsertSurveyType", function (error, results, feilds) {

        if (error) {
            res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
        }
        else {
            res.json({ "success": true, results });
        }

    });

})



// router.delete('/DeleteRole', function (req, res) {

//     var request = new sql.Request();

//     request.input("RoleID", sql.Int, req.query.RoleID)
//     request.execute("spDeleteRole", function (error, results, feilds) {

//         if (error) {
//             res.json({ "success": false, "error": error, "errorMsg": "Error While Deleting" });
//         }
//         else {
//             res.json({ "success": true, results });
//         }
//     });
// })


// router.put('/UpdateRole', function (req, res) {

//     var request = new sql.Request();

//     request.input("RoleID", sql.Int, req.query.RoleID)
//     request.input("RoleName", sql.NVarChar(50), req.body.RoleName)
//     request.input("DisplayName", sql.NVarChar(50), req.body.DisplayName)
//     request.input("Description", sql.NVarChar(50), req.body.Description)
//     request.execute("spUpdateRole", function (error, results, feilds) {

//         if (error) {
//             res.json({ "success": false, "error": error, "errorMsg": "Error While Updating" });
//         }
//         else {
//             res.json({ "success": true, results });
//         }
//     });
// })

module.exports = router;