import React from 'react' ;
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom' ;
import './App.css' ;
import Home from './components/Home' ;
import Book1 from './components/Book1' ;
import {FontAwesome} from 'react-icons/fa' ;
import {FaArrowRight} from 'react-icons/fa';
import Book2 from './components/Book2';
import Book3 from './components/Book3';
import Book4 from './components/Book4';
import Contact from './components/Contact' ;


class App extends React.Component{
  
  render(){
    const NavBar = ()=>{
      return(
        <main className="navbar">
        
          <ul>
            <li><Link className="link" to="/" id="active">FreeBusinessBooks </Link></li>
            <li><Link className="link" to="/book1">Book 1<FaArrowRight/> </Link></li>
            <li><Link className="link" to="/book2">Book 2<FaArrowRight/> </Link></li>
            <li><Link className="link" to="/book3">Book 3<FaArrowRight/> </Link></li>
            <li><Link className="link" to="/book4">Book 4<FaArrowRight/> </Link></li>
            <li><Link className="link" to="/contact">Contact Use<FaArrowRight/> </Link></li>
          </ul>
        </main>
      )
    }

    return(
      <div style={{backgroundColor: "#1D1D1D"}}>
        <main>
          <BrowserRouter>
            <NavBar />
            <Route path="/" component={Home} exact/>
            <Route path="/book1" component={Book1} />
            <Route path="/book2" component={Book2} />
            <Route path="/book3" component={Book3} />
            <Route path="/book4" component={Book4} />
            <Route path="/contact" component={Contact} />
          </BrowserRouter>
        </main>
      </div>
    )
  }
}


export default App ;