import { weekDay } from '../helpers/filterFormOptions';

import favoriteIcon from '../assets/images/favorite.svg';
// import removeFavoriteIcon from '../assets/images/remove-favorite.svg';
import whatsappIcon from '../assets/images/whatsapp.svg';
import arrowIcon from '../assets/images/back.svg';

// interface TeacherCardProps {
//   avatar?: string;
//   name?: string;
//   subject?: string;
// }

const TeacherCard = () => (
  <div className="teacher-card">
    <div className="teacher-info">
      <div className="heading">
        <img src="https://github.com/ericksilvadev.png" alt="erick" />
        <div className="title-wrapper">
          <h1 className="name">Erick Silva</h1>
          <h2 className="subject">Matemática</h2>
        </div>
      </div>
      <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit excepturi quos accusamus enim. Eligendi suscipit mollitia repudiandae quasi! Eum, atque fuga molestiae excepturi commodi in libero numquam inventore accusantium debitis unde repudiandae beatae temporibus consequatur mollitia similique qui eaque dolores dolor tempora nihil deleniti assumenda. Sed architecto aut veniam.
      </p>
    </div>
    <div className="teacher-schedule">
      <div className="schedule-heading">
        <span>Dia</span>
        <span>Horário</span>
      </div>
      { weekDay.map((day, i) => {
        return (
          <div className="day">
            <span className="week-day">{ day }</span>
            <img src={ arrowIcon } alt="Seta para a direita" />
            <span className="hour">00h - 23h</span>
          </div>
        )
      }) }
    </div>
    <footer className="price-contact">
      <div className="price">
        <span>Preço/hora</span>
        <strong>R$ 80,00</strong>
      </div>
      <div className="buttons">
        <button className="favorite btn">
          <img src={ favoriteIcon } alt="Favoritar" />
        </button>
        <button className="contact btn green">
          <img src={ whatsappIcon } alt="WhatsApp" />
          Entrar em contato
        </button>
      </div>
    </footer>
  </div>
)

export default TeacherCard;
