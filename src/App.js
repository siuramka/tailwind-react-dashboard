import './App.css';
import SideBar from './Sidebar';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParcelList from './ParcelList';
import Login from './Login';
import useFetch from './useFetch';
import Shipments from './Shipments'
import CreateShipment from './CreateShipment';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <CreateShipment/>
          </Route>
          <div className="flex bg-gray-100">
            <SideBar />
              <main className="flex-grow flex flex-col min-h-screen">
                <Header/>

                <Switch>

                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/shipments">
                    <Shipments />
                  </Route>
                </Switch>
              </main>
          </div>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
