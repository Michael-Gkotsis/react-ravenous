import React from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../api/Yelp'



class App extends React.Component{
 /*Function passed to Searchbard component as an event handler 
 for the buttong let's go */
 constructor(props){
  super(props)
  this.state = {businesses : [],}
  this.searchYelp = this.searchYelp.bind(this)
}

//Using the api to request our data mentioned in business.js
 searchYelp(term,location,sortBy){
  Yelp.searchYelp(term,location,sortBy).then(businesses => {
    this.setState({businesses : businesses})
    console.log(this.state.businesses)
  })
}

  render(){
    return(
      <div className="App">
  <h1>Ravenous</h1>
  <SearchBar searchYelp = {this.searchYelp}/>
  {/*Rendering BusinessList Component and passing as props the data array */}
  <BusinessList businesses = {this.state.businesses} />
</div>
    )
  }
}
export default App

