const apiKey = 'CsPQKtx273c9HcBjFhdAxKzdIF6i7_dOguZnzEbsuqRJgO3ozns9ivDfM9Kdmfyryuwd481V9qEJXUzPBbj_7VVfL7JEO9qtar9k_CC7tME6PFKB-G6-CU-liU7TYHYx'; // Insert API key here.

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        'Content-type' : 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Access-Control-Allow-Origin' : '*'

      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => (
            {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;