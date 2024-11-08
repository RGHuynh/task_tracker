const { argv } = require('node:process');
const { getExistingFiles } = require('./helper.js');
const { SAVE_FILE_NAME } = require('./constants.js');
const fs = require('node:fs/promises');

const INDEX_POSTION = 3;

async function deleteData() {
    const index = argv[INDEX_POSTION];

    const existingFile = await getExistingFiles();

    const JSONData = JSON.parse(existingFile);

    const doesNotExist = !(index in JSONData)

    if (doesNotExist) {
        throw new Error("index doesn't exist");
    }

    delete JSONData[index];

    await fs.writeFile(SAVE_FILE_NAME, JSON.stringify(JSONData), 'utf8')

}

module.exports = { deleteData }

