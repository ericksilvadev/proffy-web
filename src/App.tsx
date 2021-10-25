import { Switch, Route, useLocation } from 'react-router-dom';
import { Splash, OnboardingOne, OnboardingTwo, Login, Landing, TeacherList, TeacherForm } from './pages';

import './assets/style/main.scss'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={ location } key={ location.pathname }>
        <Route exact path="/" component={ Splash } />
        <Route path="/onboarding-1" component={ OnboardingOne } />
        <Route path="/onboarding-2" component={ OnboardingTwo } />
        <Route path="/login" component={ Login } />
        <Route path="/landing" component={ Landing } />
        <Route path="/study" component={ TeacherList } />
        <Route path="/give-classes" component={ TeacherForm } />
      </Switch>
    </AnimatePresence>
  )
}

export default App
