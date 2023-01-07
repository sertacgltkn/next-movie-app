import React from "react";
import Movies from '@/mocks/movies.json'
import FeaturedMovie from '@/components/featured-movie'

function HomeContainer () {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]}/>
        </div>
    );
}

export default HomeContainer;