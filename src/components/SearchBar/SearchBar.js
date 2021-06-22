import React from 'react'
import './SearchBar.css'



class SearchBar extends React.Component{
   constructor(props)
   {
     super(props)
     //Defining our states
     this.state = {
       term : "",
      location : "",
      sortBy : "best_match"
      }
      //Options for our search bar
    this.sortByOptions = {
        'Best Match' : 'best_match',
        'Highest Rated' : 'rating' ,
        'Most Reviewed' :  'review_count'
    }
    //Binding 3 handlers to our component
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
   }
   //If we choose an option it gets highlighted through css class change
   getSortByClass(sortByOption){
     if(this.state.sortBy === sortByOption){
       return 'active'
     }else{
       return ''
     }
   }
   //Changes sortBy state
   handleSortByChange(sortByOption){
     this.setState({sortBy : sortByOption})
   }
    //changes term state
   handleTermChange(e){
       this.setState({term : e.target.value})
   }
   //changes location state
   handleLocationChange(e){
        this.setState({location : e.target.value})
   }
    //catching searchYelp prop function from App.js
   handleSearch(e){
     this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
     e.preventDefault()
   }
   
    /* rendering a unique li for each of our options mentioned above
    and assigning className to it and an onClick attribute */
    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            let sortByOptionValue = this.sortByOptions[sortByOption] 
            return <li key = {sortByOptionValue} 
            className = {this.getSortByClass(sortByOptionValue)}
            onClick = {this.handleSortByChange.bind(this,sortByOptionValue)}>
              {sortByOption}</li>
        })
    }
    render(){
        return(
        <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
        {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange = {this.handleTermChange} />
    <input placeholder="Where?" onChange = {this.handleLocationChange}/>
  </div>
  <div className="SearchBar-submit">
    <a onClick = {this.handleSearch}>Let's Go</a>
  </div>
</div>
        )
    }
}

export default SearchBar