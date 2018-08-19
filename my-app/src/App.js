import React, { Component } from 'react';
import './App.css';
import List from './List';
import Flexbox from 'flexbox-react';
import Background from './jay2.jpg';

let sectionArt = {
  width: "80%",
  height: "40rem",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};


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
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" justifyContent="center" height="60px" paddingTop="10px" paddingBottom="10px" margin="30px">
            <h1> 
               <div>
                 I Got 99 Problems,
               </div>

               <div>
                But React Ain't One
               </div>
            </h1>
          </Flexbox>
         
         <Flexbox flexGrow={1} padding="10px">
             <div ClassName="list">
                <form className="App" onSubmit={this.onSubmit}>
                  <p> <u> PROBLEMS </u> </p>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Submit</button>
                </form>
                <List items={this.state.items} />
              </div>

              <div ClassName="art" style={ sectionArt }>
                
              </div>            
          </Flexbox>
         
          <Flexbox element="footer" height="60px" padding="13px">
            by alfonso l. arriola
          </Flexbox>

        </Flexbox>     
      </div>
    );
  }
}



