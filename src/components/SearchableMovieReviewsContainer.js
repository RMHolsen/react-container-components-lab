import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
// BUT WHY THO

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
      searchTerm: '',
      reviews: []
    };
    // starting with empty string for state.searchTerm and empty array for reviews! Yay!
  
    handleSearchInputChange = event =>
      this.setState({ searchTerm: event.target.value });
    // function that kicks off when the input change for the search box changes
    // resets the state to the value of what's been entered in the search box input thingie
  
    handleSubmit = event => {
      event.preventDefault();
  
      fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    };
    // kicks off when the submit button is clicked
    // sets the reviews to the array of reviews
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input id="search-input" type="text" style={{ width: 300 }} onChange={this.handleSearchInputChange} />
            <button type="submit">Submit</button>
          </form>
          {typeof this.state.reviews === 'object' &&
            this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;