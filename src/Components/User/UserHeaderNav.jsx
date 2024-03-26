import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import FeedImg from '../../Assets/feed.svg?react';
import EstatisticasImg from '../../Assets/estatisticas.svg?react';
import AdicionarImg from '../../Assets/adicionar.svg?react';
import SairImg from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
