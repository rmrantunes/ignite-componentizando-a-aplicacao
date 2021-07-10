import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

export type ContentProps = {
  movies: MovieProps[];
  genreTitle: string;
};
export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.genreTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
