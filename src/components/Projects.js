import React from 'react';
import "../css/bootstrap.min.css"
import "../css/D-anim.css"
import "../css/projects.css"
import "../css/mycard.css"
import MyCard from './MyCard';
import Footer from './Footer';
const projects = [
  {
    id : 1,
    title : "First Project",
    imageName : "1.jpg",
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
    title : "Third Project",
    imageName : "3.jpg",
    description : "lorem ipsum dolor sit amet"
  },
  {
    id : 4,
    title : "Fourth Project",
    imageName : "4.jpg",
    description : "lorem ipsum dolor sit amet"
  }
]

class Projects extends React.Component{
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
          <div className="project-cards">
            <h1 className="my-projects">My Work</h1>
            <div class="row">
              {projects.map( project => 
                <MyCard title={project.title} description={project.description} imageName={project.imageName}/>
              )}
            </div>
            <Footer/>
          </div>
        );
    }
}
export default Projects;