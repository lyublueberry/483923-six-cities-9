import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

function HeaderScreen(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default HeaderScreen;
