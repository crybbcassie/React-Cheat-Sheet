import React from "react";

export default function Component() {
  return (
    <div className="content">
      <div className="content__text">
        <p>
          {" "}
          хук useEffect представляет собой совокупность
          методов componentDidMount, componentDidUpdate, и componentWillUnmount
        </p>
        <ul>
          <li>1. render === return</li>
          <li>
            2. useEffect(() ⇒ {}) - по факту работает как дидмаут + дидапдейт
            (вначале и при каждом изменении переменной) + без массива
          </li>
        </ul>
        <p>
          **как дидмаунт:** с пустым массивом (рендер - дидмаунт). (используется
          для отправки запроса, ответ записываем в стейт. в рендере нельзя
          менять стейт из-за зацикливания, поэтому используется юзэффект)
        </p>
        <p>
          **как дидапдейт:** вторым параметром поставить массив зависимостей -
          можно плодить бесконечно (например, по одному для дидмаунта и
          дидапдейта)
        </p>
        <p>**как виллапдейт:** возвращает функцию</p>
      </div>
    </div>
  );
}