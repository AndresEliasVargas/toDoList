'use strict';

class TodoUI {
    constructor(pmodel, pparent, pfolderUI) {
        this.model = pmodel;
        this.parent = pparent;
        this.folderUI = pfolderUI;

        //Create Elements
        this.container = document.createElement('div');
        this.p = document.createElement('p');
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';

        //Apply CSS
        this.container.classList.add('bg-white', 'py-2', 'mb-2', 'flow-root');
        this.checkbox.classList.add('float-left', 'mt-2', 'mx-2');
        this.p.classList.add('float-left');

        if (this.model.isCompleted) {
            this.container.classList.remove('bg-white');
            this.container.classList.add('bg-danger', 'text-white');
        } else {
            this.container.classList.add('bg-white');
            this.container.classList.remove('bg-danger', 'text-white');
        }

        //Insert Data
        this.p.innerHTML = this.model.description;
        this.checkbox.checked = this.model.isCompleted;
        this.checkbox.onchange = this.onChange.bind(this);

        //Append Childs
        this.parent.appendChild(this.container);
        this.container.append(this.checkbox, this.p);
    }

    onChange() {
        this.model.isCompleted = !this.model.isCompleted;
        this.checkbox.checked = this.model.isCompleted;
        this.folderUI.folderOnClick();
    }
}