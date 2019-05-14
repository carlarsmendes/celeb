
import axios from 'axios';
import React, { Component } from 'react';




export default class CelebDetails extends Component {
  render() {

    axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=1")
    
      .then((response) => {
         console.log("response------>",response.data.results);
        this.setState({
          celebrities: response.data
        })
      })


    return (
      <div>
        axios.get()
      </div>
    )
  }
}
