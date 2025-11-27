// enum
enum logLevel {
  info,
  warn,
  error,
}
//
function logMessage(Level: logLevel, message: string) {
  console.log(`[${logLevel[Level]}] - ${message}`);
}

logMessage(
  logLevel.info,
  "Este es un mensaje de informacion posicionado en 0 el siguiente sera 1"
);
