import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'; 



import {Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';


//import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';





class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state= {
      title: 'Fawad',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
    ],

    home: {
      title: 'React Portfolio',
      subTitle: 'This is not easy',
      text: 'This is the Homepage'
    },

    about: {
      title: 'About me'
    },

    contact: {
      title: 'Contact Me'
    }


    }
  }
  
  
  render() {
    return (
      <Router>
     <Container className="p-0" fluid={true}>

       <Navbar className="border-bottom" bg="transparent" expand="lg">
         <Navbar.Brand>Fawad</Navbar.Brand>

         <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
         <Navbar.Collapse id="navbar-toggle">
           <Nav className="ml-auto">
             <Link className="nav-link" to ="/">Home</Link>
             <Link className="nav-link" to ="/About">About</Link>
             <Link className="nav-link" to ="/Contact">Contact</Link>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/" exact render={() => <AboutPage title={this.state.about.title}/> } />
            <Route path="/" exact render={() => <ContactPage title={this.state.contact.title} /> } />
 
           </Nav>


         </Navbar.Collapse>





 
       </Navbar>


     <Footer />


     </Container>
     </Router>
    

    );
  }
}

export default App;
