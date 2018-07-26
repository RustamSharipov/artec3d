import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MoviesActions from 'apps/movies/actions/MoviesActions';
import Button from 'apps/base/components/Button';
import MovieCard from 'apps/movies/components/MovieCard';
import MovieCardList from 'apps/movies/components/MovieCardList';


class MoviesListView extends React.Component {
  componentDidMount() {
    this.props.MoviesActions.getMoviesList();
  }

  render() {
    const { moviesList } = this.props.moviesList;
    return (
      <div>
        <h1>Movies List</h1>
        <div>
          <Button link="/movies/add">Add movie</Button>
        </div>
        {moviesList && (
          <MovieCardList>
            {moviesList.map(movie => (
              <MovieCard
                key={movie.id}
                link={movie.link}
                title={movie.title}
                year={movie.year}
                runtime={movie.runtime}
                director={movie.director}
                genres={movie.genres}
                posterUrl={movie.posterUrl} />
            ))}
          </MovieCardList>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesList: state.moviesList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MoviesActions: bindActionCreators(MoviesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListView);
