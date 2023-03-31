import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `const MyContext = React.createContext(defaultValue);
      //defaultValue - дефолтное значение или объект для получения через контекст`;

  let code_2 = ` <MyContext.Provider value={value}> </MyContext.Provider>`;

  let code_3 = `<MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>`;

  let code_4 = `const value = useContext(MyContext);`;

  return (
    <div className="content">
      <div className="content__text">
        <p>
          Контекст разработан для передачи данных для всего дерева
          React-компонентов, не прокидывая через пропсы. Создать контекст:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>

      <div className="content__text">
        <p>
          Вызывая React.createContext мы получаем объект, который содержит два
          компонента:
        </p>
        <p>
          1. Компонент Provider. Благодаря ему все дочерние компоненты могут
          получать значения, которые мы ему передаем.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_2} />
      </div>

      <div className="content__text">
        <p>
          Компонент Provider принимает проп value, который будет передан во все
          компоненты, использующие этот контекст и являющиеся потомками этого
          компонента Provider. Один Provider может быть связан с несколькими
          компонентами, потребляющими контекст. Так же компоненты Provider могут
          быть вложены друг в друга, переопределяя значение контекста глубже в
          дереве.
        </p>
        <p>
          2. Компонент Consumer - это React-компонент, который подписывается на
          изменения контекста.
        </p>
        <p>
          Consumer принимает функцию в качестве дочернего компонента. Эта
          функция принимает текущее значение контекста и возвращает
          React-компонент. Передаваемый аргумент value будет равен ближайшему
          (вверх по дереву) значению этого контекста, а именно пропу value
          компонента Provider. Если такого компонента Provider не существует,
          аргумент value будет равен значению defaultValue, которое было
          передано в createContext().
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_3} />
      </div>

      <div className="content__text">
        <p>
          Хук useContext. Принимает один параметр - это объект контекста,
          получаемый при вызове React.createContext и возвращает текущее
          значение контекста для этого контекста.
        </p>
        <p>
          Текущее значение контекста определяется пропом value ближайшего
          MyContext.Provider над вызывающим компонентом в дереве.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_4} />
      </div>

      <div className="content__text">
        <p>
          Компонент, вызывающий useContext, всегда будет перерендериваться при
          изменении значения контекста. Если повторный рендер компонента
          затратен, вы можете оптимизировать его с помощью мемоизации.
        </p>
        <p>Контекст лучше всего создавать в отдельном файле.</p>
      </div>
    </div>
  );
}
