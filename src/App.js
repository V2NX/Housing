import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home'
import Login from './Login';
import Register from './Register';
import Header from './header';
import Buy from './Buy';
import Sale from './Sale';
import Apartment from './Apartmemt';
import Footer from './Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
  <Router>
    <div className="app">
    
      <Routes>
        <Route path='/Login' element={
          <>
          <Login/>
          </>
        }
        />
        <Route path='/Register' element={
          <>
        
          <Register/>
          </>
        }
        />
        <Route path='/Contact' element={
        <>
        <Header />
          <Contact/>
        </>
         }
        />
        <Route path='/Buy' element={
        <>
        <Header />
          <Buy/>
        </>
         }
        />
        <Route path='/Sale' element={
        <>
        <Header />
          <Sale/>
        </>
         }
        />
        <Route path='/About' element={
        <>
        <Header />
          <About/>
        </>
         }
        />
        <Route path='/Apartment' element={
        <>
        <Apartment/>
        </>
      }
      />
        
       
        <Route  path='/Home' element={<>
          <Header />
          <Home />
        </>
        } />
        <Route  path='/' element={
        <>
          <Header />
          <Home />
        </>
        } />
      </Routes>
      
    </div>
    </Router>
   
    
    </>
  );
}

export default App;
