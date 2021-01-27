import React from 'react';

const MovieReviews = ({display_title, summary_short}) => {
    return(
        <ul className="review-list">
            <li className="review">
                {display_title}
            </li>
          <p>{summary_short}</p> 
        </ul>

    )
}

export default MovieReviews