import { FunctionComponent, MouseEvent } from 'react';


interface IProps {
  // children?: ReactNode
  onClick(event: MouseEvent<HTMLButtonElement>): void,
  size: number
}

// Partial将所有参数都变为可变参数
// type Partial<T> = { [P in keyof T]?: T[P] };

const App: FunctionComponent<Partial<IProps>> = (props) => {
  const { children, onClick } = props;
  return <div    >
    {children}
    <button onClick={onClick}>
      点击
    </button>
  </div>
}

export default App;