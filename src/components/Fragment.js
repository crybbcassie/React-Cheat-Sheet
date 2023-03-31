import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
    let code_1 = `import { Fragment } from 'react';
        
    //Заменяем теги div на Fragment:

            class ChildComponent extends React.Component {
                render() {
                    return (<Fragment>
                            <h1>Hello Child Component</h1>
                        </Fragment>)}}
                `;

  let code_2 = `class ChildComponent extends React.Component {
                render() {
                    return (<>
                            <h1>Hello Child Component</h1>
                        </>)}
        
`;

  return (
    <div className="content">
      <div className="content__text">
        <p>
          С помощью фрагментов можно сгруппировать список дочерних элементов без
          добавления дополнительных узлов в DOM.
        </p>
        <p>
          Используем React.Fragment или выполняем импорт, чтобы использовать
          Fragment:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>

      <div className="content__text">
        <p>
          Существует сокращенная запись (импортировать не нужно) - недостаток
          сокращенной записи: нельзя использовать атрибут key.:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_2} />
      </div>
    </div>
  );
}
