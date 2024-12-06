const os = require('os');

// Get the platform
console.log("Operating System Platform: " + os.platform());

// Get system architecture
console.log("System Architecture: " + os.arch());

// Get the free memory in bytes
console.log("Free Memory: " + os.freemem() + " bytes");

// Get total memory
console.log("Total Memory: " + os.totalmem() + " bytes");

// Get home directory
console.log("Home Directory: " + os.homedir());

// Get the system uptime in seconds
console.log("System Uptime: " + os.uptime() + " seconds");
