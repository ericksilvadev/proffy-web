import { Switch, Route } from 'react-router';
import { Splash, OnboardingOne, OnboardingTwo, Login } from './pages';

import './assets/style/main.scss'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Splash } />
      <Route path="/onboarding-1" component={ OnboardingOne } />
      <Route path="/onboarding-2" component={ OnboardingTwo } />
      <Route path="/login" component={ Login } />
    </Switch>
  )
}

export default App
