import './App.css';
import SideBar from './Sidebar';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParcelCard from './ParcelCard';

function App() {
  return (
    <Router>

      <div className="App">
          <div className="flex bg-gray-100">
            <SideBar />
              <main className="flex-grow flex flex-col min-h-screen">
                <Header/>

                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/shipments">
                    <ParcelCard />
                  </Route>
                  <Route path="/contact">
                    <Home />
                  </Route>
                </Switch>
              </main>
          </div>
      </div>
    </Router>
  );
}

export default App;
