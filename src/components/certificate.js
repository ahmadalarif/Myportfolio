import React, { Component } from 'react';
import { Card, CardTitle, CardText,CardMenu } from 'react-mdl';
import Cr from './Cr.png';
import BADegree from './BADegree.png'


class certificate extends Component {
    render() {
        return (
            <div className='certificate-body'>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#ffff', height: '340px'}}><img src={Cr} alt='cr' style={{ width:'810px', overflow: 'hidden', position: 'center', margin: 'auto',crop:"fill", effect:"sepia", radius:'20'}}/></CardTitle>
    <CardText>Full stack web devlopment certificate</CardText>
    <CardMenu style={{color: '#fff'}}>
    </CardMenu>
            </Card>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '340px'}}><img src={BADegree} alt='cr' style={{ width:'810px', overflow: 'hidden', position: 'center', margin: 'auto',crop:"fill", effect:"sepia", radius:'20'}}/></CardTitle>
                <CardText>Bachelor Degree</CardText>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>
                        </div>
        );
    }
}

export default certificate;