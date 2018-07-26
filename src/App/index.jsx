import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MoviesActions from 'apps/movies/actions/MoviesActions';
import MoviesListView from 'apps/movies/views/MoviesListView';
import MovieDetailsView from 'apps/movies/views/MovieDetailsView';
import MovieEditView from 'apps/movies/views/MovieEditView';
import MovieAddView from 'apps/movies/views/MovieAddView';

import styles from './style.css';


class App extends React.Component {
  componentDidMount() {
    this.props.MoviesActions.fetchAllMovies();
  }

  render() {
    const { movies } = this.props.movies;
    if (movies) {
      return (
        <Router>
          <div className={styles.app}>
            <Switch>
              <Route
                path="/"
                exact
                component={MoviesListView} />
              <Route
                path="/movies"
                exact
                component={MoviesListView} />
              <Route
                path="/movies/add"
                exact
                component={MovieAddView} />
              <Route
                path="/movies/:id"
                exact
                component={MovieDetailsView} />
              <Route
                path="/movies/:id/edit"
                exact
                component={MovieEditView} />
            </Switch>
          </div>
        </Router>
      );
    }

    return null;
  }
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MoviesActions: bindActionCreators(MoviesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
