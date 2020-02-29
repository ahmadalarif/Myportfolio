import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import  Education from'./education'
import Experience from'./experience'
import Skills from './skills';
import Profileimage from './profileimage.jpeg'

class Resume extends Component {
    render() {
        return (
            <div> 
                <Grid>
                    <Cell col={3}>
                        <div style={{textAlign: 'center' , borderRadius: '50%'}}>
                            <img src={Profileimage} alt='Avatar' style={{height: '200px',  borderRadius: 300/ 2}}/>
                        </div>

                        <h2 style={{paddingTop: '0em'}}>Ahmad Al Arif</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer || Full-Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>I am a software engineer that has skills in both the back-end of web applications and the front-end</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Al Rayyan Dist, Jeddah , Kingdome Of Saudi Arabia </p>
                        <h5>Phone</h5>
                        <p>(+966)56 56 06 064</p>
                        <p>Email</p>
                        <p>alarif3@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                        startYear={2019}
                        endYear={2020}
                        schoolName="General Assembly & Misk Academy"
                        schoolDescription="Software Engineering immersive programme | Full Stack Web Development"
                        />

                        <Education
                        startYear={2010}
                        endYear={2015}
                        schoolName="King Abdulaziz University"
                        schoolDescription="Bachelor of Arts from the Faculty of Arts and Humanities  
                        in English Language"
                        />
                       <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                         startYear={2010}
                         endYear={2016}
                         jobName={<h4>Sales Supervisor | Sale Advanced Co.Ltd(STC)</h4>}
                         jobDescription=""
                         />
                         <Experience
                         startYear={2005}
                         endYear={2009}
                         jobName={<h4>Experience Sales Executive | Mobily</h4>}
                         jobDescription=""
                         />
                         <hr style={{borderTop: '3px solid #e22947'}}/>
                         <h2>Skills</h2>
                             <Skills 
                         skill="JavaScript"
                         progress={100}
                         />
                        <Skills 
                         skill="HTML/CSS"
                         progress={100}
                         />
                         <Skills 
                         skill="JQuery"
                         progress={90}
                         />
                         <Skills 
                         skill="Ruby & Ruby On Rails"
                         progress={90}
                         />
                         <Skills 
                         skill="SQL"
                         progress={90}
                         />
                         <Skills 
                         skill="MongoDB"
                         progress={80}
                         />
                         <Skills 
                         skill="Node.js"
                         progress={90}
                         />
                         <Skills 
                         skill="Express.js"
                         progress={90}
                         />
                         <Skills 
                         skill="React"
                         progress={95}
                         />
                         <Skills 
                         skill="RESTful API"
                         progress={90}
                         />
                         <Skills 
                         skill="Presentation Skills"
                         progress={100}
                         />
                        </Cell>
                    </Grid>
                     </div>
        );
    }
}

export default Resume;