import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Redirect } from 'react-router';
import logo from '../assets/images/logo.svg';
import background from '../assets/images/purple-background.svg';

export default function Splash() {
  const [redirect, setRedirect] = useState(false);
  const [exit, setExit] = useState(false);
  useEffect(() => {
    setTimeout(() => setExit(true), 2500);
    setTimeout(() => setRedirect(true), 3500);
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
      transition: { delay: 0.8, duration: 0.2}
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

  // const exitVariants = {
  //   initial: {
  //     opacity: 1
  //   },
  //   animate: {
  //     opacity: 0,
  //     transition: { duration: 0.3, type:"spring" }
  //   }
  // }

  if (window.matchMedia('(min-width: 900px)').matches) return <Redirect to="/login" />
  if (redirect) return <Redirect to="/onboarding-1" />
  return (
    <AnimatePresence>
      { !exit &&
        <motion.div
        // variants={ exitVariants }
        className="splash"
        style={{ overflow: "hidden" }}
        // initial="initial"
        // animate="initial"
        // exit="animate"
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
      </motion.div>}
    </AnimatePresence>
  )
}