import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import "../css/D-anim.css"
import "../css/background-anim.css"
const aboutme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hidden : true};
  }
  componentDidMount() {
      setTimeout(() => {
          this.setState({hidden: false});
      }, this.props.waitBeforeShow);
  }
    render() {
        return(
          this.state.hidden ? <div id = "animation" class="shapeshifter play"></div>  :
          <div class="row">
            <img class="hero-image" src={require("../assets/img/aboutmyself.svg")}></img>
              <div class="column aboutcontent">
                <h1 class="cover-heading about-heading bg-anim">About Myself</h1>
                  <p class="lead detailed-description">{aboutme}</p>
                <p class="lead">
                  <a href="/projects" class="btn btn-lg btn-secondary aboutme-buttons">My Work</a>
                  <a href="/contact" class="btn btn-lg btn-secondary aboutme-buttons">Get in touch</a>
                </p>
              </div>
            </div>
        );
    }
}
export default About;