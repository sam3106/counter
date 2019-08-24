import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    console.log('inside constructoer' + this.state.counter);
  }
  increase = () => {
    const newNumber = this.state.counter + 1;
    this.setState({ counter: newNumber }, () =>
      console.log(this.state.counter)
    );
  };
  decrease = () => {
    const NewNumber = this.state.counter - 1;
    this.setState(
      {
        counter: NewNumber
      },
      () => console.log(this.state.counter)
    );
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <div>
          <button onClick={this.increase}>Click to increase</button>
          <button onClick={this.decrease}>Click to decrease</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
