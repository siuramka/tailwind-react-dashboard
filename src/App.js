import './App.css';
import SideBar from './Sidebar';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParcelList from './ParcelList';
import Login from './Login';

function App() {
  let dataLists = [
    {
        ID : 1,
        customerName : 'Vlad Galbad',
        customerID : '312312325',
        companyName : 'Pigu.lt',
        companyOrderID: '#142141244123',
        deliveryType : 'Plane',
        deliveryInfo : 'SpaceX',
        orderStatus : 3,
        statusStatus : 2,
        lastUpdate : '12312312',
        deliveryStatus : 3,
        hasProblems : 0,
    },
    {
        ID : 2,
        customerName : 'Vlad Galbad',
        customerID : '21312325125',
        companyName : 'Pigu.lt',
        companyOrderID: '#1441234123',
        deliveryType : 'Plane',
        deliveryInfo : 'SpaceX',
        orderStatus : 3,
        statusStatus : 2,
        lastUpdate : '16124124112',
        deliveryStatus : 3,
        hasProblems : 0,
    },
    {
        ID : 3,
        customerName : 'Vlad Galbad',
        customerID : '32514112412425125',
        companyName : 'Pigu.lt',
        companyOrderID: '#14124124123',
        deliveryType : 'Plane',
        deliveryInfo : 'SpaceX',
        orderStatus : 3,
        statusStatus : 2,
        lastUpdate : '16112412412',
        deliveryStatus : 3,
        hasProblems : 0,
    },
    {
      ID : 4,
      customerName : 'Vlad Galbad',
      customerID : '32514112412425125',
      companyName : 'Pigu.lt',
      companyOrderID: '#14124124123',
      deliveryType : 'Plane',
      deliveryInfo : 'SpaceX',
      orderStatus : 3,
      statusStatus : 2,
      lastUpdate : '16112412412',
      deliveryStatus : 3,
      hasProblems : 0,
  },
];
  return (
    
    <Router>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
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
                    <ParcelList data={dataLists}/>
                  </Route>
                  <Route path="/contact">
                    <Home />
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
