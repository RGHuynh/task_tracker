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
    
    const JSONData = JSON.parse(existingFile);

    if (!statusPosition) {
        getList(JSONData)
        return 
    }

    switch (statusPosition) {
        case 'done':

            return getListWithStatus(JSONData, 'done')
        case 'todo':

            return getListWithStatus(JSONData, 'todo')
        case 'in-progress':

            return getListWithStatus(JSONData, 'in-progress')

        default:
            throw new Error('status does not exist')
    }
}

function getListWithStatus(JSONData, status) {
    for (const [key, value] of Object.entries(JSONData)) {

        if (value.status === status) {
            console.log(`[${key}]: ${value.description} - ${value.status}`)
        }
    }
}

function getList(JSONData){
    for (const [key, value] of Object.entries(JSONData)) {
        console.log(`[${key}]: ${value.description} - ${value.status}`)
    }
}

module.exports = { list }