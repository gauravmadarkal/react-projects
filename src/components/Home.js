import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import "../css/D-anim.css"
import Footer from './Footer';

class Home extends React.Component{
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
          this.state.hidden ? <div id = "animation" class="shapeshifter play"></div> :
            <main role="main" class="inner cover">
            <h1 class="cover-heading greetings">Hi</h1><h1 class="name">I'm Deepthi.</h1>
            <p class="lead self-description">Professional architect. Take a peek at my work, you want me to do anything for you? Hit me up!!</p>
            <p class="lead">
              <a href="#" class="btn btn-lg btn-secondary learnmore-button">Learn more</a>
            </p>
            <Footer/>
          </main>
        );
    }
}
export default Home;