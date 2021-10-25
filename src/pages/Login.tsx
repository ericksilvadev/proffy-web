import { useState, ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '../components';
import logo from '../assets/images/logo.svg';
import openEye from '../assets/images/password-visible.svg'
import closedEye from '../assets/images/password-not-visible.svg'

export default function Login() {
  const [passwordVisibility, setVisibility] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const eyeIcon = passwordVisibility ? closedEye : openEye;
  const isEmailEmpty = form.email ? 'not-empty' : '';
  const isPassEmpty = form.password ? 'not-empty' : '';

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setForm({...form, [name]: value})
  }

  const variants = {
    start: {
      opacity: 0,
      transition: { duration: 0.2 }
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.2 }
    }
    
  }

  return (
    <motion.div
      className="login-page"
      initial="start"
      animate="animate"
      exit="start"
      variants={ variants }
    >
      <header className="upper-login">
        <div className="title">
          <img className="login-logo" src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </header>
      <main className="form-container">
        <form className="login-form">
          <div className="heading">
            <h3>Fazer login</h3>
            <Link to="/sign-in">Criar uma conta</Link>
          </div>
          <div className="inputs">
            <div className={`${isEmailEmpty} input-block`} data-placeholder="Email">
              <input
                type="text"
                name="email"
                className="first"
                // value={ form.email }
                onChange={ handleChange }
              />
            </div>
            <div className={`${isPassEmpty} input-block`} data-placeholder="Senha">
              <input
                type={ passwordVisibility ? 'text' : 'password' }
                name="password"
                className="second"
                // value={ form.password }
                onChange={ handleChange }
              />
              <button
                type="button"
                className="show-password"
                onClick={ () => setVisibility(!passwordVisibility) }
              >
                <img
                  src={ eyeIcon }
                  alt="mostrar/esconder senha"
                />
              </button>
            </div>
          </div>
          <div className="complement">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembrar-me
            </label>
            <Link to="/recover-password">Esqueci minha senha</Link>
          </div>
          <Button
            disabled={ false }
            name="Entrar"
            link="/landing"
            color="green"
            onClick={() => {}}
          />
        </form>
      </main>
    </motion.div>
  )
}
