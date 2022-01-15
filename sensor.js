"use strict";
exports.__esModule = true;
exports.readProbe = void 0;
var node_dht_sensor_1 = require("node-dht-sensor");
var readProbe = function () {
    var probeData = { type: "probedata", temp: 0, hum: 0 };
    node_dht_sensor_1["default"].read(11, 17, function (err, temperature, humidity) {
        if (!err) {
            probeData.temp = temperature;
            probeData.hum = humidity;
        }
        else {
            console.log(err);
        }
    });
    return probeData;
};
exports.readProbe = readProbe;
setInterval(function () { console.log(exports.readProbe()); }, 5000);
