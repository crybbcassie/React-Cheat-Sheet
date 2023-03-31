import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `
            <button onClick={activateLasers}>
            Активировать лазеры
            </button>
        `;

  let code_2 = `           function Form() {
                function handleSubmit(e) {
                  e.preventDefault();
                  console.log('Отправлена форма.');
                }
                return (
                  <form onSubmit={handleSubmit}>
                    <button type="submit">Отправить</button>
                  </form>
                );
            }`;

  let code_3 = ` function Toggle() {
                let [isToggleOn, setIsToggleOn] = useState(true);
                function handleClick() {
                  setIsToggleOn(!isToggleOn)
                }
                return (
                  <button className={'toggle__btn'} onClick={() => handleClick()}>
                    {isToggleOn ? 'Включено' : 'Выключено'}
                  </button>
                )
              }`;
              
  let code_4 = ` <button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>`;

  return (
    <div className="content">
      <div className="content__text">
        <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
        <p>Популярные обработчики событий: onClick, onChange</p>
        <p>
          События в React именуются в стиле camelCase вместо нижнего регистра.
        </p>
        <p>Существует множество поддерживаемых событий, вот общий список:</p>
        <ul>
          <li>Буфер обмена: onCopy, onCut, onPaste</li>
          <li>
            Составление/ввод данных: onCompositionEnd, onCompositionStart,
            onCompositionUpdate
          </li>
          <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
          <li>Фокусировка: onFocus, onBlur</li>
          <li>Форма: onChange, onInput, onSubmit</li>
          <li>
            Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
            onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart,
            onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove,
            onMouseOut, onMouseOver, onMouseUp
          </li>
          <li>Выделение: onSelect</li>
          <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
          <li>UI: onScroll</li>
          <li>Колёсико мышки: onWheel</li>
          <li>
            Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
            onEmptied, onEncrypted, onEnded, onError, onLoadedData,
            onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying,
            onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend,
            onTimeUpdate, onVolumeChange, onWaiting
          </li>
          <li>Изображение: onLoad, onError</li>
          <li>
            Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
          </li>
          <li>Переход: onTransitionEnd</li>
        </ul>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>

      <div className="content__text">
        <p>
          В React нельзя предотвратить обработчик события по умолчанию, вернув
          false. Нужно явно вызвать preventDefault.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_2} />
      </div>

      <div className="content__text">
        <p>
          В компоненте, определённом с помощью ES6-класса, в качестве
          обработчика события обычно выступает один из методов класса. Например,
          этот компонент Toggle рендерит кнопку, которая позволяет пользователю
          переключать состояния между «Включено» и «Выключено»:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_3} />
      </div>

      <div className="content__text">
        <p>Результат кода:</p>
        <p>
          Внутри цикла часто нужно передать дополнительный аргумент в обработчик
          события. Например, если id — это идентификатор строки, можно
          использовать следующий вариант:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_4} />
      </div>
    </div>
  );
}


