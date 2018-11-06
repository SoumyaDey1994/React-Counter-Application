import React, { Component } from 'react';

class Counter extends Component {

    styles={
        fontSize: 30,
        fontWeight: 'bold'
    }
    formatCounter(){
        const {value}= this.props.counter;
        return value===0 ? 'Zero': value;
    }

    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes+= this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    componentDidUpdate(){
        console.log(`Counter-Updated`);
    }

    componentWillUnmount(){
        console.log(`Counter-Unmounted`);
    }

    render() { 
        console.log(`Counter-Rendered`);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)}className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)}className="btn btn-secondary btn-sm sm-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
                <br/><br/>
            </div>
        );
    }
}
 
export default Counter;