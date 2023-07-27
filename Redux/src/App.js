import './App.css';
import { Routes, Route, } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './tools/Navbar';
import store from './store/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/cart' Component={Cart} />
        </Routes>
      </Provider>

    </>

  );
}

export default App;