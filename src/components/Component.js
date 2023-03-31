import React from 'react';
import CodeCard from './CodeCard';
import './ContentStyle.css'

export default function Component(){
  let class_1 = `  
  //App.js
  import Test from './class';
        import './App.css';

        function App() {
            return (
            <div className="App">     
                < Test/>
            </div>
        );
        }

        export default App;
            `;

  let class_2 = ` 
  //Test.js
  import React from 'react'

    class Test extends React.Component{
    render(){
        //переопредление уже существующего метода render, возвращает ОДНУ разметку - props   
        return <div>class</div>
    }
    }

    export default Test

    //export {Test, Test2} - для экспорта множества компонентов
    //export default Test - default только один
    //негласное правило!! 1 компонент = 1 файл, поэтому по умолчанию export default
            `;

  let func_1 = `
                const Test = (props) => {
        console.log(props) //props - это объект, куда запишутся свойства 

        const {name, age} = props
        return <div>{name}{age}</div>
    }

    //или ЕЩЕ КОРОЧЕ 
    const Test = ({name, age}) => <div>{name}{age}</div>
    //+на функциональных компонентах можно не писать import React from 'react'
            `;

    return (
      <div className="content">
        <div className="content__text">
          <p>
            <b>Компоненты</b> позволяют разбить интерфейс на независимые части,
            про которые легко думать в отдельности. Их можно складывать вместе и
            использовать несколько раз. Во многом компоненты ведут себя как
            обычные функции JavaScript. Они принимают произвольные входные
            данные (так называемые «пропсы») и возвращают React-элементы,
            описывающие, что мы хотим увидеть на экране.
          </p>
          <p>
            Компоненты могут быть <b>классовыми и функциональными.</b> Пример
            классового компонента:
          </p>
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
          <p>Проще всего объявить React-компонент как функцию:</p>
        </div>

        <div className="content__code">
          <CodeCard codeString={func_1} />
        </div>

        <div className="content__text">
          <p>
            Компонента должна себя вести как <b>чистая функция.</b>
          </p>
          <p>
            «Чистой» называется функция, которая:
            <ul>
              <li>
                Для одинаковых входных данных всегда возвращает один результат.
              </li>
              <li>
                Не имеет побочных эффектов (то есть не изменяет внешние
                состояния).
              </li>
              <li>Не зависит от внешних состояний.</li>
            </ul>
          </p>
        </div>
      </div>
    );
}