import React from 'react'
import HomeContainer from '@/containers/home'
import Movies from '@/mocks/movies.json'

const API_URL = 'https://api.themoviedb.org/3/'

const getPopularMovies = async () {
  const rest = await fetch(`${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`)
}

return res.json()


function Homepage({params}) {

  let selectedCategory;

   const popularMovies = await getPopularMovies().results;
  if (params.category?.length > 0) {
    selectedCategory = true
  }
    return <HomeContainer selectedCategory={{
      id: params.category?.[0] ?? '',
      movies : selectedCategory ? Movies.results.slice(0,7) : [],
    }}  /> 

}

export default Homepage
