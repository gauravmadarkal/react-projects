import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

class NavigationBar extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }
    refreshPage(props) {
    
    }
    render() {
        return(
        this.state.hidden ? '' :
        <header class="masthead mb-auto">
            <div class="inner">
            <h3 class="masthead-brand"><a href="#">D.</a></h3>
            <nav class="nav nav-masthead justify-content-center" id="topnav">
                <Router>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/" ><a class="nav-link active">Home</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/about"><a class="nav-link">About</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/projects"><a class="nav-link">Projects</a></Link>
                    <Link style={{ textDecoration: 'none', paddingLeft: '20px' }} to="/contacts"><a class="nav-link">Contact</a></Link>
                    <a href="javascript:void(0);" class="burger" onclick="responsiveBurgerIcon()">
                        <i class="fa fa-bars"></i>
                    </a>
                   
                </Router>
            </nav>
            </div>
        </header>
        );
    }
    
}

export default NavigationBar;