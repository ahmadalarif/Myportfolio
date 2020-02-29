import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';
import IMG_5399 from './IMG_5399.jpeg'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contac-grid">
                    <Cell col={3}>
                        <img src={IMG_5399} alt='IMG_5399' style={{borderRadius: 400/ 2, width: '200px',height: '200px'}}/>
                    </Cell>
                    <Cell col={7}>
                        <h6 >If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.</h6>
                        <hr/>
                        <div className="contact-list">
                        <List>
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color:'white', backgroundColor:'rgb(65, 131, 196)', padding: '5px', borderRadius:'5px'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                <a style={{WebkitTextFillColor: 'white'}} data-rel="external" href="tel:(+966) 56 56 06 064">(+966) 56 56 06 064</a>                           
                                </ListItemContent>
                          </ListItem>

                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color:'white', backgroundColor:'orangered', padding: '5px', borderRadius: '10px'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                <a style={{WebkitTextFillColor: 'wheat'}}  href={"mailto:" + this.props.email}>alarif3@gmail.com</a>
                                </ListItemContent>
                          </ListItem>

                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color:'white' ,backgroundColor:'rgb(14, 118, 168)', padding: '5px', borderRadius: '10px'}}>
                                <i className="fab fa-linkedin" aria-hidden="true"/>
                                <a style={{WebkitTextFillColor: 'white'}} href="https://www.linkedin.com/in/ahmadalarif"> My LinkedinProfile</a>
                                </ListItemContent>
                          </ListItem>

                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: "white", backgroundColor:'rgb(0, 175, 240)', padding: '5px', borderRadius: '10px'}}>
                                <i className="fab fa-skype" aria-hidden="true"/>
                                <a style={{WebkitTextFillColor: 'white'}} href="https://join.skype.com/invite/n7uiYhM7dknY">Skype</a>
                                </ListItemContent>
                          </ListItem>

                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', backgroundColor:'rgb(74, 21, 75)', padding: '5px', borderRadius: '10px'}}>
                                <i className="fab fa-slack" aria-hidden="true" style={{color: 'white'}}></i>
                                <a style={{WebkitTextFillColor: 'white'}} href="https://app.slack.com/client/TA2AHQDQ8/DPVTCQBLK/user_profile/UQ97L2F39">SlackMe</a>
                                </ListItemContent>
                          </ListItem>

                        </List>
                        </div>                        
                    </Cell>
                    </Grid> 
                 </div>
        );
    }
}

export default Contact;