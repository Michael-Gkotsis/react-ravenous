import React from 'react'
import "./BusinessList.css"
import Business from '../Business/Business'


class BusinessList extends React.Component{
    render(){
        /*Returning each business as a unique Business component
        with each own data
        */
        return(
<div className="BusinessList">
     {this.props.businesses.map((business) => {
      return  <Business business = {business}/>
     })}
</div>
        )
    }
}

export default BusinessList