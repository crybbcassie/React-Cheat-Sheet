import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let class_1 = `import React from 'react'

class Test extends React.Component{
    state = {
        count: 0
    }
    
  render(){
        // this.state.count = 6;  так тоже изменится, но это некорректно
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: 5 })}>Click!</button>
        <button onClick={() => this.setState((state) => ({count: this.state.count + 1}), () => console.log(this.state))}>Click!</button>
      </div>
    );
  }
}

export default Test
`;
  let func_1 = `
import React, {useState} from 'react' //{useState} - хук, готовые методы, импортируются из реакта

const Test = () => {
    const [count, setCount]= useState(5) //деструктурируем массив (потому что стейт возвращает массив из переенной!! + функция) (хук), 
    //первый элемент - переменная, второй - функция, которая изменяет стейт; в скобках начальное значение
    return (
      <div>
        {count} //вывод переменной 
        <button onClick={() => setCount(count + 1)}>Click!</button> 
        //в качестве параметра принимает что-то, чем заменяем стейт (обновление)
      </div>
    );
}

export default Test`;
  return (
    <div className="content">
      <div className="content__text">
        <p>
          State (состояние) в React – это объект простого JS, позволяющий
          отслеживать данные компонента. Состояние компонента может меняться.
          Смена состояния компонента зависит от функциональности приложения.
          Изменения могут основываться на ответе от пользователя, новых
          сообщениях с сервера, ответа сети и т.д.
        </p>
        <p>
          Состояние компонента должно быть приватным для компонента и
          контролироваться им. Изменения состояния компонента необходимо делать
          внутри компонента – инициализация и обновление состояния компонента.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={class_1} />
      </div>

      <div className="content__text">
        <p>
          setState - встроенный метод у React.Component (асинхронная функция),
          имеет два параметра.
        </p>
        <ul>
          <li>
            1: может быть объект (в нашем случае по клику изменяет по ключу
            каунт свойство на 5), может быть функция (принимает объект стэйт
            целиком). РАЗНИЦА: Функция лучше, поскольку сетстейт это асинхронная
            операция и беp функции нет гарантии, что стэйт будет обновлен
            (функция гарантирует обращение к текущему стейту)
          </li>
          <li>
            2: коллбэк функция, которая сработает, когда стэйт обновится (ничего
            не возвращает) и законсолить стейт
          </li>
        </ul>
        <p>**Каждый вызов setState триггерит метод render()**</p>
        <p>Пример функционального компонента и хука useState</p>
      </div>

      <div className="content__code">
        <CodeCard codeString={func_1} />
      </div>
    </div>
  );
}
