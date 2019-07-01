var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var bodyParser = require("body-parser");

var sqlConfig = require('./config')
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

sql.connect(sqlConfig);

// Roles
var GetRoles = require('./Routes/Roles');
var InsertRole = require('./Routes/Roles');
var DeleteRole = require('./Routes/Roles');
var GetRole = require('./Routes/Roles');
var UpdateRole = require('./Routes/Roles');

//Devices
var GetDevices = require('./Routes/Device');
var InsertDevice = require('./Routes/Device');
var GetDevice = require('./Routes/Device');
var DeleteDevice = require('./Routes/Device');
var UpdateDevice = require('./Routes/Device');

//Priority
var GetPriorities = require('./Routes/Priority');
var InsertPriority = require('./Routes/Priority');
var GetPriority = require('./Routes/Priority');
var DeletePriority = require('./Routes/Priority');
var UpdatePriority = require('./Routes/Priority');

//Action
var GetActions = require('./Routes/Action');
var InsertAction = require('./Routes/Action');
var GetAction = require('./Routes/Action');
var DeleteAction = require('./Routes/Action');
var UpdateAction = require('./Routes/Action');

//Defect
var GetDefects = require('./Routes/Defect');
var InsertDefect = require('./Routes/Defect');
var GetDefect = require('./Routes/Defect');
var DeleteDefect = require('./Routes/Defect');
var UpdateDefect = require('./Routes/Defect');

//Condition
var GetConditions = require('./Routes/Condition');
var GetCondition = require('./Routes/Condition');
var InsertCondition = require('./Routes/Condition');
var DeleteCondition = require('./Routes/Condition');
var UpdateCondition = require('./Routes/Condition');

//User
var GetUsers = require('./Routes/Users');
var GetUser = require('./Routes/Users');
var InsertUser = require('./Routes/Users');


//ScheduleOfRates
var InsertSOR = require('./Routes/ScheduleOfRates');
var GetSORS = require('./Routes/ScheduleOfRates');
var GetSORSApp = require('./Routes/ScheduleOfRates');
var GetSOR = require('./Routes/ScheduleOfRates');
var DeleteSOR = require('./Routes/ScheduleOfRates');
var UpdateSOR = require('./Routes/ScheduleOfRates');

//UnitsOfMeasurement
var InsertUnitsOfMeasurement = require('./Routes/UnitsOfMeasurement');
var GetUnitsOfMeasurements = require('./Routes/UnitsOfMeasurement');
var GetUnitsOfMeasurement = require('./Routes/UnitsOfMeasurement');
var DeleteUnitsOfMeasurement = require('./Routes/UnitsOfMeasurement');
var UpdateUnitsOfMeasurement = require('./Routes/UnitsOfMeasurement');
var GetUnitsOfMeasurementsApp = require('./Routes/UnitsOfMeasurement');

//Site
var GetSites = require('./Routes/Site');
var InsertSite = require('./Routes/Site');
var GetSite = require('./Routes/Site');
var DeleteSite = require('./Routes/Site');
var UpdateSite = require('./Routes/Site');

//Buildings
var GetBuildings = require('./Routes/Building');
var InsertBuilding = require('./Routes/Building');
var GetBuilding = require('./Routes/Building');
var DeleteBuilding = require('./Routes/Building');
var UpdateBuilding = require('./Routes/Building');


//Elements

var GetMajorElements = require('./Routes/Elements');
var GetSuperElements = require('./Routes/Elements');
var GetSubElements = require('./Routes/Elements');

//PropertyAndSurvey

var GetPropertyAndSurveySites = require('./Routes/PropertyAndSurvey');
var GetPropertyAndSurveyBuildings = require('./Routes/PropertyAndSurvey');

//ConditionSurvey

var SurveyLandingPage = require('./Routes/ConditionSurvey');
var SurveyLandingPageBuildingDetails = require('./Routes/ConditionSurvey');
var SurveyLandingPageBuilding = require('./Routes/ConditionSurvey');

//SurveyJsonFiles

var GetFiles = require('./Routes/SurveyJsonFiles');


//SurveyType

var GetSurveyTypesList = require('./Routes/SurveyType');



//ScheduleOfHistoricData

