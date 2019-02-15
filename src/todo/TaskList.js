import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<ul > {
                   this.props.tasks.map((item) => (
                       <li key={item.id}> Name 	: {item.task} <br/>
                       					  Place : {item.place}<br/>
                       					  Date 	: {item.date}<br/>
                       					  Time 	: {item.time}<br/></li>
                   ))
               }
           </ul>)
   }
}

export default TaskList