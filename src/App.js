import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import './styles/App.css';
import './styles/Grid.css';
import MyInfo from './screens/myinfo.js';
import Banner from './components/banner.js';

const Home = () => <div>Home Page</div>;
//const MyInfo = () => <div>MyInfo Page</div>;
const Services = () => <div>Services Page</div>;
//const Contact = () => <div>Contact Page</div>;

const Contact = () => (
  <div>
    <Banner title="ContactPage" />
    <h2>CONTACT Page</h2>
    <p>
      Welcome to our application! This is a simple React app with multiple pages
      and bottom navigation. Feel free to explore and learn more about our services.
    </p>
  </div>
);



const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/"><i className="material-icons">home</i></Link></li>
      <li><Link to="/MyInfo"><i className="material-icons">info</i></Link></li>
      <li><Link to="/services"><i className="material-icons">build</i></Link></li>
      <li><Link to="/contact"><i className="material-icons">mail</i></Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/MyInfo" element={<MyInfo />} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
