import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";


class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework' ,place:'123' ,date:'123' ,time:'123'},
               {id: 2, task: 'Do homework' ,place:'123' ,date:'123' ,time:'123'}],
       id:3
   }

   addTask = (task,place,date,time) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,place,date,time } ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
               
           </div>
       );
   }
}

export default App;