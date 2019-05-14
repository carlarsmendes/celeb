// import React from 'react';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import './App.css';
import CelebDetails from './CelebDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      celebrities: [] }
  }

  componentDidMount() {
    // Promise.all([
    // axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=1"),
    // axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=5")])
    //   .then(([resp1,resp2]) => {
    //      console.log("response------>",[resp1.data.concat(resp2.data)]);
    //     this.setState({
    //       celebrities: ([resp1.data,resp2.data])
    //     })
    //   })

    axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=1")
    
      .then((response) => {
         console.log("response------>",response.data.results);
        this.setState({
          celebrities: response.data.results
        })
      })
  }

  // showCelebDetails(){
  //   let celebDetails = this.state.celebrities.results
  //     .find(u => u.id === this.props.match.params.celebId)

  // }

  render() {

    
    return(
    <div className="App">

    <h1>Movie Celebrities</h1>

      <div className="dashboard">
          <div className="celebs-list">
           {!this.state.celebrities && <div>Loading...</div>}
          {this.state.celebrities && 
            <div>
      {this.state.celebrities.map(celeb => 
          <li key={celeb.id} className="celebs-list-item">
              <NavLink to={'/'+celeb.id}> 
                <img src={`https://image.tmdb.org/t/p/w185/${celeb.profile_path}`} alt="" />
                {celeb.name}
              </NavLink>            
            </li>)}
          </div>
          }
        </div>
        <div className="celeb-detail">
        {/* <Route path="/:celebId" component={CelebDetails} /> */}
        <Route path="/:celebId" render={props => <CelebDetails {...props} celebrities={this.state.celebrities} />} />
          {/* <h1>Celebrity Detail</h1>
          {console.log("this.state.celebrities.results--->",this.state.celebrities)}
        {this.state.celebrities.filter(u => u.id === this.props.match.params.celeb.id).name} */}
      </div></div>
      

    </div>

  );
  }
}

export default App;

