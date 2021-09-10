import React from 'react';

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
/* okay, this is a bit complicated
 all of this is a display component that isn't very dynamic, takes in information and makes it pretty, doesn't involve state
 so it can be rendered as a fun tidy little HTML thing in a functional component
 In this case we have two functions, one that becomes the component exported to Latest Movie Reviews and one that styles the review
 The MovieReviews function/component then takes in the reviews array from LatestMovieReviews and shoves it into a div box "review-list"
 Within the div box we map over the reviews array
 (Remember the map method outputs a modified array)
 And applies the Review function to each item in the reviews array
*breathes*
*/
const Review = ({ headline, author, url, summary_short }) => {
  // takes parameters for headline, author, link, and summary
  return (

    <div key={headline} className="review">
      <header>
        <a className="review-link" href={url.url}>{headline}</a>
        <br/>
        <span className="author">{author}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
  // (really hate the way VSC freaks out if I don't p ut the / after the br. IT DOESN'T NEED TO BE CLOSED. IT'S A STAND-ALONE TAG.)
};

MovieReviews.defaultProps = {
  reviews: []
};
// default props is a blank reviews array as in the other thingie. default reviews are always empty reviews.

export default MovieReviews;