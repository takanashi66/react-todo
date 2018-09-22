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
    
    //thisを束縛
    this.addTodo = this.addTodo.bind(this);
  }
  
  //追加ボタンが押された時の処理
  //ToDoを追加
  addTodo(){
    //inputのrefs属性がnewTextに入力された値をthis.state.todoに追加する
    this.state.todo.push({
      title: this.refs.newText.value
    })
    
    //setStateでstateに変更を通知
    this.setState({
      todo : this.state.todo
    })
    
    //入力欄を空にする
    this.refs.newText.value = ''
  }
  
  
  deleteTodo(i) {
    //i番の配列を削除
    this.state.todo.splice(i, 1);
    
    //setStateでstateに変更を通知
    this.setState({
      todo : this.state.todo
    });
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
            //keyはunique}
            //this.state.todo.titleを表示
            }
            return <li className="todo_item" key={i}><input type="button" value="☓" onClick={() => this.deleteTodo(i)}/>{todo.title}</li>
          })}
        </ul>
        <input type="text" ref="newText" />
        {
          //追加ボタンが押されたらaddTodoを発火
        }
        <input type="button" value="追加" onClick={this.addTodo} />
      </div>
    )
  }
}

ReactDOM.render(
  <div><App /></div>,
  document.getElementById("app")
)