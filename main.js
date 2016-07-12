/*
 * Created by G on 11/07/2016.
 */


var mappingId = require("./mappingId.js");

var config1 = {"datasetId": "SylTjSY_M", "parent_type": "LAD15CD", "child_type": "LSOA11CD", "dataId": "E09000001"};

mappingId.p2cId(config1, function (array) {
	console.log('The child_id array is: ' + array);
});

////////////////////////////////////////////////////////////

var config2 = {"datasetId": "SylTjSY_M", "parent_type": "LAD15CD", "child_type": "LSOA11CD", "dataId": "E01000006"};

mappingId.c2pId(config2, function (string) {
	console.log('The parent_id is: ' + string);
});
