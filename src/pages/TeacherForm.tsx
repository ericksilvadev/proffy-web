import { Header } from '../components';
import { weekDay } from '../helpers/filterFormOptions';
import warningIcon from '../assets/images/warning.svg';

const TeacherForm = () => {
  return (
    <div className="teacher-form-page">
      <Header
        title="Dar aulas"
        subtitle="Que incrível que você quer dar aulas."
        teacher
      />
      <main className="teacher-form-container">
        <h1>Seus dados</h1>

        <form className="teacher-form">
          <fieldset>
            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="last-name">Sobrenome</label>
              <input type="text" id="last-name" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="tel" id="whatsapp" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="whatsapp">URL da sua imagem de perfil</label>
              <input type="tel" id="whatsapp" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="bio">Biografia</label>
              <textarea name="bio" id="bio" />
              <span className="bio-counter">0/500</span>
            </div>
          </fieldset>

          <h1>Sobre a aula</h1>

          <fieldset>
            <div className="input-wrapper">
              <label htmlFor="subject">Materia</label>
              <input type="text" id="subject" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="cost">Custo da sua hora</label>
              <input type="text" id="cost" autoComplete="no" />
            </div>
          </fieldset>

          <div className="schedule-heading">
            <h1>Horários disponíveis</h1>
            <button type="button">+ Novo</button>
          </div>

          <fieldset>
            <div className="select-wrapper">
              <label htmlFor="week-day">Dia da semana</label>
              <select name="week-day" id="week-day">
                <option value="" selected hidden disabled>
                  Selecione
                </option>
                {weekDay.map((day, i) => (
                  <option value={i}>{day}</option>
                ))}
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="from">Das</label>
              <input type="text" id="from" autoComplete="no" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="to">Até</label>
              <input type="text" id="to" autoComplete="no" />
            </div>
          </fieldset>
        </form>
      </main>
      <footer>
        <div className="warning">
          <img src={warningIcon} alt="Atenção!" />
          <div>
            <strong>Importante!</strong>
            <p>Preencha todos os dados corretamente.</p>
          </div>
        </div>
        <button className="btn green">Salvar cadastro</button>
      </footer>
    </div>
  );
};

export default TeacherForm;
