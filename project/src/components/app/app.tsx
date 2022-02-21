import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import NotFoundPageScreen from '../page-not-found/page-not-found';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';

type AppScrenProps = {
  placesCount: number;
}

function App({ placesCount }: AppScrenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placesCount={placesCount} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute component={ <FavoritesScreen />}/>}/>
        <Route path={AppRoute.Offer} element={<PropertyScreen />} />
        <Route path="*" element={<NotFoundPageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
