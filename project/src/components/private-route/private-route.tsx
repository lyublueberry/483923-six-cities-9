import { AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';//компонент для перенаправления, когда не нужна логика

type PrivateRouteProps = {
  component: JSX.Element;
}

function PrivateRoute({component}: PrivateRouteProps):JSX.Element {
  const hasAccess = true;

  return hasAccess ? component : <Navigate to={AppRoute.Login}/>;
}

export default PrivateRoute;
