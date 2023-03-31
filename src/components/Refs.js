import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `import React, {useEffect, useState, Fragment, useRef} from 'react'

const Test = () => {

  const [text, setText] = useState('')
  const textInput = useRef(null)
  const valid = (e) => {
    textInput.current.focus()
  }
    return (
      <>
       <input ref={textInput} />
       <button onClick={(event) => valid()} value={text}>jjjj</button>
      </>
    );

}
export default React.memo(Test)`;

  return (
    <div className="content">
      <div className="content__text">
        <p>
          Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам
          или React-элементам, созданным в методе render().
        </p>
        <p>Есть несколько хороших примеров использования ссылок:</p>
        <ul>
          <li>
            Управление фокусом, выделение текста или воспроизведение
            медиаресурсами.
          </li>
          <li>Выполнение анимаций в императивном подходе.</li>
          <li>
            Интеграция со сторонними библиотеками, взаимодействующие с DOM.
          </li>
        </ul>
        <p>Управление фокусом - лучший из них:</p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>
    </div>
  );
}
