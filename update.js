const { argv } = require('node:process');
const fs = require('node:fs/promises');
const { getExistingFiles } = require('./helper.js');
const { SAVE_FILE_NAME } = require('./constants.js');

const INDEX_POSTION = 3;
const INCOMING_DATA = 4;

async function update() {
    const index = getArgumentIndex();
    const existingFile = await getExistingFiles()

    if (!existingFile) {
        throw new Error("No File exist")
    }

    const JSONData = JSON.parse(existingFile);
    const doesNotExist = !(index in JSONData)

    if (doesNotExist) {
        throw new Error("index doesn't exist");
    }

    JSONData[index] = argv[INCOMING_DATA]
    await fs.writeFile(SAVE_FILE_NAME, JSON.stringify(JSONData), 'utf8')
}

function getArgumentIndex() {
    const index = argv[INDEX_POSTION];
    return index;
}

module.exports = { update }