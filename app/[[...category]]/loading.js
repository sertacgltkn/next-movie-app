import React from "react";
import CategoriesLoading  from "@/components/categories/loading";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

function Loading() {
  return (
    <>
      <FeaturedMovieLoading/>
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </>
  );
}

export default Loading;
