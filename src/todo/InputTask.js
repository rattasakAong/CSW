import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'',place:'',date:'',time:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/><br/>
               <input type="text" name="task" onChange={this.handleChange}/> <br/>
               <input type="text" name="place" onChange={this.handleChange}/> <br/>
               <input type="date" name="date" onChange={this.handleChange}/><br/>
               <input type="time" name="time" onChange={this.handleChange}/>   <br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.place,this.state.date,this.state.time)}>Add</button>
           </div>
       )
   }
}

export default InputTask