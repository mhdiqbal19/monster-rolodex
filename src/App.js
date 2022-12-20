import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'iqbal',
          id: '12232',
        },
        {
          name: 'ridwan',
          id: '23421'
        },
        {
          name: 'jira',
          id: '53443'
        },
      ]

    };
  };

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return( 
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            )
          })
        }
      </div>
    );
  }

}

export default App;
