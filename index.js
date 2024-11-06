const fs = require('fs');
const { argv } = require('node:process');


const MAIN_COMMAND_POSITION = 2

function main() {
  const command = getCommand()
  // get function from command
  const commandFunction = getFunctionFromCommand(command)

  commandFunction()
  // if function doesn't exist, throw an error
  //
  // run function
}

function getCommand() {
  return argv[MAIN_COMMAND_POSITION]
}

function getFunctionFromCommand(command) {
  switch (command) {
    case 'add':
      return add
    // case 'update':
    //   return update
    // case 'delete':
    //   return delete
    default:
      throw new Error('Invalid command')
  }
}

function add() {
  console.log('add')
}

main()





// const json = JSON.stringify({test: 1, flsjfl: 3})
// fs.writeFile('new.json', json, 'utf8', ()=>{});




// const funcationality = {
//   "add": () => {},
//   "update":  () => {},
//   "delete": () => {},
// }

// function add() {
//   
// }

