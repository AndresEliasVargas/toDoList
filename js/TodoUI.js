'use strict';

class TodoUI{
    constructor (pmodel, pparent, pfolderUI) {
        this.model = pmodel;
        this.parent = pparent;
        this.folderUI = pfolderUI;

        //Create Elements
        this.container = document.createElement('div');
        this.p = document.createElement('p');
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';

        //Apply CSS
        this.container.classList.add('bg-white');

        if (this.model.isCompleted) {
            this.container.classList.remove('bg-white');
            this.container.classList.add('bg-light');
        } else {
            this.container.classList.add('bg-white');
            this.container.classList.remove('bg-light');
        }

        //Insert Data
        this.p.innerHTML = this.model.description;
        this.checkbox.checked = this.model.isCompleted;

        this.checkbox.onchange = this.onChange.bind(this);

        //Append Childs
        this.parent.appendChild(this.container);
        this.container.append(this.p, this.checkbox);
    }

    onChange() {
        this.model.isCompleted = !this.model.isCompleted;
        this.checkbox.checked = this.model.isCompleted;
        this.folderUI.onClick();
    }
}