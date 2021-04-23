import { observable, action, computed } from 'mobx';


class Todo {
    id = Math.random().toString(36).substr(2);
    @observable title: string;
    @observable finished: boolean = false;

    constructor (title) {
        this.title = title
    }
}

class TodoList {
    @observable todos = [];

    @computed get completedTodosCount () {
        return this.todos.filter(todo => todo.finished).length;
    }

    @computed get report () {
        return this.todos.length ? `下一个任务： ${this.todos[0].title}` : `任务已完成`
    }

    @action addTodo (title) {
        if (!title) return;
        this.todos.push(new Todo(title));
    }
}

const store = new TodoList();
store.push(new Todo('修复浏览器问题'), new Todo('提交意见'))
export default store;