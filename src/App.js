import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="shadow-md w-[90%] mx-auto">
      <Header />

      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
