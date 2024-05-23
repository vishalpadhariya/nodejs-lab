const os = require("node:os");

/* Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.*/
console.log(os.cpus());

/* Returns the amount of free system memory in bytes as an integer. */
console.log(os.freemem());

/* Returns the string path of the current user's home directory. */
console.log(os.homedir());

/* Returns the host name of the operating system as a string. */
console.log(os.hostname());

/* Returns an object containing network interfaces that have been assigned a network address. */
console.log(os.networkInterfaces());
