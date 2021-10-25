import { animate, motion } from 'framer-motion';
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

  const bgVariants = {
    start: {
      opacity: 0,
      transition: { duration: 0.1 }
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    start: {
      opacity: 0,
      y: 25,
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  const titleVariants = {
    start: {
      opacity: 0,
      y: 35,
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -35,
    }
  }

  const pagingVariants = {
    start: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -8,
    }
  }

  const headingTransition = {
    duration: 0.7,
    delay: 0.2
  }

  return (
    <motion.div
      className="onboarding"
      // variants={variants}
      // initial="start"
      // animate="animate"
      // exit="exit"
      // transition={ transition }
    >
      <section className="onboarding-upper">
        <motion.img
          className="bg"
          src={bg}
          alt="background"
          variants={ bgVariants }
          initial="start"
          animate="animate"
          exit="start"
        />
        <motion.img
          className="icon"
          src={icon}
          alt="icon" 
          variants={ iconVariants }
          initial="start"
          animate="animate"
          exit="start"
        />
      </section>
      <section className="onboarding-infos">
        <div className="heading">
          <motion.h1
            variants={ titleVariants }
            initial="start"
            animate="animate"
            exit="start"
            transition={{ delay: 0.1 }}
          >
            {id}
          </motion.h1>
          <motion.h2
            variants={ titleVariants }
            initial="start"
            animate="animate"
            exit="start"
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          className="paging"
          variants={ pagingVariants }
          initial="start"
          animate="animate"
          exit="start"
          transition={{ delay: 0.3 }}
        >
          <div className={ id === '01.' ? 'page-one' : 'page-two' }>
            <div className="first" />
            <div className="second" />
          </div>
          <button onClick={ () => history.push(link) }>
            <img src={arrowIcon} alt="next" className="next" />
          </button>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Onboarding;