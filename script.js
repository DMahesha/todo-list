/*
To be added: 

button to change:
- name
- notes
- due date
- priority

button to order todos by:
- name
- due date (asc and desc)
- priority
- progress
*/
const container = document.getElementById('container')
const dialog = document.getElementById('dialog')
const closeDiaglog = document.getElementById('close-dialog')
const addToDo = document.getElementById('add-todo')

let todos = []

const newToDo = document.createElement('button')
newToDo.textContent = 'New Todo'
container.appendChild(newToDo)

newToDo.addEventListener('click', () => {
    dialog.showModal()
})

closeDiaglog.addEventListener('click', () => {
    dialog.close()
})

function todo (name, notes, dueDate, priority, progress) {
    this.tdName = name,
    this.tdNotes = notes,
    this.tdDueDate = dueDate,
    this.tdPriority = priority,
    this.tdProgress = progress
}

//Initial input from the user
addToDo.addEventListener('click', () => {
    let bName = document.getElementById('todo-name').value
    let bNotes = document.getElementById('todo-notes').value
    let bDueDate = document.getElementById('todo-duedate').value
    let sPriority = document.getElementById('todo-priority')
    let bPriority = sPriority.options[sPriority.selectedIndex].text
    let bProgress = 0
    let enteredToDo = new todo(bName, bNotes, bDueDate, bPriority, bProgress)
    todos.push(enteredToDo)
    renderToDo()
    dialog.close()
})

//Sets todos to be rendered
function renderToDo() {
    resetToDo()
    for (var i = 0 ; i < todos.length ; i++) {
        adddToDo(todos[i].tdName, todos[i].tdNotes, todos[i].tdDueDate, todos[i].tdPriority, todos[i].tdProgress)
    }
}

//Removes HTML
function resetToDo() {
    let x = document.querySelectorAll('.todo-entry')
    x.forEach(item => {
        container.removeChild(item)
    })
}

//Generates the HTML for each todo
function adddToDo(name, notes, dueDate, priority, progress) {
    //Generates todo div
    let latestToDoDiv = document.createElement('div')
    latestToDoDiv.setAttribute('class', 'todo-entry')
    latestToDoDiv.style.cssText = 'border: solid 1px black; width: fit-content; padding: 3px;'
       
    //Generates todo name
    let latestName = document.createElement('div')
    latestName.style.cssText = 'padding: 2px'
    latestName.textContent = `Name: ${name}`

    //Button to show the change name dialog
    let changeName = document.createElement('button')
    changeName.textContent = 'Change Name'
    changeName.style.cssText = 'padding: 2px'
    changeName.addEventListener('click', () => {
        const testDiv = document.createElement('div')
        latestToDoDiv.appendChild(testDiv)
        const testInput = document.createElement('input')
        testDiv.appendChild(testInput)
        const testChange = document.createElement('button')
        testChange.textContent = 'Change'
        testDiv.appendChild(testChange)

        testChange.addEventListener('click', () => {
            let index = todos.map(e => e.tdName).indexOf(`${name}`)
            todos[index].tdName = testInput.value
            renderToDo()
        })
    })

    //Generates todo notes
    let latestNotes = document.createElement('div')
    latestNotes.style.cssText = 'padding: 2px'
    latestNotes.textContent = `Notes: ${notes}`
    //change notes
        
    //Generates todo due date
    let latestDueDate = document.createElement('div')
    latestDueDate.style.cssText = 'padding: 2px'
    latestDueDate.textContent = `Due Date: ${dueDate}` 
    //change due date
        
    //Generates todo priority
    let latestPriority = document.createElement('div')
    latestPriority.style.cssText = 'padding: 2px'
    latestPriority.textContent = `Priority: ${priority}`
    //change priority

    //Generates todo progress
    let latestProgress = document.createElement('div')
    latestProgress.style.cssText = 'padding: 2px'
    if (progress == 0) {
        latestProgress.textContent = 'Status: Not Started'
    } else if (progerss = 1) {
        latestProgress.textContent = 'Status: In Progress'
    } else if (progress = 2) {
        latestProgress.textContent = 'Status: Completed'
    }

    //Generates button to change todo progress
    let changeProgress = document.createElement('button')
    changeProgress.textContent = "Change Status"
    changeProgress.style.cssText = 'padding: 2px'
    changeProgress.addEventListener('click', () => {
        if (progress === 0) {
            progress = 1
            latestProgress.textContent = 'Status: In Progress'
        } else if (progress == 1) {
            progress = 2
            latestProgress.textContent = 'Status: Completed'
        } else if (progress == 2) {
            progress = 0
            latestProgress.textContent = 'Status: Not Started'
        }
    })

    //Generates button to remove todos
    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.style.cssText = 'padding: 2px'
    removeButton.addEventListener('click', () => {
        let index = todos.map(e => e.tdName).indexOf(`${name}`)
        todos.splice(index, 1)
        renderToDo()
    })

    

    //Adds the HTML to the container
    container.appendChild(latestToDoDiv)

    latestToDoDiv.appendChild(latestName)
    latestToDoDiv.appendChild(latestNotes)
    latestToDoDiv.appendChild(latestDueDate)
    latestToDoDiv.appendChild(latestPriority)
    latestToDoDiv.appendChild(latestProgress)

    latestToDoDiv.appendChild(changeName)
    latestToDoDiv.appendChild(changeProgress)
    
    latestToDoDiv.appendChild(removeButton)
}
