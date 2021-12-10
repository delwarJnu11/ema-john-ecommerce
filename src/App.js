import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import OrderPlaced from './component/OrderPlaced/OrderPlaced';
import OrderReview from './component/OrderReview/OrderReview';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/orders'>
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path='/orderplaced'>
            <OrderPlaced></OrderPlaced>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
