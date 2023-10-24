const container = document.getElementById('container')
const dialog = document.getElementById('dialog')
const closeDiaglog = document.getElementById('close-dialog')
const addToDo = document.getElementById('add-todo')

todos = []

const newToDo = document.createElement('button')
newToDo.textContent = 'New ToDo'
container.appendChild(newToDo)

newToDo.addEventListener('click', () => {
    dialog.showModal()
})

closeDiaglog.addEventListener('click', () => {
    dialog.close()
})

class todo {
    constructor (name, notes, dueDate, priority, progress){
        this.name = name,
        this.notes = notes,
        this.dueDate = dueDate,
        this.priority = priority,
        this.progress = progress
    }
}

addToDo.addEventListener('click', () => {
    let bName = document.getElementById('todo-name').value
    let bNotes = document.getElementById('todo-notes').value
    let bDueDate = document.getElementById('todo-duedate').value
    let sPriority = document.getElementById('todo-priority')
    let bPriority = sPriority.options[sPriority.selectedIndex].text
    let enteredToDo = new todo(bName, bNotes, bDueDate, bPriority)
    todos.push(enteredToDo)
    renderToDo()
    dialog.close()
})

function renderToDo() {
    resetToDo()
    for (var i = 0 ; i < todos.length ; i++) {
        adddToDo(todos[i].name, todos[i].notes, todos[i].dueDate, todos[i].priority)
    }
}

function resetToDo() {
    let x = document.querySelectorAll('.todo-entry')
    x.forEach(item => {
        container.removeChild(item)
    })
}

function adddToDo(name, notes, dueDate, priority) {
    let latestToDoDiv = document.createElement('div')
    latestToDoDiv.setAttribute('class', 'book-entry')
    latestToDoDiv.style.cssText = 'border: solid 1px black; width: fit-content; padding: 3px;'
    container.appendChild(latestToDoDiv)
        
    let latestName = document.createElement('div')
    latestName.style.cssText = 'padding: 2px'
    latestName.textContent = `Name: ${name}`
        
    let latestNotes = document.createElement('div')
    latestNotes.style.cssText = 'padding: 2px'
    latestNotes.textContent = `Notes: ${notes}`
        
    let latestDueDate = document.createElement('div')
    latestDueDate.style.cssText = 'padding: 2px'
    latestDueDate.textContent = `Due Date: ${dueDate}` 
        
    let latestPriority = document.createElement('div')
    latestPriority.style.cssText = 'padding: 2px'
    latestPriority.textContent = `Priority: ${priority}`

    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.style.cssText = 'padding: 2px'

    removeButton.addEventListener('click', () => {
        let index = todos.map(e => e.name).indexOf(`${name}`)
        todos.splice(index, 1)
        renderToDo()
    })

    latestToDoDiv.appendChild(latestName)
    latestToDoDiv.appendChild(latestNotes)
    latestToDoDiv.appendChild(latestDueDate)
    latestToDoDiv.appendChild(latestPriority)
    latestToDoDiv.appendChild(removeButton)
}

/*
like library

---
todo name
due date 
priority (low, medium, high) (drop down for priority)
progress (checkbox)

delete

sort todos based on due date
color todos based on priority
















*/