import React from 'react';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from 'apps/base/components/Button';
import * as MoviesActions from 'apps/movies/actions/MoviesActions';
import BackButton from 'apps/base/components/BackButton';
import MovieEditor from 'apps/movies/components/MovieEditor';


class MovieAddView extends React.Component {
  componentDidMount() {
    this.props.MoviesActions.initMovieAdd();
  }

  updateForm(formField) {
    this.props.MoviesActions.updateMovieFormField(formField);
  }

  addMovie() {
    const { MoviesActions, history } = this.props;
    MoviesActions.addMovie(history);
  }

  render() {
    const { editableMovieDetails } = this.props;
    return (
      <React.Fragment>
        <div>
          <BackButton link="/movies/">Movie List</BackButton>
        </div>
        <div>
          <Button onClick={() => this.addMovie()}>Add movie</Button>
        </div>
        <MovieEditor
          movieDetails={editableMovieDetails}
          onFieldUpdate={formField => this.updateForm(formField)} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    editableMovieDetails: state.editableMovieDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MoviesActions: bindActionCreators(MoviesActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieAddView));
