import React from 'react';
import Onboarding from '../components/Onboarding';
import giveClasses from '../assets/images/give-classes.svg';
import greenBg from '../assets/images/green-onb-bg.svg';


export default function OnboardingOne() {
  return (
    <Onboarding
      title="Ou dê aulas sobre o que você mais conhece"
      icon={giveClasses}
      bg={greenBg}
      id="02."
      link="/login"
    />
  )
}