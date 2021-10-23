import React, { useState, ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import logo from '../assets/images/logo.svg';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setForm({...form, [name]: value})
  }

  return (
    <div className="login-page">
      <div className="upper-login">
        <div className="title">
          <img className="login-logo" src={logo} alt="login-logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </div>
      <div className="form-container">
        <form className="login-form">
          <div className="heading">
            <h3>Fazer login</h3>
            <Link to="/sign-in">Criar uma conta</Link>
          </div>
          <input
            placeholder="E-mail"
            type="text"
            name="email"
            className="first"
            value={ form.email }
            // onChange={ handleChange }
          />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            className="second"
            value={ form.password }
            // onChange={ handleChange }
          />
          <div className="complement">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembrar-me
            </label>
            <Link to="/recover-password">Esqueci minha senha</Link>
          </div>
          <Button
            disabled={ true }
            name="Entrar"
            link="/main"
            color="green"
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  )
}
