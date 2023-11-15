
import './App.css';
import { Home } from './components/Home';
import Profile from './components/Prifile'
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>react toolkit dispatch and reducer</h1>
      <Profile/>
      <User/>
      <hr />
      {/* <Home/> */}
    </div>
  );
}

export default App;
