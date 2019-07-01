var express = require('express');
var router = express.Router();
var sql = require('mssql');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var process = require("process");

var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './Uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var fileFilter = (req, file, cb) => {

    if (file.mimetype === 'application/json') {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
};


var upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/GetFiles', upload.array('files', 300), function (req, res) {

    // console.log(req.file);
    if (req.file) {
        res.send({ "Status": true, "Msg": "File Uploaded Successfully" });

        // var oldPath = './Uploads/ABC.json'
        // var newPath = './Archived/ABC.json'

        // fs.rename(oldPath, newPath, function (err) {
        //   if (err) throw err
        //   console.log('Successfully renamed - AKA moved!')
        // })



        // fs.readFile('./Uploads/jsondatatbPriority.json', (err, data) => {  
        //     if (err) throw err;
        //     let Condition = JSON.parse(data);
        //     console.log(Condition);
        //     var request = new sql.Request();
        //     request.input("Condition", sql.NVarChar(400000), JSON.stringify(Condition))
        //     request.execute("spData", function (error, results, feilds) {
        //         if (error) {
        //                      console.log(error);
        //                     }
        //                     else {
        //                         console.log("Success");
        //                     }
        //     });
        //    // console.log(student);
        //    // res.send(student);
        // });
    }
    else {
        res.send({ "Status": false, "Msg": "Failed to upload the File" });
    }


})



router.post('/JsonFiles', function (req, res) {
    


    fs.readFile('./Uploads/File.json', (err, data) => {  
       // if (err) throw err;
         var Condition = JSON.parse(data);
         //console.log(Condition);
        // Condition = JSON.stringify(Condition)
        Condition.forEach(function (Element){
            var dummy = Element.image

            console(dummy);
            // dummy.forEach(function (imageElement){
            //     console.log(imageElement)
            // })
            //dummy = JSON.stringify(dummy)
            //JSON.parse(JSON.stringify(dummy))
            //console.log("image---------------------------------------------- "+dummy);
         
        })
         //res.send(Condition);

         //var FileDataCondition = 
    
        // console.log(student);
        // res.send(student);
     });
    // var request = new sql.Request();
    // request.input("RoleID", sql.Int, req.query.RoleID)
    // request.execute("spGetRole", function (error, results, feilds) {
    //     if (error) {
    //         res.json({ "success": false, "error": error });
    //     }
    //     else {
    //         res.json({ "success": true, results });
    //     }
    // });

})

router.post('/Example', function (req, res) {

    // var request = new sql.Request();


    // request.input("FileData", sql.NVarChar(max), req.query.FileData)
    // request.execute("spInsertUnitsOfMeasurement", function (error, results, feilds) {

    //     if (error) {
    //         res.json({ "success": false, "error": error, "errorMsg": "Error While Inserting" });
    //     }
    //     else {
    //         res.json({ "success": true, results });
    //     }

    // });


    var moveFrom = './Uploads';
    var moveTo = './Archived';


    fs.readdir(moveFrom, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        files.forEach(function (file, index) {
            // Make one pass and make the file complete

           // console.log(file);

              fs.readFile('./Uploads/'+file, (err, data) => {  
           if (err) throw err;
            let Condition = JSON.parse(data);
            console.log(Condition);
    
           // console.log(student);
           // res.send(student);
        });

            var fromPath = path.join(moveFrom, file);
            var toPath = path.join(moveTo, file);



            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    //    console.log("Moved file '%s' to '%s'.", fromPath, toPath);
                }
            });

        });

    });

    res.json({ "success": true });
    //console.log("Executing the Example");



})




module.exports = router;