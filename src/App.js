import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import Navs from './Componets/Navbar/Navs';
import Header from './Componets/Home/Header';
import Footer from './Componets/Footer/Footer';
function App() {
  return (
    <>
      <Navs/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
