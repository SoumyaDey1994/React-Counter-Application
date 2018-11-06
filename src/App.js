import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar'
import './App.css';

class App extends Component {
  state={
    counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0}
        ]
    };

 constructor(){
     super();
     console.log(`App-Constructer`);
 }
  handleIncrement = (counter) => {
      console.log(counter);
      let newCounter = [...this.state.counters];
      let indexOfCounterObj = newCounter.indexOf(counter);
      newCounter[indexOfCounterObj].value++;
      this.setState({
          counters : newCounter
      })
  }
// function to handle counter value decrement
  handleDecrement = (counter) => {
    const newCounters = [...this.state.counters];
    const selectedCounter = newCounters[newCounters.indexOf(counter)];
    if(selectedCounter.value === 0){}
    else
        selectedCounter.value--;

    this.setState({
        counters : newCounters
    })
  }
  //method to handle deltetion of counter
  handleDelete= (counterId)=>{
      console.log(`Event Handler Called on ${counterId}`);
      const newCounters= this.state.counters.filter((item) => item.id!==counterId);
      this.setState({counters: newCounters});
  }
  // Method to reset all the counters
  handleReset = () =>{
      console.log(`Handling Reset event`);
      const newCounters= this.state.counters.map((item)=>{
          item.value = 0;
          return item;
      })
      this.setState({counters: newCounters});
  }

  getItemCountOfSelectedItems(){
    const activeItems = this.state.counters.filter(item => item.value > 0);
    return activeItems.length;
  }

  componentDidMount(){
      //Perfect Place to do AJAX Call
      console.log(`App-Mounted`);
  }
  render() {
      console.log(`App-Rendered`);
    return (
      <React.Fragment>
        <NavBar totalNoOfItems={this.state.counters.filter(item => item.value > 0).length}/>
        <main role="main" className="container">
            <Counters 
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
            />
        </main>
      </React.Fragment>
    );
    
  }
}

export default App;
