document.addEventListener('DOMContentLoaded', () => {
    console.log("hello");
    document.querySelector('#task-form')
        .addEventListener('submit', handleTaskSubmitButtonClicked);
    });

const handleTaskSubmitButtonClicked = function(event) { event.preventDefault()

    const name = document.createElement('p')
    const description = document.createElement('p');
    const duration = document.createElement('p');

    const newList = document.createElement('newList')
    // appendChildren()

    name.textContent        = this.name.value;
    description.textContent = this.description.value;
    duration.textContent    = this.duration.value;
    document.querySelector('#task-list').appendChild(newList)
}

const appendChildren = function(node, listOfItems) {
    listOfItems.forEach(item => node.appendChild(item))
}