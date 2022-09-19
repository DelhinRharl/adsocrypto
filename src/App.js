import './App.css';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Signup/>
      <Signin/>
      <Landing/>
    </div>
  );
}

export default App;