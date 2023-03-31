import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let class_1 = `//App.js
import Test from './class';
import './App.css';

const App2 = () => <div>app2</div>
const obj = {name:'sasha'}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Test name={'qwer'} age={56} app2={App2} object={obj}/>  
        //можно передавать что угодно и сколько угодно 
      </header>
    </div>
  );
}

export default App;`;

let class_2 = `//class.js
import React from 'react'

class Test extends React.Component{
  render(){
    //переопредление уже существующего метода render
    return (
      <div>
        {
          this.props.name
          //this.props.name = 'masshaaa' ПРОПСЫ НЕЛЬЗЯ ИЗМЕНЯТЬ
        }
        {this.props.age}
        {this.props.app2()}
        {this.props.object.name}
      </div>
    );
  }
}

export default Test`;
  let func_1 = ` const Test = (props) => {
    console.log(props) //props - это объект, куда запишутся свойства 

     const {name, age} = props
//     // return <div>{props.name}{props.age}</div>
    return <div>{name}{age}</div>
}

//или ЕЩЕ КОРОЧЕ 
const Test = ({name, age}) => <div>{name}{age}</div>
//+на функциональных компонентах можно не писать import React from 'react'`;

  return (
    <div className="content">
      <div className="content__text">
        <p>
          Объект Props - неизменяемая переменная, параметры или данные,
          передающиеся от компонента к компоненту (примерно как параметры
          функции в JS)
        </p>
        <p>Пример использования в классовых компонентах:</p>
      </div>

      <div className="content__row">
        <div className="content__code">
          <CodeCard codeString={class_1} />
        </div>
        <div className="content__code">
          <CodeCard codeString={class_2} />
        </div>
      </div>
      <div className="content__text">
        <p>А вот так в фукциональных:</p>
      </div>

      <div className="content__code">
        <CodeCard codeString={func_1} />
      </div>

      <div className="content__text">
        <p>
          React достаточно гибкий, но есть одно правило, которое нельзя
          нарушать:
        </p>
        <p>
          React-компоненты обязаны вести себя как чистые функции по отношению к
          своим пропсам. </p>
      </div>
    </div>
  );
}



