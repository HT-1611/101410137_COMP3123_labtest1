// removeLogs.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        // Read and delete each file in Logs directory
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath);
        });
        // Remove the Logs directory
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Example usage
removeLogs();
