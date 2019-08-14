import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

// for state less

const Btn = ({ caption, handler }) => (
  <button className="btn btn-secondary" onClick={handler}>{caption}</button>
);



class App extends Component {

  //for stateful
  state = {
    num: 0

  }
  // increment=()=>{

  //   this.setState({num : this.state.num + 1});

  // }
  // decrement=()=>{
  //   this.setState({num : this.state.num - 1});
  // }

  incOrDec = (val) => {
    this.setState({ num: this.state.num + val });
  }

  render() {
    return (
      <div className="container">
        <h1 className="alert alert-info">React JS Counter Application</h1>
        <hr />
        <h3>The value of Counter : {this.state.num }</h3>
        <hr />

        
        {/* <button className = "btn btn-primary" onClick={()=>this.incOrDec(1)}>Increment</button>
        <button className = "btn btn-primary" onClick={()=>this.incOrDec(-1)}>Decrement</button>
         */}

        <Btn caption="Increment" handler={() => this.incOrDec(1)}></Btn>
        <Btn caption="Decrement" handler={() =>this.incOrDec(-1)}></Btn>

      </div>

    );
  }
}

export default App;