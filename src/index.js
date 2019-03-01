import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import defaultTheme from './theme';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Landing from './pages/common/landing';
import Login from './pages/common/login';

import CalendarItem from './pages/salon/calendar-item';
import Navigation from './pages/salon/navigation';

import Register from './pages/client/register';

const SalonLogin = () => <Login salon />;
const ClientLogin = () => <Login />;

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Landing} />

        <Route path="/salao/entrar" component={SalonLogin} />
        <Route path="/cliente/entrar" component={ClientLogin} />
        <Route path="/cliente/registro" component={Register} />

        <Route path="/salao/inicio" component={Navigation} />
        <Route path="/cliente/inicio" component={Navigation} />

        <Route path="/agendamento/:id" component={CalendarItem} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
