import Onboarding from '../components/Onboarding';
import studyIcon from '../assets/images/study.svg';
import purpleBg from '../assets/images/purple-onb-bg.svg';


export default function OnboardingOne() {
  return (
    <Onboarding
      title="Encontre vários professores para te ensinar"
      icon={studyIcon}
      bg={purpleBg}
      id="01."
      link="/onboarding-2"
    />
  )
}
