import { Switch, Route } from 'react-router';
import { Splash, OnboardingOne, OnboardingTwo, Login, Landing, TeacherList, TeacherForm } from './pages';

import './assets/style/main.scss'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Splash } />
      <Route path="/onboarding-1" component={ OnboardingOne } />
      <Route path="/onboarding-2" component={ OnboardingTwo } />
      <Route path="/login" component={ Login } />
      <Route path="/landing" component={ Landing } />
      <Route path="/study" component={ TeacherList } />
      <Route path="/give-classes" component={ TeacherForm } />
    </Switch>
  )
}

export default App
