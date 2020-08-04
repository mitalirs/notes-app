const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');
//const { listNotes } = require('./notes.js');


yargs.version('1.1.0').argv;
//yargs.argv();

//const yargs = require('yargs');

// const argv = yargs
//     .command({
//         command: 'add',
//         describe: 'Adding command',
//         handler: argv => {
//             console.log('Adding notes');
//         }
//     })
//     .argv;


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
       notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)









// const validator = require('validator')
// console.log(validator.isURL('https/mead.io'))


// const add = require('./utils.js')
// const sum = add(2,4)
// console.log(sum)


// const disp = getNotes()
// console.log(disp)
// console.log(chalk.bold.green.bgBlack('Success!'))


// if(process.argv[2] === 'add'){
//     console.log('Adding Note')
// }else if(process.argv[2] === 'remove'){
//     console.log('Removing Note!')
// }


