"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
var logLevel;
(function (logLevel) {
    logLevel[logLevel["info"] = 0] = "info";
    logLevel[logLevel["warn"] = 1] = "warn";
    logLevel[logLevel["error"] = 2] = "error";
})(logLevel || (logLevel = {}));
//
function logMessage(Level, message) {
    console.log(`[${logLevel[Level]}] - ${message}`);
}
logMessage(logLevel.info, "Este es un mensaje de informacion posicionado en 0 el siguiente sera 1");
//# sourceMappingURL=enums.js.map