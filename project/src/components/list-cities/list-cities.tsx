import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeCityAction} from '../../store/action';
import { nameCities } from '../../const';

function ListCities(): JSX.Element {
  const {currentCity} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {nameCities.map((city) => (
        <li
          className="locations__item"
          key={city}
        >
          <Link
            to={city}
            className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active':''}`}
            onClick={(evt: MouseEvent) => {
              evt.preventDefault();
              dispatch(changeCityAction(city));
            }}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListCities;
