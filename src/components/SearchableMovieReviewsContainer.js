import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            movies: [
                // searchTerm: " ",
                // reviews: " "
            ]
        }
    }
    // componentDidMount(){
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    render(){
        return(
            <div>
                hi
            </div>
        )
    }
}
