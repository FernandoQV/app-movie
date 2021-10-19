type BelongsToCollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
type GenresType = {
  id: number;
  name: string;
};
type ProductionCompaniesType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type ProductionCountriesType = {
  iso_3166_1: string;
  name: string;
};
type SpokenLanguagesType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export interface InfoMovieProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollectionType;
  budget: number;
  genres: Array<GenresType>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompaniesType>;
  production_countries: Array<ProductionCountriesType>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguagesType>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
