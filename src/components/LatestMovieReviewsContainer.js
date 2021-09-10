import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        reviews: []
      };
    }
    // basic create a component stuff. constructor method, super inherits from React Component
    // we're pulling multiple reviews and putting them in an array of reviews so we start with a state property of an empty array for "reviews"
  
    componentDidMount() {
      fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }));
    }
    // again, pretty basic fetch stuff, fetch the URL, turn the resultant promise object into JSON, pluck the reviews out of the JSON 
    // set the state as those reviews.

    render() {
      return (
        <div className="latest-movie-reviews">
          <h1>The Latest Reviews:</h1>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
    // render function creates a div box for the reviews that match the search criteria, gives it a header/title to look pretty
    // then adds in the movie reviews component giving the component the props of the array of reviews
    // note: this does not use the map function!! we're just grabbing the component and handing it the props and telling it to go go go.
  }
  
  
  export default LatestMovieReviewsContainer;