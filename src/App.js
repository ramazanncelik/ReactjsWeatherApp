import './App.css';
import { WeatherProvider } from './Context/WeatherContext'
import Home from './Components/Home'

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;