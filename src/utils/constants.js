export const MENU = [
  {
    link: '/movies',
    title: 'Фильмы'
  },
  {
    link: '/saved-movies',
    title: 'Сохранённые фильмы'
  },
];
export const DURATION_SHORT_MOVIES = 40;
export const COUNT_CARDS_BY_WIDTH = [[5, 2, 480], [8, 2, 1024], [16, 4,  999999] ]; /* [начальное кол-во карточек, кол-во карточке по кнопке ЕЩЁ , ширина в px до котрой применяются настройки] */
export const HTTP_CODES = {
  Unauthorized:401,
  PageNotFound: 404,
  InternalServerError: 500
}
