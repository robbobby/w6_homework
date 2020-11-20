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
    appendChildren(document.querySelector('#task-list'), [name, description, duration])

    name.textContent        = this.name.value;
    description.textContent = this.description.value;
    duration.textContent    = this.duration.value;
    document.querySelector('#task-list').appendChild(newList)
}

const appendChildren = function(element, listOfItems) {
    listOfItems.forEach(item => element.appendChild(item))
}