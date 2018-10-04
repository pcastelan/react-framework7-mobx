import {observable} from 'mobx';

class Todo {
    @observable value;
    @observable id;
    @observable complete;


    constructor (value){
        this.value = value;
        this.complete = false;
        this.id = new Date();
        //console.log(this.id);
    }

    toggleComplete = () => {
        this.complete=!this.complete;
        console.log(this.complete);
    }


}

class TodoStore{
    @observable todos = [];    

    createTodo(value){
        this.todos.push(new Todo(value));
        console.log(this.todos);
    }

}

let todoStore =  new TodoStore();

export default todoStore;

