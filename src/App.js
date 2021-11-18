import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layouts from "./Layouts";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ContactUs from './pages/ContactUs/ContactUs'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactUs} />

        </Switch>
      </Layouts>
    </BrowserRouter>
  );
}

export default App;

// "swiper": "6.8.4",
