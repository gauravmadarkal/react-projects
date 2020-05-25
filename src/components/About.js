import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import "../css/D-anim.css"
import MyCard from './MyCard';
const projects = [
  {
    id : 1,
    title : "First Project",
    imageName : "3.png",
    description : "lorem ipsum dolor sit amet"
  },
  {
    id : 2,
    title : "Second Project",
    imageName : "2.jpg",
    description : "lorem ipsum dolor sit amet"
  },
  {
    id : 3,
    title : "third Project",
    imageName : "1.png",
    description : "lorem ipsum dolor sit amet"
  },
  {
    id : 4,
    title : "fourth Project",
    imageName : "2.jpg",
    description : "lorem ipsum dolor sit amet"
  }
]
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
              {projects.map( project => 
                <MyCard title={project.title} description={project.description} imageName={project.imageName}/>
              )}
            {/* </div> */}
            {/* <div class="column">
                <MyCard/>
            </div>
            <div class="column">
                <MyCard/>
            </div>
            <div class="column">
                <MyCard/>
            </div> */}
          </div>
        );
    }
}
export default About;