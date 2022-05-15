import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import NotFoundPageScreen from '../page-not-found/page-not-found';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomPageScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { AutorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

const isCheckedAuth = (authorizationStatus: AutorizationStatus): boolean =>
  authorizationStatus === AutorizationStatus.Unknown;

function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute component={<FavoritesScreen />} />} />
        <Route path={AppRoute.Offer} element={<RoomPageScreen />} />
        <Route path="*" element={<NotFoundPageScreen />} />
      </Routes>
    </HistoryRoute>
  );
}
export default App;
