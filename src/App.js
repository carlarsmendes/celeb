import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      celebrities: [] }
  }

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US")
      .then(response => {
        console.log("response.data.results------>",response.data.results);
        this.setState({
          celebrities: response.data
        })
      })
  }
  render() {
    return(
    <div className="App">
    <h1>Movie Celebrities</h1>
    {!this.state.celebrities.results && <div>Loading...</div>}
        {this.state.celebrities.results && 
    <div>
     {this.state.celebrities.results.map(celeb => 
        <li key={celeb.id}>{celeb.name}</li>)}
    </div>}
    </div>

  );
  }
}

export default App;

