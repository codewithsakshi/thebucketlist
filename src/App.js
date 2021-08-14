import './App.css';
import SignupForm from './Component/SignupForm/SignupForm';
import LoginForm from './Component/LoginForm/LoginForm';
import Header from './Component/Header/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';

function App() {
  document.title = 'The Bucket List';
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignupForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
