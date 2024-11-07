const fs = require('node:fs/promises');
const { argv } = require('node:process');

const INCOMING_DATA = 3;
const SAVE_FILE_NAME = 'list.json';

async function add() {
  const incomingData = argv[INCOMING_DATA];
  const existingFile = await getExistingFiles()
 
  let currentId = 1
  let addData = {}

  if (existingFile) {
    const jsonData = JSON.parse(existingFile)

    currentId = getAvailableId(jsonData)

    addData = {
      ...jsonData,
      [currentId]: incomingData
    }
  } else {
    addData = {
      [currentId]: incomingData
    }
  }

  const data = JSON.stringify(addData)
  await fs.writeFile(SAVE_FILE_NAME, data, 'utf8');
}

async function getExistingFiles() {
  try {
    const existingFile = await fs.readFile(SAVE_FILE_NAME, { encoding: 'utf8' });
    return existingFile
  } catch (error) {
    return null
  }

}

function getAvailableId(jsonData) {

  const ids = Object.keys(jsonData)
  let count = 1;

  const sortedIds = ids.sort((a, b) => a - b)

  for (let i = 0; i < sortedIds.length; i++) {
    if (sortedIds[i] != count) {
      break
    }
    count++
  }

  return count
}

module.exports = { add }