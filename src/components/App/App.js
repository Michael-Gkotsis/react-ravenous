import React from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../utll/Yelp'

//Creating mock data, gonna retrieve from API later
// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }
//Creating mock data array
// const businesses = [business,business,business,business,business,business]

class App extends React.Component{
 /*Function passed to Searchbard component as an event handler 
 for the buttong let's go */
 constructor(props){
  super(props)
  this.state = {businesses : [],}
  this.searchYelp = this.searchYelp.bind(this)
}
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

