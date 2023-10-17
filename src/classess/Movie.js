class Movie {
  id;
  country;
  director;
  duration;
  year;
  description;
  image;
  trailerLink;
  thumbnail;
  movieId;
  nameRU;
  nameEN;

  constructor ({id, country,director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN}){
    this.id = id;
    this.country = country;
    this.director = director;
    this.duration = duration;
    this.year = year;
    this.description = description;
    this.image = image;
    this.trailerLink = trailerLink;
    this.thumbnail = thumbnail;
    this.movieId = movieId;
    this.nameRU = nameRU;
    this.nameEN = nameEN;
  }
}
export default Movie;
