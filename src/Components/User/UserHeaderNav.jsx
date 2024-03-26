import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import FeedImg from '../../Assets/feed.svg?react';
import EstatisticasImg from '../../Assets/estatisticas.svg?react';
import AdicionarImg from '../../Assets/adicionar.svg?react';
import SairImg from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
        <FeedImg />
        Minhas fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <EstatisticasImg />
        Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarImg />
        Adicionar foto
      </NavLink>
      <button onClick={userLogout}>
        {' '}
        <SairImg />
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
