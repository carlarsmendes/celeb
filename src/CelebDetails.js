import axios from 'axios';
import React, { Component } from 'react';


export default class CelebDetails extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     celebrities: [] }
  // }

  // componentDidMount() {

  //   axios.get("https://api.themoviedb.org/3/person/popular?api_key=e22350b1c77a45e2a55c374787f0acfc&language=en-US&page=1")
    
  //     .then((response) => {
  //       //  console.log("response------>",response.data.results);
  //       this.setState({
  //         celebrities: response.data.results
  //       })
  //     })
  // }

  render() {

    // let celebrity = this.props.celebrities.find(u => true)
    let celebrity = this.props.celebrities.find(u => u.id == this.props.match.params.celebId)
    console.log("this.props.celebrities--->",this.props.celebrities)
    console.log("this.props.match.params.celebId--->",this.props.match.params.celebId)
    console.log("celebrity--->",celebrity)
    return (
      <div>
      <h1>Celebrity Detail</h1>
        {JSON.stringify(celebrity)}
        {/* Popularity: {celebrity.popularity}  */}
        {/* {{celebrity}}
        {{celebrity}.map(celeb => 
          <li key={celebrity.id} className="celebs-detail-list-item">
                <img src={`https://image.tmdb.org/t/p/w185/${celeb.profile_path}`} alt="" />
                {celeb.name}         
            </li>)}     */}

      </div>
    )
  }
}
