import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { gsap } from 'gsap';
import arrowIcon from '../assets/images/back.svg';

interface OnboardingProps {
  title: string;
  icon: string;
  bg: string;
  id: string;
  link: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ title, icon, bg, id, link }) => {
  const history = useHistory();
  // useEffect(() => {
  //   gsap.fromTo('.onboarding',
  //     { autoAlpha: 0, scale: 0.8 },
  //     { autoAlpha: 1, scale: 1, duration: .3, ease: 'none' }
  //   )
  // }, [])

  const handleClick = () => {
    // gsap.fromTo('.onboarding',
    //   { x: 0 },
    //   { x: -window.innerWidth, duration: .4, ease: 'none' }
    // )

    setTimeout(() => history.push(link), 400)
  }

  return (
    <div className="onboarding">
      <section className="onboarding-upper">
        <img className="bg" src={bg} alt="background" />
        <img className="icon" src={icon} alt="icon" />
      </section>
      <section className="onboarding-infos">
        <div className="heading">
          <h1>{id}</h1>
          <h2>{title}</h2>
        </div>
        <div className="paging">
          <div className={ id === '01.' ? 'page-one' : 'page-two' }>
            <div className="first" />
            <div className="second" />
          </div>
          <button onClick={ handleClick }>
            <img src={arrowIcon} alt="next" className="next" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Onboarding;