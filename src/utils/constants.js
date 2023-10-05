import ApiMovies from "./ApiMovies"


export const noImageSrc = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
export const apiMovies = new ApiMovies('https://api.nomoreparties.co');
export const menu = [
  {
    link: '/movies',
    title: 'Фильмы'
  },
  {
    link: '/saved-movies',
    title: 'Сохранённые фильмы'
  },
]
