import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Button from 'apps/base/components/Button';
import * as MoviesActions from 'apps/movies/actions/MoviesActions';
import BackButton from 'apps/base/components/BackButton';
import MovieEditor from 'apps/movies/components/MovieEditor';


class MovieEditView extends React.Component {
  componentDidMount() {
    const movieId = +this.props.match.params.id;
    this.props.MoviesActions.getMovieDetails(movieId);
  }

  updateForm(formField) {
    this.props.MoviesActions.updateMovieFormField(formField);
  }

  saveMovieData() {
    this.props.MoviesActions.saveMovieData(this.props.history);
  }

  revertMovieData() {
    this.props.MoviesActions.revertMovieData(this.props.history);
  }

  render() {
    const { editableMovieDetails } = this.props;
    return (
      <React.Fragment>
        <div>
          <BackButton link="/movies/">Movie List</BackButton>
        </div>
        <div>
          <Button onClick={() => this.saveMovieData()}>Save</Button>
          <Button onClick={() => this.revertMovieData()}>Cancel</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieEditView));
