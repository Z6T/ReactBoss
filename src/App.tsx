import { Component, MouseEvent } from 'react'
import getData, { Iresponse } from './services/fetch';

import Sfc from './Sfc';
interface IProps {
  color?: string,
  size: number
}

interface IState {
  count: number,
  data: Iresponse<number[]>
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

  async componentDidMount() {
    const data = await getData()
    this.setState({ data });
  }

  click = (e: MouseEvent) => {
    console.log(e)
    const person = { name: "name", age: 18 };

    function p(a: keyof typeof person) { console.log(a); }  // 类型断言

    // p("x"); // error 
    p("name"); // ok
  }


  render() {
    const { data: {
      result
    } } = this.state
    return <><div>
      {this.props.size}
      一个有状态组件
    </div>
      <Sfc onClick={this.click}>
        <div>sfc-children</div>
      </Sfc>
      fetch:<br />
      <span>{result}</span>
    </>
  }
}