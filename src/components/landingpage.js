import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl'
// import Profileimage from './profileimage.jpeg'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}> 
             <Grid className="landing-grid">
                 <Cell col={12}>
                     {/* <img src={Profileimage} alt='Avatar' style={{height: '200px',  borderRadius: 400/ 2}}/>  */}
                     <div className="banner-text">
                         <h1>Full Stack Web Developer</h1>
                         <hr/>
                         <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | SQL | MogoDB | Ruby | Ruby On Rails | jQuery | RESTful API | Git | Github</p>

                         <div className="social-links">
                             {/* LinkedIn */}
                             <a href="https://www.linkedin.com/in/ahmadalarif/" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-linkedin-square" aria-hidden="true"/>
                             </a>
                             {/* Github */}
                             <a href="https://github.com/ahmadalarif" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-github-square" aria-hidden="true"/>
                             </a>
                             {/* Youtube */}
                             <a href="https://player.vimeo.com/video/396622326" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen    rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-youtube-square" aria-hidden="true"/>
                             </a>
                         </div>
                     </div>
                     
                 </Cell>
             </Grid>
            </div>
        );
    }
}

export default Landing;