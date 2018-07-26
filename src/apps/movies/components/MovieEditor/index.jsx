import React from 'react';

import TextInput from 'apps/base/components/TextInput';
import TextArea from 'apps/base/components/TextArea';


const MovieEditor = ({ movieDetails, onFieldUpdate }) => {
  return (
    <React.Fragment>
      <div>
        <TextInput
          label="Title"
          name="title"
          isRequired
          value={movieDetails.title || ''}
          onInit={title => onFieldUpdate({ title })}
          onChange={title => onFieldUpdate({ title })} />
      </div>
      <div>
        <div>
          <TextInput
            label="Year"
            name="year"
            value={movieDetails.year || ''}
            onChange={year => onFieldUpdate({ year })} />
        </div>
        <div>
          <TextInput
            label="Genres"
            name="genres"
            value={movieDetails.genres || ''}
            onChange={genres => onFieldUpdate({ genres })} />
        </div>
        <div>
          <TextInput
            label="Poster URL"
            name="posterUrl"
            isRequired
            value={movieDetails.posterUrl || ''}
            onChange={posterUrl => onFieldUpdate({ posterUrl })} />
        </div>
        <div>
          <TextInput
            label="Director"
            name="director"
            value={movieDetails.director || ''}
            onChange={director => onFieldUpdate({ director })} />
        </div>
        <div>
          <TextInput
            label="Runtime"
            name="runtime"
            value={movieDetails.runtime || ''}
            onChange={runtime => onFieldUpdate({ runtime })} />
        </div>
        <div>
          <TextArea
            label="Plot"
            name="plot"
            isRequired
            value={movieDetails.plot || ''}
            rows={4}
            onChange={plot => onFieldUpdate({ plot })} />
        </div>
        <div>
          <TextInput
            label="Actors"
            name="actors"
            value={movieDetails.actors || ''}
            onChange={actors => onFieldUpdate({ actors })} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieEditor;
