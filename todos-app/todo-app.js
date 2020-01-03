

const todos = [{
    text: 'order Cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
   text: 'Do work',
   completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const filters = {
    searchText : '',
    hideCompleted : false
}

const renderTodos = function(todos, filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo){
        if(filters.hideCompleted){
            return !todo.completed
        }else{
            return true
        }
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
document.querySelector('#chkboxId').addEventListener('change', function(e){
   filters.hideCompleted = e.target.checked
   renderTodos(todos, filters)
})