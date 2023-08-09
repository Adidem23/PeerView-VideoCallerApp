import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { SocketProvider } from './Providers/Socket';

import { PeerProvider } from './Providers/PeerNew';

import Room from './pages/Room';


function App() {
  return (

    <div className="App" style={{ width: "fit-content", margin: "auto", marginTop: "45px" }}>



      <SocketProvider>
        <PeerProvider>
          <Routes>

            <Route path='/' Component={Home} />

            <Route path='/room/:room' Component={Room} />

          </Routes>
        </PeerProvider>
      </SocketProvider>



    </div>
  );
}

export default App;
