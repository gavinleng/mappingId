/*
 * Created by G on 11/07/2016.
 */


"use strict";

var request = require("request");

module.exports = exports = {
	_getData: function (config, cb) {
		var url = 'https://q.nqminds.com/v1/datasets/' + config.datasetId + '/distinct?key=' + config.vId + '&filter={"' + config.fId + '":"' + config.dataId + '"}';

		request(url, { json: true }, function(err, resp, body) {
			if (err || (resp && resp.statusCode !== 200)) {
				var msg = err ? err.message : body && body.message;
				console.log("failure running the input data query: " + msg);
				process.exit(-1);
			} else {
				var data = body.data;

				cb(data);
			}
		});

	},
	
	p2cId: function(config, cb) {
		config.fId = "parent_id";
		config.vId = "child_id";

		this._getData(config, function (data) {
			cb(data);
		});
	},

	c2pId: function(config, cb) {
		config.fId = "child_id";
		config.vId = "parent_id";

		this._getData(config, function (data) {
			cb(data[0]);
		});
	}
};
