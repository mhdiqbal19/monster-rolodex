import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: {firstName: 'Muhammad', lastName: 'Iqbal'},
      company: 'ZTM'
    }

  }
 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, Iam work in {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              (state, props) => {
                return {
                  name: {firstName: 'Muhammad', lastName: 'Ahsan'},
                };
              },
          );
        }}
          >Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
