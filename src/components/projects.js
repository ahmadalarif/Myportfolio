import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };

    };
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-body">
                    <h1>Project #1 Connect4</h1>
                    
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66gz_MKrsC1sfn8uU-iS47A0rK4GDqwVwYMYrWspCSMbpzYrfFA&s) center / cover'}}>Project #1/ Connect 4</CardTitle>
                    <CardText>
                        Ahmad Al Arif Projects
                    </CardText>
                    <CardActions>

                        <Button raised href='https://github.com/ahmadalarif/connect4'>GitHub</Button>
                         <Button raised href='https://codepen.io/alarif/project/editor/XmWJpq'>CodePen</Button>
                         <Button raised href='https://ahmadalarif.github.io/connect4/'>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                     </Card>
                </div>
            )
        }else if(this.state.activeTab === 1) {
            
            return (
                
                <div className="projects-body">
                    <h1>Project #2 Tune App</h1>
                  
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:
                'url(https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png) center / cover'}}>Project #2 Tune App</CardTitle>
                <CardText>
                    Ahmad Al Arif Projects
                </CardText>
                <CardActions border>
                    <Button colored href='https://github.com/ahmadalarif/tune'>GitHub</Button>
                     <Button colored href="">CodePen</Button>
                    <Button colored href="">LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
            
        }else if(this.state.activeTab === 2 ) {
            
            return (
                <div className="projects-body">
                    <h1>Project #3 Barber App</h1>
                    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'fff', height: '176px', background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEYV5iIJRBx_XaMBs0LSDq-7SMm6YxaRIJ80uWCcfr-9oFnqCQg&s) center / cover'}}></CardTitle>
                    <CardText>
                    Ahmad Al Arif Projects
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/ahmadalarif/Barber-react'>GitHub</Button>
                        <Button colored href=''>VSCode</Button>
                        <Button colored href=''>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                    </Card>
                    </div>
                    
            )
        } else if (this.state.activeTab === 3 ) {
            return (
                <div className="projects-body">
                    <h1>Project #4 Exam App</h1>
                    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#grey', height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuX-rP8hRf1lJ8G5agG7PxxAuuQoOcfNoVYEwAoNFhQggvlz2gww&s) center / cover'}}></CardTitle>
                <CardText>
                    Ahmad Al Arif Projects
                </CardText>
                <CardActions border>
                    <Button colored href='https://github.com/ahmadalarif/project-4-test/tree/dev'>GitHub</Button>
                    <Button colored href=''>VSCode</Button>
                    <Button colored href=''>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 4 ) {
            return (
                <div className="projects-body">
                    <h1>Project #5 Menu App</h1>
                    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#grey', height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT07wwmjoCracdGnizGVPxA8YeLPoip3acFSw&usqp=CAU) center / cover'}}></CardTitle>
                <CardText>
                    Ahmad Al Arif Projects
                </CardText>
                <CardActions border>
                    <Button colored href='https://github.com/ahmadalarif/gatsby-Brato-s-Restaurant-coffee-master'>GitHub</Button>
                    <Button colored href=''>VSCode</Button>
                    <Button colored href='https://awesome-varahamihira-16b9b2.netlify.app/'>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
            }
    }
    render() {
        return (
        <div className="projects-body">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>JavaScript/HTML/CSS</Tab>
                <Tab>ruby/ruby on rails</Tab>
                <Tab>Ruby/React</Tab>
                <Tab>React/MongoDB</Tab>
                <Tab>React/Gatsby</Tab>
            </Tabs>

            <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
         </div>
        );
    }
}

export default Projects;