const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title )
    //takes time as iterates through entire array even on getting a duplicate 
    const duplicateNote = notes.find((note) => note.title === title)
    
    debugger
    
    if (!duplicateNote) {
    //! flips true to false and vice-versa (logical not)
    //other alternative:(duplicateNote === undefined) since find would return that if no match was found 
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const toKeep = notes.filter( (note) => note.title !== title )

    const toRemove = notes.filter( (note) => note.title === title )
    if (toRemove.length !== 0){
        console.log(chalk.bgGreen('Note removed'))
    }
    else{
        console.log(chalk.bgRed('Note not found'))
    }
    // alternative : notes.length > toKeep.length
    saveNotes(toKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellowBright.inverse('Your Notes'))
    notes.forEach( (note) => {
        console.log(note.title)
    }); 
}
const readNote = (title) => {
    const notes = loadNotes()
    const toFind = notes.find((note) => note.title === title)
    if (toFind === undefined ){
        console.log(chalk.bgRed('Note not found!'))
    } else{
        console.log(chalk.cyanBright.inverse(toFind.title))
        console.log(toFind.body)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// const fs = require('fs')

// const getNotes = function () {
//     return 'Your notes...'
// }

// const addNote = function (title, body) {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title
//     })

//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log('New note added!')
//     } else {
//         console.log('Note title taken!')
//     }
// }

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function () {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
// }

// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote
// }













// const fs = require('fs');
// const chalk = require('chalk');

// const listNotes = () => {
//   const notes = loadNotes();

//   console.log(chalk.bgBlue(`Here are your notes:`));

//   const list = notes.map(note => {
//     console.log(chalk.blue(`${note.title}`));
//   });
//   return list;
// };

// const addNote = (title, body) => {
//   const notes = loadNotes();

//   const duplicateNote = notes.find(note => note.title === title);

//   if (!duplicateNote) {
//     notes.push({
//       title: title,
//       body: body
//     });

//     saveNotes(notes);
//     console.log(chalk.bgGreen('New note added!'));
//   } else {
//     console.log(chalk.bgRed('Note title taken'));
//   }
// };

// const readNote = title => {
//   const notes = loadNotes();

//   const note = notes.find(note => note.title === title);

//   if (note) {
//     console.log(chalk.bgBlue(`${note.title}`));
//     console.log(`${note.body}`);
//   } else {
//     console.log(chalk.red('No note found!'));
//   }
// };

// const removeNote = title => {
//   const notes = loadNotes();

//   const notesToKeep = notes.filter(note => note.title !== title);

//   if (notes.length > notesToKeep.length) {
//     console.log(chalk.bgGreen('Note removed!'));
//   } else {
//     console.log(chalk.bgRed('No note found!'));
//   }

//   saveNotes(notesToKeep);
// };

// const saveNotes = notes => {
//   const dataJSON = JSON.stringify(notes);
//   fs.writeFileSync('notes.json', dataJSON);
// };

// const loadNotes = () => {
//   try {
//     const dataBuffer = fs.readFileSync('notes.json');
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (e) {
//     return [];
//   }
// };

// module.exports = { addNote, removeNote, listNotes, readNote };