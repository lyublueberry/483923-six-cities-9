import Logo from '../logo/logo';
import OfferCardListScreen from '../card-list/card-list';
import MapCity from '../map/map';
import { useState } from 'react';
import ListCities from '../list-cities/list-cities';
import { useAppSelector } from '../../hooks/index';
import { getCurrentOffers } from '../../utils';
import SortList from '../sort-list/sort-list';


function MainScreen(): JSX.Element {
  const { currentCity, offers } = useAppSelector((state) => state);
  const offersСertainСity = getCurrentOffers(currentCity, offers);//по определенному городу предложения
  const countOffersСertainСity = offersСertainСity.length;
  const [activeOffer, setActiveOffer] = useState(0);
  const handleHover = (id: number) => {
    const currentPoint = offers.find((offer) => offer.id === id,
    );
    if (currentPoint) {
      setActiveOffer(currentPoint.id);
    }
  };
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <ListCities />
        </div>
        <div className="cities">

          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffersСertainСity} to stay in {currentCity}</b>
              <SortList/>
              <div className="cities__places-list places__list tabs__content">
                {<OfferCardListScreen classNameCard='cities__place-card place-card' offers={offersСertainСity} onOfferHover={handleHover} />}
              </div>
            </section>
            <div className="cities__right-section">

              <section className="cities__map map">
                <MapCity offers={offersСertainСity} activeOffer={activeOffer} />
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
