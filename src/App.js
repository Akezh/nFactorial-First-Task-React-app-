import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    arr: [],
    mas: [],
    task: ' ',
    underlined: false,
    isChecked: false,
    check: []
  }

    addNote = () => {
      this.setState ({
        arr: this.state.arr.concat({
          des: this.state.task,
          checked: false
        })
      })
    };

    deleteNote = index => {
    const newArray = this.state.arr;
    newArray.splice(index, 1);
    this.setState({
      arr: newArray
    })
    }

  handleClick = event => {
    this.setState({task: event.target.value})
  }

  delAll = (index) => {
    this.setState ({
      arr: this.state.arr.splice(0, index+1)
    })
  }

  completeTask = index => {
    check[index] = arr[index],
    this.setState ({
      isChecked: !this.state.isChecked
    })
    
    if (this.state.isChecked === true) {
      this.setState ({
        mas: this.state.mas.concat(this.state.index)
      })
      console.log(index)
    }
  }  

  delSelEl = (mas) => {
    const newMas = this.state.mas;
    newMas.splice(mas, 1);
    this.setState({
      mas: newMas
    })
  }

  // toggleChange = (index) => {
  //   this.setState({
  //     isChecked: !this.state.isChecked,
  //   });
  // }

  toggleLine = (index) => {  
    this.setState(prevState => {

      var temporaryArr = this.state.arr

      temporaryArr[index].checked =  !temporaryArr[index].checked

      return {
        arr:  temporaryArr
      }
    });
  }

  renderList = () => {
    return this.state.arr.map((task, index) => {

      let styling = {
        textDecoration: task.checked ? 'line-through': 'none'
      }
    
       return <div key={index}  >

        <p style={styling} onClick={() => this.toggleLine(index)} >{task.des}</p>
        
        <button onClick={() => this.deleteNote(index)}>
          Delete
        </button>

        <input type="checkbox" onChange={this.completeTask} checked={this.state.isChecked}/>

      </div>
    })
  }

render(){
    return (
      <div>
        <input value={this.state.value} type="text" onChange={this.handleClick} id="mainInput"/>
        <button onClick={this.addNote}>Add</button>
        <button onClick={this.delAll}>Delete all</button>
        <button onClick={this.delSelEl}>Delete selected elements</button>
        {this.renderList()}  
      </div>
    );
}

};


export default App; 
