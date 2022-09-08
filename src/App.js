import './App.css';
import MainScreen from './component/MainScreenComponent/MainScreen';
import { BrowserRouter as Router,Switch, Route,MemoryRouter } from 'react-router-dom';
import NavigationBar from './component/Navigation/NavigationBar';
import ScreenRoute from './component/Screens/ScreenRoute/ScreenRoute';
import Footer from './component/Screens/Footer/Footer';
function App() {
  return (
    < 
    // className="App"
    >
      <ScreenRoute/>
    </>
  );
}

export default App;
