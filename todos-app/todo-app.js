

const todos = [{
    text: 'order Cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    Completed: true
}, {
    text: 'Buy food',
    Completed: 'false'
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const filters = {
    searchText : ''
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#inner').innerHTML = ''
    
    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#inner').appendChild(summary)

    filteredTodos.forEach(function (todo){
        const noteEL = document.createElement('p')
        noteEL.textContent = todo.text
        document.querySelector('#inner').appendChild(noteEL)
    })
}
renderTodos(todos, filters)

document.querySelector('#todo-list').addEventListener('input', function (e){
    
    filters.searchText = e.target.value
    renderTodos(todos, filters)

 })

 document.querySelector('#formId').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({text:e.target.elements.inputName.value , completed: false})
    renderTodos(todos, filters)
    e.target.elements.inputName.value = ''
})
/*
document.querySelector('#todo-list').addEventListener('input', function(e){
    
})

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})
const summary = document.createElement('h1')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.body.appendChild(p)
})

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function (paragraph) {
   if (paragraph.textContent.includes('the'))
    paragraph.remove()
})*/

document.querySelector('#btn').addEventListener('click', function (e){
    console.log('Did this work?')

})
