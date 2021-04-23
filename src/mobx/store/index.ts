import { observable, action, computed, makeAutoObservable } from 'mobx';


class Todo {
    id = Math.random().toString(36).substr(2);
    @observable title: string = '';
    @observable finished: boolean = false;

    constructor (title: string) {
        this.title = title
    }
}

export class TodoList {

    constructor () {
        makeAutoObservable(this)
    }
    todos: Todo[] = [];

    get completedTodosCount () {
        return this.todos.length;
    }

    get report () {
        return this.todos.length ? `下一个任务： ${this.todos[0].title}` : `任务已完成`
    }

    set completedTodosCount (newVal) {
        console.log('newVal :>> ', newVal);
    }

    addTodo (title: string) {
        if (!title) return;
        this.todos.push(new Todo(title));
        console.log('this.todos :>> ', this.todos);
    }
}

const store = new TodoList();
export default store;