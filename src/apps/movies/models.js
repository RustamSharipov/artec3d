export class MovieItem {
  constructor(params) {
    this.id = params.id;
    this.link = `/movies/${this.id}`;
    this.title = params.title;
    this.year = params.year;
    this.runtime = params.runtime;
    this.director = params.director;
    this.genres = params.genres;
    this.posterUrl = params.posterUrl;
  }
}

export class MovieDetails {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.year = params.year;
    this.runtime = params.runtime;
    this.director = params.director;
    this.genres = params.genres;
    this.posterUrl = params.posterUrl;
    this.plot = params.plot;
    this.actors = params.actors;
    this.editLink = `/movies/${this.id}/edit`;
  }
}