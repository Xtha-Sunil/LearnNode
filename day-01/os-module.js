const { log } = require("console");
const os = require("os");

log(os);
log(os.userInfo());
log(os.platform());
log(os.type());
log(os.hostname());
log(os.homedir());
log(os.release());

log(os.uptime());
log(os.networkInterfaces());
log(os.getPriority());

log(os.freemem());
log(os.totalmem());