var GetScheduledSites = require('./Routes/ScheduleOfHistoricData');
var GetScheduledYearsOfASite = require('./Routes/ScheduleOfHistoricData');
var GetScheduledBuildingsOfASite = require('./Routes/ScheduleOfHistoricData');
var GetScheduledBuildingInformationOfASite = require('./Routes/ScheduleOfHistoricData');
var GetScheduledElementsForABuilding = require('./Routes/ScheduleOfHistoricData');
var GetEstimatedCostOfAnElement = require('./Routes/ScheduleOfHistoricData');

// Start server and listen on http://localhost:8081/
var server = app.listen(3333, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});




//Roles
app.use('/Roles', GetRoles);
app.use('/Roles', InsertRole);
app.use('/Roles', DeleteRole);
app.use('/Roles', GetRole);
app.use('/Roles', UpdateRole);

//Devices
app.use('/Device', GetDevices);
app.use('/Device', InsertDevice);
app.use('/Device', GetDevice);
app.use('/Device', DeleteDevice);
app.use('/Device', UpdateDevice);

//Priority
app.use('/Priority', GetPriorities);
app.use('/Priority', InsertPriority);
app.use('/Priority', GetPriority);
app.use('/Priority', DeletePriority);
app.use('/Priority', UpdatePriority);


//Action
app.use('/Action', GetActions);
app.use('/Action', InsertAction);
app.use('/Action', GetAction);
app.use('/Action', DeleteAction);
app.use('/Action', UpdateAction);

//Site
app.use('/Site', GetSites);
app.use('/Site', InsertSite);
app.use('/Site', GetSite);
app.use('/Site', DeleteSite);
app.use('/Site', UpdateSite);

//Building
app.use('/Site', GetBuildings);
app.use('/Site', InsertBuilding);
app.use('/Site', GetBuilding);
app.use('/Site', DeleteBuilding);
app.use('/Site', UpdateBuilding);

//Defect
app.use('/Defect', GetDefects);
app.use('/Defect', InsertDefect);
app.use('/Defect', GetDefect);
app.use('/Defect', DeleteDefect);
app.use('/Defect', UpdateDefect);


//Condition
app.use('/Condition', GetConditions);
app.use('/Condition', GetCondition);
app.use('/Condition', InsertCondition);
app.use('/Condition', DeleteCondition);
app.use('/Condition', UpdateCondition);


//User
app.use('/Users', GetUsers);
app.use('/Users', GetUser);
app.use('/Users', InsertUser);


//ScheduleOfRates
app.use('/ScheduleOfRates', InsertSOR);
app.use('/ScheduleOfRates', GetSORS);
app.use('/ScheduleOfRates', GetSORSApp);
app.use('/ScheduleOfRates', GetSOR);
app.use('/ScheduleOfRates', DeleteSOR);
app.use('/ScheduleOfRates', UpdateSOR);


//UnitsOfMeasurement
app.use('/UnitsOfMeasurement', InsertUnitsOfMeasurement);
app.use('/UnitsOfMeasurement', GetUnitsOfMeasurements);
app.use('/UnitsOfMeasurement', GetUnitsOfMeasurement);
app.use('/UnitsOfMeasurement', DeleteUnitsOfMeasurement);
app.use('/UnitsOfMeasurement', UpdateUnitsOfMeasurement);
app.use('/UnitsOfMeasurement', GetUnitsOfMeasurementsApp);

//Elements
app.use('/Elements', GetMajorElements);
app.use('/Elements', GetSuperElements);
app.use('/Elements', GetSubElements);

//PropertyAndSurvey
app.use('/PropertyAndSurvey', GetPropertyAndSurveySites);
app.use('/PropertyAndSurvey', GetPropertyAndSurveyBuildings);


//ConditionSurvey

app.use('/ConditionSurvey', SurveyLandingPage);
app.use('/ConditionSurvey', SurveyLandingPageBuildingDetails);
app.use('/ConditionSurvey', SurveyLandingPageBuilding);


//SurveyJsonFiles

app.use('/SurveyJsonFiles', GetFiles);


//ScheduleOfHistoricData
app.use('/ScheduleOfHistoricData', GetScheduledSites);
app.use('/ScheduleOfHistoricData', GetScheduledYearsOfASite);
app.use('/ScheduleOfHistoricData', GetScheduledBuildingsOfASite);
app.use('/ScheduleOfHistoricData', GetScheduledBuildingInformationOfASite);
app.use('/ScheduleOfHistoricData', GetScheduledElementsForABuilding);
app.use('/ScheduleOfHistoricData', GetEstimatedCostOfAnElement);


//SurveyType

app.use('/SurveyType', GetSurveyTypesList)

module.exports = app;


