document.addEventListener('DOMContentLoaded', () => {
    console.log("hello");
    document.querySelector('#task-form')
        .addEventListener('submit', handleTaskSubmitButtonClicked);

    document.querySelector('#remove-all-tasks')
        .addEventListener('click', removeAllTasks);

});

const removeAllTasks = () => document.querySelector('#task-list').innerHTML='';


const handleTaskSubmitButtonClicked = function(event) { event.preventDefault()

    const name = document.createElement('p')
    const description = document.createElement('p');
    const duration = document.createElement('p');


    const newList = document.createElement('newList');
    appendChildren(newList,
                 [name,
                  description,
                  duration])

    name.textContent        = `Name: ${this.name.value}`;
    description.textContent = `Description: ${this.description.value}`;
    duration.textContent    = `Duration: ${this.duration.value}`;
    document.querySelector('#task-list').appendChild(newList);
    newList.classList.add("task-form");
}




/** Append multiple items onto a node , first argument should be the node to append to,
 * the second should be a [list of all the items to append]*/
const appendChildren = function(appendTo, listOfItems) {
    listOfItems.forEach(item => appendTo.appendChild(item))
}