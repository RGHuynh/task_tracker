const fs = require('node:fs/promises');
const { argv } = require('node:process');
const { DONE, SAVE_FILE_NAME } = require('./constants.js');
const { getExistingFiles } = require('./helper.js');
const STATUS_POSTITION = 3;

async function list() {
    const existingFile = await getExistingFiles();

    if (!existingFile) {
        throw new Error('file not found')
    }

    const statusPosition = argv[STATUS_POSTITION];

    if (!statusPosition) {
        throw new Error('Missing status postion.');
    }
    const JSONData = JSON.parse(existingFile);

    switch (statusPosition) {
        case 'done':

            return getList(JSONData, 'done')
        case 'todo':

            return getList(JSONData, 'todo')
        case 'in-progress':

            return getList(JSONData, 'in-progres')

        default:
            throw new Error('status does not exist')
    }
}

function getList(JSONData, status) {
    for (const [key, value] of Object.entries(JSONData)) {

        if (value.status === status) {
            console.log(`[${key}]: ${value.data} - ${value.status}`)
        }
    }
}

module.exports = { list }