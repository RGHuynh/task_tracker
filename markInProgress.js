const fs = require('node:fs/promises');
const { argv } = require('node:process');
const { IN_PROGRESS, SAVE_FILE_NAME } = require('./constants.js');
const { getExistingFiles } = require('./helper.js');
const INDEX_POSTION = 3;

async function markInProgress() {
    const existingFile = await getExistingFiles();

    if (!existingFile) {
        throw new Error('file not found')
    }

    const JSONData = JSON.parse(existingFile);

    const index = argv[INDEX_POSTION];

    const doesNotExist = !(index in JSONData);

    if (doesNotExist) {
        throw new Error("index does not exist");
    }

    JSONData[index].status = IN_PROGRESS

    await fs.writeFile(SAVE_FILE_NAME, JSON.stringify(JSONData), 'utf-8');
}

module.exports = { markInProgress }
