import React from 'react';
import "../css/mycard.css"
import Grid from '@material-ui/core/Grid';

function MyCard(projectDetails){
        return(
        <div class="column mycard">
            <img class="card-image" src={require("../assets/img/project-images/"+projectDetails.imageName)}></img>
            <p class="card-name">{projectDetails.description}</p>
            <p class="card-title">{projectDetails.title}</p>
        </div>
        );
}
export default (MyCard);