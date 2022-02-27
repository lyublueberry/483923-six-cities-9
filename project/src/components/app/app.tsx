import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import NotFoundPageScreen from '../page-not-found/page-not-found';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomPageScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers} from '../../types/offer';

type AppScrenProps = {
  placesCount: number;
  offers: Offers;
}

function App({ placesCount, offers}: AppScrenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placesCount={placesCount} offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute component={ <FavoritesScreen  offers={offers} />}/>}/>
        <Route path={AppRoute.Offer} element={<RoomPageScreen offers={offers}/>} />
        <Route path="*" element={<NotFoundPageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
