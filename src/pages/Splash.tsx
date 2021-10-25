import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Redirect, useHistory } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import background from '../assets/images/purple-background.svg';

export default function Splash() {
  if (window.matchMedia('(min-width: 1100px)').matches) return <Redirect to="/login" />

  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push('/onboarding-1'), 3500);
  }, [])

  const bgVariants = {
    initial: {
      opacity: 0.3,
      scale: 1.4,
      rotate: '90deg' 
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      scale: 2,
      transition: { delay: 0.6, duration: 0.4}
    }
  }

  const logoVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.7 }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.4 }
    }
  }

  const subVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 1 }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.4, delay: 0.4 }
    }
  }

  const exitVariants = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
  }


  return (
    <>
      <motion.div
        className="splash"
        style={{ overflow: "hidden" }}
        variants={ exitVariants }
        initial="initial"
        animate="initial"
      >
        <motion.img
          className="bg-img"
          src={background}
          alt="background"
          animate="animate"
          initial="initial"
          variants={ bgVariants }
          exit="exit"
        />
        <motion.img
          className="logo"
          src={logo} alt="Proffy logo"
          variants={ logoVariants }
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <motion.h2
          className="subtitle"
          animate="animate"
          initial="initial"
          variants={ subVariants }
          exit="exit"
        >
          Sua plataforma de <br /> estudos online
        </motion.h2>
      </motion.div>
    </>
  )
}