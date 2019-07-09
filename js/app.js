'use strict';

const foldersContainer = document.querySelector('#foldersContainer');
const nonCompleteContainer = document.querySelector('#nonCompleteContainer');
const completeContainer = document.querySelector('#completeContainer');
const todosContainer = document.querySelector('#todosContainer');
const folders = [];

const loadData = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '../data/data.json', true);
    request.onreadystatechange = loadDataCompleted;
    request.send();
};

const loadDataCompleted = e => {
    let request = e.target;
    if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);

            data.folders.map(folderData => {
                let newTodos = [];

                folderData.todos.map(todoData => {
                    let newTodo = new Todo(todoData.description, todoData.isCompleted);
                    newTodos.push(newTodo);
                });

                let newFolder = new Folder(folderData.name, newTodos);
                folders.push(newFolder);
            });

            console.log(folders);
            createUI();
        }
    }
};

const createUI = () => {
    folders.map(folder => {
        let folderUI = new FolderUI(folder, foldersContainer, nonCompleteContainer, completeContainer);
    });
};

loadData();