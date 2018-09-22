//React, React-DOMのインポート
import React from 'react';
import ReactDOM from 'react-dom';

//Appクラス
class App extends React.Component{
  
  //コンストラクタ
  constructor(props){
    //propsの継承
    super(props)
    //stateを定義
    this.state = {
      todo: [
        {title: 'JavaScript覚える'},
        {title: 'jQuery覚える'},
        {title: 'ES2015覚える'},
        {title: 'React覚える'},
      ]
    }
  }
  
  //render
  render(){
    return(
      <div>
        <h1>TODOアプリ</h1>
        <ul>
          {
            //コンストラクタのstateをmapで回す
          }
          {this.state.todo.map((todo, i) => {
            {
            //keyはunique
            //this.state.todo.titleを表示
            }
            return <li className="todo_item" key={i}><input type="button" value="☓"/>{todo.title}</li>
          })}
        </ul>
        <input type="text"/>
        <input type="button" value="追加"/>
      </div>
    )
  }
}

ReactDOM.render(
  <div><App /></div>,
  document.getElementById("app")
)