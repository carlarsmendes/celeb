// import React from 'react';
import axios from 'axios';
import React, { Component } from 'react';

// import { Route, NavLink } from "react-router-dom";

import './App.css';
// import CelebDetails from './CelebDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      celebrities: [],
      selectedCelebrity: null,
      search: "" }
      this.changeSearch = this.changeSearch.bind(this)
  }
  selectCelebrity(celebrity){
      this.setState({
        selectedCelebrity: celebrity
      })
  }

  changeSearch(e){
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return(
    <div className="App">

    <h1 className="header">Movie Celebrities</h1>
    <p>{this.state.celebrities.length} Celebrities</p>
    <p><input type="text" value={this.state.search} onChange={this.changeSearch} /></p>

      <div className="dashboard">
          <div className="celebs-list">
           {!this.state.celebrities && <div>Loading...</div>}
          {this.state.celebrities && 
            <div>
      {this.state.celebrities
      .filter(celebrity => celebrity.name.toUpperCase().includes(this.state.search.toUpperCase()))
      .map(celeb => 
          <li 
            key={celeb.id} 
            className="celebs-list-item" 
            onClick={()=>this.selectCelebrity(celeb)}>
              {/* <NavLink to={'/'+celeb.id}>  */}
                <img src={`https://image.tmdb.org/t/p/w185/${celeb.profile_path}`} alt="" />
                {celeb.name}
              {/* </NavLink>             */}
            </li>)}
          </div>
          }
        </div>
        <div className="celeb-detail">
          {this.state.selectedCelebrity && <div>
            <h2>{this.state.selectedCelebrity.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w185/${this.state.selectedCelebrity.profile_path}`} alt="" />
            <h3>Known For</h3>

            {this.state.selectedCelebrity.known_for.map(movie =>
              <div key ={movie.id}><p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" />
            </div>)}
        {/* <Route path="/:celebId" render={props => <CelebDetails {...props} celebrities={this.state.celebrities} />} /> */}
          </div>}
      </div></div> 
    </div>

  );
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
    
    //To get the data from the API
    for(let page =1; page <= 10; page++)
    { setTimeout(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=${page}`)
      .then((response) => {
        this.setState({
          celebrities: [...this.state.celebrities,...response.data.results]
        })
      })
    },page*100)
    } 
}}

export default App;

