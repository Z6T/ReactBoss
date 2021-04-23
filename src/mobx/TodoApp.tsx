import { Component, MouseEvent, FormEventHandler } from 'react'
import { observer, inject } from 'mobx-react';
import store, { TodoList } from './store'

interface IProps {
  store?: TodoList
}

interface IState {
  title: string
}

@inject('store')

@observer
export default class App extends Component<IProps, IState> {

  state: Readonly<IState> = {
    title: ''
  }

  async componentDidMount () {
  }

  addTodo = (e: MouseEvent) => {
    this.props.store!.addTodo(this.state.title);
  }
  changeTitle: FormEventHandler = (e: any) => {
    this.setState({ title: e.target.value });
  }




  render () {
    const { store } = this.props;
    const { title } = this.state
    console.log('store :>> ', store);
    console.log('title :>> ', title);
    return <div >
      <h1>TodoApp</h1>{store!.completedTodosCount}
      <div>
        <input type="text" value={title} onInput={this.changeTitle} /> <button onClick={this.addTodo}>确定</button>
      </div>
      <ul>
        {store && store.todos.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  }
}