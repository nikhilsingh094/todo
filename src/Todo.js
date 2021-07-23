import React, { Component } from 'react'

let getId='';
class Todo extends Component {
    constructor(props){
        super(props)

        this.state={
            item:"",
            todoItems:[]
        }
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onEnterHandler=this.onEnterHandler.bind(this);
        this.addData=this.addData.bind(this);
        this.delete=this.delete.bind(this);
        this.edit=this.edit.bind(this);
        this.update=this.update.bind(this);
    }

    onChangeHandler(event){
        var inputVal = event.target.value;
        this.setState({
            item:inputVal
        })
    }

    onEnterHandler(event){
      if(event.charCode===13){
          this.addData()
      }
    }

   

    addData(){

        var inputVal = this.state.item;
        var itemInstance=this.state.todoItems;
        itemInstance.push(inputVal);
        this.setState({
            todoItems:itemInstance,
            item:''
            
        })
        
    }

    delete(event){
        var id = event.target.id;
        var itemInstance=this.state.todoItems;

        itemInstance.splice(id,1);

        this.setState({
            todoItems:itemInstance
        })
    }

    edit(event){
        getId=event.target.id;
        this.setState({
            item:this.state.todoItems[event.target.id]
        })
        
    }

    update(){
        var y = this.state.todoItems;
        y[getId]=this.state.item;
        this.setState({
            todoItems:y,
            item:''
        })

        
    }

    render() {

            var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>{e}
            <button className="edit" onClick={this.edit} id={i}> EDIT </button>
            <button className="delete" onClick={this.delete} id={i}> Close </button>
            </li>
        )

       
        return (
            <div>
            
                <div className="header">React Js Todo App</div>
                <div className="body">
                    <ul style={{listStyle:'none'}}>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} onKeyPress={this.onEnterHandler} onChange={this.onChangeHandler}/>
                
                    <button  onClick={this.addData}>Add</button>
                    <button  onClick={this.update}>update</button>

                
                </div>
            </div>
        )
    }
}

export default Todo;