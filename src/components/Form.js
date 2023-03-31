import React from "react";
import CodeCard from "./CodeCard";

export default function Component() {
  let code_1 = `class UserForm extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {name: ""};
                    this.onChange = this.onChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }
              
                onChange(e) {
                  var val = e.target.value;
                  this.setState({name: val});
                }
              
                handleSubmit(e) {
                  e.preventDefault();
                  alert("Имя: " + this.state.name);
                }
              
                render() {
                  return (
                    <form onSubmit={this.handleSubmit}>
                      <p>
                        <label>Имя:</label><br />
                        <input type="text" value={this.state.name} onChange={this.onChange}/>
                      </p>
                      <input type="submit" value="Отправить" />
                    </form>
                  );
                }
              }
              
              ReactDOM.render(
                <UserForm />,
                document.getElementById("app")
            )`;

            let code_2 = `this.state = {name: ""};`;

            let code_3 = ` <input type="text" value={this.state.name} onChange={this.onChange} />`;

  let code_4 = `onChange(e) {
                var val = e.target.value;
                this.setState({name: val});
            }
        
 //С помощью e.target.value получаем введенное значение. 
 //После обновления новое значение this.state.name отобразится в поле ввода.
  `;
  
  return (
    <div className="content">
      <div className="content__text">
        <p>
          В React мы можем использовать все стандартные элементы форм, которые
          есть в html, однако здесь эти элементы приобретают дополнительные
          возможности. Рассмотрим, как работать с формами в React.
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_1} />
      </div>

      <div className="content__text">
        <p>
          Чтобы контролировать введенные значения, в конструкторе
          устанавливается объект state:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_2} />
      </div>

      <div className="content__text">
        <p>
          При определении поля ввода каждое поле связывается с определенным
          значением в state:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_3} />
      </div>

      <div className="content__text">
        <p>
          Так, источником значения для поля ввода имени является объект
          this.state.name.
        </p>
        <p>
          Для отслеживания изменений в поле ввода нам надо определить обработчик
          для события change с помощью атрибута onChange. Этот обработчик будет
          срабатывать при каждом нажатии клавиши клавиатуры. Если мы не
          определим для поля подобный обработчик, то это поле ввода будет
          доступно только для чтения.
        </p>
        <p>
          Суть каждого обработчика заключается в изменении значений в
          this.state:
        </p>
      </div>

      <div className="content__code">
        <CodeCard codeString={code_4} />
      </div>
    </div>
  );
}
