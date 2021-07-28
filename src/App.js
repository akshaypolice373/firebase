import './App.css';
// import Footer from './Footer/Footer';
// import Header from './Header/Header'
import Body from './Body/Body'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from './Head/Head'
import Foot from './Foot/Foot'

function App() {
  return (
    <Router>
      <div className="App">
      {/* Header of the Website */}
      {/* <Header /> */}
      <Head />
      
      {/* Body Part of the Website */}
      <Body />
      
      {/* Footer of the Website */}
      {/* <Footer /> */}
      <Foot />
    </div>
    </Router>
   
  );
}

export default App;
