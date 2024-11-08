const { argv } = require('node:process');
const { add } = require("./add.js");
const { update } = require("./update.js");
const { deleteData } = require("./delete.js");
const {markInProgress} = require("./markInProgress.js");

const MAIN_COMMAND_POSITION = 2

async function main() {
  const command = getCommand()

  const commandFunction = getFunctionFromCommand(command)

  await commandFunction()
}

function getCommand() {
  return argv[MAIN_COMMAND_POSITION]
}

function getFunctionFromCommand(command) {
  switch (command) {
    case 'add':
      return add
    case 'update':
      return update
    case 'delete':
      return deleteData
    case 'mark-in-progress':
      return markInProgress
    default:
      throw new Error('Invalid command')
  }
}

main()

