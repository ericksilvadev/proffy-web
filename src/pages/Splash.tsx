import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
// import { gsap } from 'gsap';
import logo from '../assets/images/logo.svg';
import background from '../assets/images/purple-background.svg';

export default function Splash() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // gsap.fromTo('.bg-img',
    //   { autoAlpha: 0, scale: 1.4 },
    //   {
    //     duration: 0.6,
    //     autoAlpha: 1,
    //     scale: 1,
    //     ease: 'none',
    //   }
    // )
    // gsap.fromTo('.logo',
    //   { autoAlpha: 0, y: 20 },
    //   {
    //     delay: 0.7,
    //     duration: 0.4,
    //     autoAlpha: 1,
    //     y: 0,
    //     ease: 'none',
    //   }
    // )
    // gsap.fromTo('.subtitle',
    // { autoAlpha: 0, y: 20 },
    // {
    //   delay: 1,
    //   duration: 0.4,
    //   autoAlpha: 1,
    //   y: 0,
    //   ease: 'none',
    // }
    // )
    // setTimeout(() => gsap.to(
    //   '.splash', { x: -window.innerWidth, ease: 'none', duration: .7 }
    //   )
    // , 3500);
    setTimeout(() => setRedirect(true), 4200);
  }, [])
  if (window.matchMedia('(min-width: 900px)').matches) return <Redirect to="/login" />
  if (redirect) return <Redirect to="/onboarding-1" />
  return (
    <div className="splash">
      <img className="bg-img" src={background} alt="background" />
      <img className="logo" src={logo} alt="Proffy logo" />
      <h2 className="subtitle">Sua plataforma de <br /> estudos online</h2>
    </div>
  )
}