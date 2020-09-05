import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Logo from './LogoSize_Apple_icon_ByTailorBrands/logo_size-removebg-preview.png'  


class App extends Component {
  render(){
    return (
      <div>
          <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <div>
                <img src={Logo} alt='logo' width="60"
        height="60"  />
            </div>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/certificate">Certificate</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/certificate">Certificate</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        <Content>
            <div className="page-content" />
            <Main></Main>
         </Content>
            </div>

    );
  }
}
  

export default App;
