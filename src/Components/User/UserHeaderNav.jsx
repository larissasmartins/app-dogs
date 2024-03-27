import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import FeedImg from '../../Assets/feed.svg?react';
import EstatisticasImg from '../../Assets/estatisticas.svg?react';
import AdicionarImg from '../../Assets/adicionar.svg?react';
import SairImg from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  // close mobile menu after click elements
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <FeedImg />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <EstatisticasImg />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarImg />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <SairImg />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
