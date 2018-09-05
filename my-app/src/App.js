import React, { Component } from 'react';
import './App.css';
import List from './List';





export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <header> <h1> 99 Problems, But React Ain't One</h1> </header>
         
        <div className='container'>
       
               <div className="list">
                  <form className="App" onSubmit={this.onSubmit}>
                    <p> <u> PROBLEMS </u> </p>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                  </form>
                  <List items={this.state.items} />
                </div>
                <div className="poster">
                </div>
        </div>

        <footer> by alfonso l. arriola </footer>
      </div>
    );
  }
}



