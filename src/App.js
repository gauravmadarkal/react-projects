import React from 'react';
import './App.css';
import "./css/bootstrap.min.css"
import "./css/cover.css"
import Home from './components/Home';
import Footer from './components/Footer';
import Loader from './components/Loader';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import ResponsiveNav from "./components/ResponsiveNav";

class App extends React.Component{
  constructor(){
    super();
    this.onClick = this.changeActiveElement.bind(this);
  }
  changeActiveElement(event){
    const {id} = event.target;
    var ids = ["nav-about","nav-projects","nav-contact","nav-home","nav-uses"];
    ids.forEach(function(item){ 
      if(item === id){
        document.getElementById(item).style.borderBottomColor = "#880e4f";
      }else{
        document.getElementById(item).style.borderBottomColor = "#fafafa";
      }
    });
  }
  responsiveBurgerIcon() {
    console.log("clicked burger");
    var x = document.getElementById("navbarContent");
    if (x.className === "navbar-nav collapse") {
        x.className += " show fade-in";
    } else {
        x.className = "navbar-nav collapse";
    }
  }
  checkUrl(){
    console.log(window.location.href);
    var ids = ["nav-about","nav-projects","nav-contact","nav-home","nav-uses"];
    var strings = window.location.href.split("/");
    var id = "nav-" + strings[strings.length - 1];
    if(id === "nav-"){
      document.getElementById(ids[3]).style.borderBottomColor = "#880e4f";
    }else{
      ids.forEach(function(item){ 
        if(item === id){
          console.log("clicked: "+item);
          try{
            document.getElementById(item).style.borderBottomColor = "#880e4f";
          }catch{
          }
        }else{
          try{
            document.getElementById(item).style.borderBottomColor = "#fafafa";
          }catch{
          }
        }
      });
   } 
  }

  componentDidMount(){
    this.checkUrl()
  }
  render() {
    return (
      <div id = "mainBody" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Loader/>
        <Router>
        <header class="masthead mb-auto">
            <div class="inner">
            <h3 class="masthead-brand"><a href="/">D.</a></h3>
            <nav class="nav nav-masthead justify-content-center" id="topnav">
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/" ><a class="nav-link active nav-bar-items" id = "nav-home" onClick={this.onClick}>Home</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/about"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-about">About</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/projects"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-projects">Projects</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/uses"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-uses">Uses</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/contact"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-contact">Contact</a></Link>
                    <a class="burger" onClick={this.responsiveBurgerIcon}>
                        <i class="fa fa-align-left fa-2x"></i>
                    </a> 
                    <ResponsiveNav /> 
            </nav>
            </div>
        </header>
        {/* {window.location.href.indexOf("about") > -1?"nav-link active" :} */}
        <Switch>
              <Route exact path="/"  >
                <Home waitBeforeShow={1500}/>
              </Route>
              <Route path="/projects">
                <Projects waitBeforeShow={1500}/>
              </Route>
              <Route path="/about" >
                <About waitBeforeShow={1500}/>
              </Route>
              <Route path="/contact">
                <Contact waitBeforeShow={1500}/>
              </Route>
            </Switch>
        </Router>
        {/* <NavigationBar waitBeforeShow={1500}/> */}
        
      </div>
    );
  }
}
export default App;