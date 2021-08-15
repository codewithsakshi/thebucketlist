import './App.css';
import SignupForm from './Component/SignupForm/SignupForm';
import LoginForm from './Component/LoginForm/LoginForm';
import Header from './Component/Header/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';

function App({ firebase }) {
  document.title = 'The Bucket List';
  return (
    <BrowserRouter>
      <Header firebase={firebase} />
      <Switch>
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/login'>
          <LoginForm firebase={firebase} />
        </Route>
        <Route path='/signup'>
          <SignupForm firebase={firebase} />
        </Route>
        <Route path='/'>
          <Home firebase={firebase} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
