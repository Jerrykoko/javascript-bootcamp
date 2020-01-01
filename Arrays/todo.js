/*
const toDos = ['order cat food', 'clean the kitchen', 'buy food', 'do work', 'Exercise']
//delete the 3rd item
toDos.splice(2, 1)
console.log(toDos)
//add a new item unto the end
toDos.push('have great sex')*/
//console.log(toDos)
//Remove the first item from the list
/*toDos.shift()
console.log(toDos)
console.log(`You have ${toDos.length} toDos`)
console.log(toDos)*/
/*console.log(`you have ${toDos.length} toD0s!`)
toDos.forEach(function(item, index){
const num = index + 1
console.log(`${num}. ${item}`)
})*/

/*for (count = 0; count <= toDos.length; count++){

    console.log(`${count + 1}. ${toDos[count]}`)

}*/

const notes = [{
    title: 'New found Hobbies', 
    body: 'Read a book every day'

}, {
    title: 'Next travel Ambition', 
    body: 'I could trel to spain'

}, {
    title: 'Captivating moments',
    body: 'love and laugther'

}, {
    title: 'fun things to do',
    body:   'Take a walk at the park'

}]
/*const index = notes.findIndex(function(notes, index){
    return notes.title === 'Captivating moments'
})
console.log(index)*/


/*const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
})
    return note[index]
}
const note = findNote(notes, 'Captivating moments')
console.log(note)*/


//using the find function

/*const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
})
    
}
const note = findNote(notes, 'Captivating moments')
console.log(note)*/

const todo = [{
    text: 'order cat food',
    completed: false
}, {text: 'Go to the grocery store',
    completed: true

}, {text: 'Cook a meal',
completed: false
}, {text: 'Sleep',
completed: true

}, {text: 'Read a book',
completed: false

}]

/*const deleteTodo = function(todo, todoText){
   const index = todo.findIndex(function (test){
        return test.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index >-1) {
        todo.splice(index, 1)
    }
}

deleteTodo(todo, 'sleep')
console.log(todo)*/

/*const getThingsDone = function (todo){
    return todo.filter(function(note){
        return note.completed === false
    })
}
console.log(getThingsDone(todo))*/

//Another version of the same code

/*const getThingsDone = function (todo){
    return todo.filter(function(note){
        return !note.completed
    })
}
console.log(getThingsDone(todo))*/
//this was my solution which for some reasons produced a accurate result
/*const sortTodo= function(todo){
    todo.sort(function(a, b){
        if(a.completed < b.completed){
            return -1
        }else if(b.completed < a.completed){
            return 1
        }else{
            return 0
        }
    })

}*/

//this was andrew solution which also produce the same result as mine

const sortTodo = function(todo){
    todo.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}
    sortTodo(todo)
    console.log(todo)