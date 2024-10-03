// addLogs.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function createLogs() {
    // Create Logs directory if it doesn't exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    // Change current process to the Logs directory
    process.chdir(logsDir);

    // Create 10 log files
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`Created file: ${fileName}`);
    }
}

// Example usage
createLogs();
