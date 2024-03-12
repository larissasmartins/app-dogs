import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
