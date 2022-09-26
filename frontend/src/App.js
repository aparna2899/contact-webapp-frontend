import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ContactDetails from './pages/ContactDetail';
import Home from './pages/Home';
import Message from './pages/Message';
import MessageDetail from './pages/MessageDetail';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactDetails} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/messagelist" component={MessageDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
