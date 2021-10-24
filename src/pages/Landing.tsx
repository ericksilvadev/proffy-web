import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import landingImg from '../assets/images/landing.svg';
import studyIcon from '../assets/images/study.svg';
import giveClassesIcon from '../assets/images/give-classes.svg';
import purpleHeartIcon from '../assets/images/purple-heart.svg';

const Landing = () => {
  return (
    <>
      <div className="landing-page">
        <div className="logo-img-container">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img src={ logoImg } alt="Proffy" />
              <h2>Sua plataforma de estudos online</h2>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              className="hero-img"
              src={ landingImg }
              alt="Plataforma de estudos"
            />
          </div>
        </div>
        <div className="landing-content">
          <h2>
            Seja bem vindo. <br/>
            <strong>O que deseja fazer?</strong>
          </h2>
          <div className="buttons-wrapper">
            <Link to="/study">
              <img src={ studyIcon } alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes">
              <img src={ giveClassesIcon } alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de X conexões <br/> já realizadas
            <img src={ purpleHeartIcon } alt="Coração roxo" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Landing;