
/*
//const p = document.querySelector('p')
//p.remove()

const ps = document.querySelectorAll('p')
ps.forEach( function (p) {
    //p.remove()
    //console.log(p.textContent)
    p.textContent = '*******'
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a Javascript text'
document.querySelector('body').appendChild(newParagraph)
*/


const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNote = function (notes, filters){
    const filteredNote = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#inner').innerHTML = ''
    filteredNote.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#inner').appendChild(noteEl)
    })
}
renderNote(notes, filters)


document.querySelector('#createNote').addEventListener('click', function(e){
    e.target.textContent = 'A button was clicked'
})

document.querySelector('#search-text').addEventListener('input' , function(e){
    filters.searchText = e.target.value
    renderNote(notes, filters)
})

document.querySelector('#formId').addEventListener('submit' ,function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})