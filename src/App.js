import React,{Component} from 'react';
import './App.css';
import './animate.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
           <Header style={{background:'#000'}}  className="header-color" title ={<Link style={{textDecoration:'none', color:'#fff'}}  to ='/'>webdevShekhar</Link> } scroll>
               <Navigation >
                 <Link className='links' style={{color:'#fff'}} to="/about">About</Link>
                 <Link className='links' style={{color:'#fff'}} to="/labs">Labs</Link>
                 <Link className='links' style={{color:'#fff'}} to="/resume">Resume</Link>
                 <Link className='links' style={{color:'#fff'}} to="/contact">Contact</Link>
               </Navigation>
           </Header>
           <Drawer className='drawer' style={{background:'#000',height:'45%',color:'#fff'}} >
               <Navigation>
                <Link className='links-n'style={{textDecoration:'none',color:'orange'}}  to ='/'>webdevShekhar</Link>
                <Link  style={{color:'white'}} to="/about">About</Link>
                <Link  style={{color:'white'}} to="/labs">Labs</Link>
                <Link  style={{color:'white'}} to="/resume">Resume</Link>
                <Link  style={{color:'white'}} to="/contact">Contact</Link>
               </Navigation>
           </Drawer>
           <Content>
               <div className="page-content" />
               <Main/>
           </Content>
       </Layout>
     </div>
          );
        }
      }
export default App;
