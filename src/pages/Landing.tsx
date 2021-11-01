import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logoImg from '../assets/images/logo.svg';
import landingImg from '../assets/images/landing.svg';
import studyIcon from '../assets/images/study.svg';
import giveClassesIcon from '../assets/images/give-classes.svg';
import purpleHeartIcon from '../assets/images/purple-heart.svg';

const Landing = () => {
	// const heroVariants = {
	//   start: {
	//     y: 25,
	//     opacity: 0,
	//     transition: {
	//       duration: 0.3
	//     }
	//   },
	//   animate: {
	//     y: 0,
	//     opacity: 1,
	//     transition: {
	//       duration: 0.3
	//     }
	//   }
	// }

	// const headingVariants = {
	//   start: {
	//     y: 25,
	//     opacity: 0,
	//   },
	//   animate: {
	//     y: 0,
	//     opacity: 1,
	//   },
	//   exit: {
	//     y: -25,
	//     opacity: 0,
	//   }
	// }

	return (
		<div className="landing-page">
			<div className="logo-img-container">
				<div className="logo-container">
					<div className="logo-wrapper">
						<img src={logoImg} alt="Proffy" />
						<h2>Sua plataforma de estudos online</h2>
					</div>
				</div>
				<div className="img-wrapper">
					<motion.img
						// variants={ heroVariants }
						// initial="start"
						// animate="animate"
						// exit="start"
						className="hero-img"
						src={landingImg}
						alt="Plataforma de estudos"
					/>
				</div>
			</div>
			<div className="landing-content">
				<h2
				// initial="start"
				// animate="animate"
				// exit="start"
				// transition={{ duration: 0.2, delay: 0.3 }}
				// variants={ headingVariants }
				>
					Seja bem vindo. <br />
					<strong
					// initial="start"
					// animate="animate"
					// exit="start"
					// transition={{ duration: 0.2, delay: 0.5 }}
					// variants={ headingVariants }
					>
						O que deseja fazer?
					</strong>
				</h2>
				<div className="buttons-wrapper">
					<div>
						<Link to="/study">
							<img src={studyIcon} alt="Estudar" />
							Estudar
						</Link>
					</div>

					<div>
						<Link to="/give-classes" className="green">
							<img src={giveClassesIcon} alt="Dar aulas" />
							Dar aulas
						</Link>
					</div>
				</div>

				<span className="total-connections">
					Total de X conexões <br /> já realizadas
					<img src={purpleHeartIcon} alt="Coração roxo" />
				</span>
			</div>
		</div>
	);
};

export default Landing;
