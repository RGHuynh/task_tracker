const fs = require('node:fs/promises');
const { SAVE_FILE_NAME } = require('./constants.js');

async function getExistingFiles() {
    try {
        const existingFile = await fs.readFile(SAVE_FILE_NAME, { encoding: 'utf8' });
        return existingFile
    } catch (error) {
        return null
    }
}

module.exports = { getExistingFiles }