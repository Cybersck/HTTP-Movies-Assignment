import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import EditCard from "./EditCard";

function MovieList(props) {
  return (
    <div className="movie-list">
      {
        props.movies.map(movie => (
          <div key={movie.id}>
          { props.editting !== movie.id &&
          <Link to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
          }
          { props.editting === movie.id &&
            <EditCard movie={movie} update={props.update}/>
          }
          <button disabled={props.editting === movie.id} className='btn btn-primary' onClick={()=> props.edit(movie.id)}>Edit</button>          
          <button className='btn btn-danger' onClick={()=> props.delete(movie.id)}>Delete</button>

          </div>
        ))
      }
    </div>
  );
}

export default MovieList;
