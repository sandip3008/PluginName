var exec = require('cordova/exec');

exports.new_activity = function (arg0, success, error) {
    exec(success, error, 'PluginName', 'new_activity', [arg0]);
};
