import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";
import { generateEtags } from "@/next.config";

function HomeContainer({
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={generateEtags.genres.slice(0, 5)} />
      {
        selectedCategory.movies.length > 0 &&
        (<MoviesSection title={Genres.genres.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies} />)
      }
      
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}

export { HomeContainer };
