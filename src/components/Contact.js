import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import "../css/D-anim.css"

class Contact extends React.Component{
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
            <main role="main" class="inner cover">
            <h1 class="cover-heading greetings">Contact</h1>
            
          </main>
        );
    }
}

export default Contact;
