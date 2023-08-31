import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './Pages/MainRoutes';
import Navbar from './Components/Navbar';
// import { Footer } from './Components/Footer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      {/* <Footer/> */}
    
    </div>
  );
}

export default App;
