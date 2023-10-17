import ApiMain from "../classess/ApiMain";
import ApiMovies from "../classess/ApiMovies"

export const apiMovies = new ApiMovies(process.env.REACT_APP_API_MOVIES);
export const apiMain = new ApiMain(process.env.REACT_APP_API_MY, 'include');
export const menu = [
  {
    link: '/movies',
    title: 'Фильмы'
  },
  {
    link: '/saved-movies',
    title: 'Сохранённые фильмы'
  },
];
