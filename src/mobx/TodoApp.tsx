import { Component } from 'react'
import { observer, inject } from 'mobx-react';
interface IProps {
}

interface IState {
}
export default class App extends Component<IProps, IState> {

  state: Readonly<IState> = {
    count: 99,
    data: {
      message: '',
      code: 0,
      result: []
    }
  }

  async componentDidMount () {
  }




  render () {
    return <div></div>
  }
}