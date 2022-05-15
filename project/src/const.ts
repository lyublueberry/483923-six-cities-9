//перечисляем все маршруты
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export const nameCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const URL_MARKER_CURRENT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const SortType = {
  POPULAR: 'Popular',
  PRICE_HIGH: 'Price: low to high',
  PRICE_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRouter {
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Offers = '/hotels',
  Reviews = '/comments',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZATED = 401,
  NOT_FOUND = 404
}
