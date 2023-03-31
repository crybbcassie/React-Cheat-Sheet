import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `const MyComponent = React.memo(function MyComponent(props) {
                /* рендер с использованием пропсов */
            });`;

  let code_2 = `function MyComponent(props) {
                /* рендер с использованием пропсов */
              }
              function areEqual(prevProps, nextProps) {
                /*
                возвращает true, если nextProps рендерит
                тот же результат что и prevProps,
                иначе возвращает false
                */
            }
            export default React.memo(MyComponent, areEqual);`;

  let code_3 = ` shouldComponentUpdate(nextProps, nextState) {
                return !shallowEqual (nextProps, this.props) ||
                       !shallowEqual (nextState, this.state);
            }
        `;

  return (
    <div className="content">
      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>

      <div className="content__text">
        <p>
          React.memo — это компонент высшего порядка.Компонент высшего порядка —
          это функция, которая принимает компонент и возвращает новый
          компонент.Если ваш компонент всегда рендерит одно и то же при
          неменяющихся пропсах, вы можете обернуть его в вызов React.memo для
          повышения производительности в некоторых случаях, мемоизируя тем самым
          результат. Это значит, что React будет использовать результат
          последнего рендера, избегая повторного рендеринга.
        </p>
        <p>
          React.memo затрагивает только изменения пропсов. Если функциональный
          компонент обёрнут в React.memo и использует useState, useReducer или
          useContext, он будет повторно рендериться при изменении состояния или
          контекста.По умолчанию он поверхностно сравнивает вложенные объекты в
          объекте props. Если вы хотите контролировать сравнение, вы можете
          передать свою функцию сравнения в качестве второго аргумента.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_2} />
      </div>

      <div className="content__text">
        <p>
          Этот метод предназначен только для оптимизации производительности.
        </p>
        <p>
          Аналогом в классовых компонентах выступает метод
          shouldComponentUpdate()
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_3} />
      </div>
    </div>
  );
}
