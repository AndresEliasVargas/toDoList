'use strict';

class FolderUI {
    constructor(pmodel, pparent, pnonCompleteContainer, pcompleteContainer) {
        this.model = pmodel;
        this.parent = pparent;
        this.nonCompleteContainer = pnonCompleteContainer;
        this.completeContainer = pcompleteContainer;

        //Create Elements
        this.container = document.createElement('div');
        this.p = document.createElement('p');
        this.pcounter = document.createElement('p');

        //Apply CSS
        this.container.classList.add('bg-white', 'mb-3', 'py-1', 'pl-3');

        //Insert Data
        this.p.innerHTML = this.model.name;
        this.pcounter.innerHTML = 'Todos: ' + this.model.todos.length;

        //Append Childs
        this.parent.appendChild(this.container);
        this.container.append(this.p, this.pcounter);

        //Call to action
        this.container.onclick = this.folderOnClick.bind(this);

        //console.log(this.model.name);
    }

    clearContainer() {
        this.nonCompleteContainer.innerHTML = '';
        this.completeContainer.innerHTML = '';
    };

    folderOnClick() {
        //console.log(this.model.name);

        this.clearContainer();

        this.model.todos.map(todo => {
            let todoUI;
            if (todo.isCompleted) {
                todoUI = new TodoUI(todo, this.completeContainer, this);
            } else {
                todoUI = new TodoUI(todo, this.nonCompleteContainer, this);
            }
        });
    };
}