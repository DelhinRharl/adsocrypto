import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup/>
      <Signin/>
      <Landing/>
    </div>
  );
}

export default App;