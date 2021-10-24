import { Link } from 'react-router-dom';
import { FilterTeacher } from '.';
import arrowIcon from '../assets/images/back.svg';
import logo from '../assets/images/logo.svg';
import rocketIcon from '../assets/images/rocket.svg';
import smileIcon from '../assets/images/smile.svg';

interface HeaderProps {
  title: string;
  subtitle: string;
  teacher: boolean;
}

const teacherSideText = () => (
  <>
    <img src={ rocketIcon } alt="foguete" />
    <p>Preparare-se!<br/> Vai ser o máximo.</p>
  </>
)

const studentSideText = () => (
  <>
    <img src={ smileIcon } alt="sorriso" />
    Nós temos X <br/> professores.
  </>
)

const Header: React.FC<HeaderProps>= ({ title, subtitle, teacher }) => {
  return (
    <header className="header">
      <div className="top-header">
        <Link to="/landing">
          <img src={ arrowIcon } alt="Voltar" />
        </Link>
        <h1>{title}</h1>
        <img src={ logo } alt="Proffy" />
      </div>

      <div className="lower-header">
        <div className="heading">
          <h2 className="subtitle">{subtitle}</h2>
          {
            teacher ?
            <p>
              O primeiro passo, é preencher esse formulário de inscrição.
            </p>
            : null
          }
        </div>
        
        <div className="side-text">
          { teacher ? teacherSideText() : studentSideText() }
        </div>
      </div>

      {!teacher && <FilterTeacher />}
    </header>
  )
}

export default Header;