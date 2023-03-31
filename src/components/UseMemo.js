import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `useMemo(hardFunction, [зависимости]) - функция выполняется только в случае изменения зависимостей`

  return (
    <div className="content">
      <div className="content__text">
        <p>
          это хук, для того, чтобы заново не выполнять (мемоизировать) функцию,
          если входные параметры не изменятся (например, для функций, которые
          долго выполняются)
        </p>
      </div>
      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>
    </div>
  );
}
