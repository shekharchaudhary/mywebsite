import React,{Component} from 'react';
import { Grid, Cell, Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import Socialmediia from './socialmedia';

class HomePage extends Component {

  render(){
    return(
      <div style={{width:'100%', margin:'auto',background:'url(http://wall2born.com/data/out/632/image-43848235-wallpaper-lamborghini.jpg) center / cover'}}>
        <Grid className = "homepage-grid">
          <Cell col={12}>
            <img
              src = {require('./image/3.jpg')}
              alt = "avatar"
              className ="avatar-img"
              />
              <div className ="homepage-text" >
                <h2>Frontend Developer/<span style={{color:'#2bb3c0', fontSize:'35px'}}>UI</span>developer</h2>
                <hr/>
                <h6 style={{color:'#888'}}><span className='homepage-h6-1'>Html5/Css3</span> |<span className='homepage-h6-2'> Bootstrap</span> | <span className='homepage-h6-3'style={{color:'orange'}}>JavaScript </span>| <span className='homepage-h6-4'> Java </span>| <span className='homepage-h6-5'> React </span>| <span className='homepage-h6-6'> NodeJs</span> </h6>
                <div className ='homepage-text1' style={{display:'flex'}}>
                  <Grid>
                   <Cell className = ' homaepage-cell1' col={5}>
                     <p> Web/UI Developer with 5+ years hands on experience in designing and developing user friendly web sites, web application, mobile application, application architecture, game Development, analysis and implementation of complex software systems with a board range of programming languages and platforms. Experienced in testing, debugging and maintaining the codes. Certified in advance programing language and variety of trending front end developing tools and technologies.
                     <span style={{color:'#2bb3c0'}}>Authorized to work in US for any employer</span>.
                     </p>
                   </Cell>
                   <Cell className = ' homaepage-cell2' col={7}>
                     <p>
                      <span style={{color:'#2bb3c0'}}>Moreover</span> in all my heart i am passionate  with everything i sink my teeth in. Programming, writing codes, animation and web designing has been my passion since my dad bought me a computer. Working as UI/Frontend developer, i am not only seeing how much money i making, but rather seeing my passion growing and progressing in daily basis, i am seeing leverging my skills day by day. I keep myself up to date with new tools, technologies and new frameworks. Connecting with new people and learning about new  ideas and opportunities have help me to come this far. If you want to know me better, go to my contact page, all my infomartion is there.
                     </p>
                    </Cell>
                  </Grid>
                </div>
            </div>
          </Cell>
        </Grid>
        <Socialmediia
        />
        <Footer size="mega">
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href="/about">About</a>
                        <a href="/">Terms</a>
                        <a href="/">Partners</a>
                        <a href="/">Updates</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a href="/">Specs</a>
                        <a href="/">Tools</a>
                        <a href="/">Resources</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <a href="/">How it works</a>
                        <a href="/">Patterns</a>
                        <a href="/">Usage</a>
                        <a href="/">Products</a>
                        <a href="/">Contracts</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href="/">Questions</a>
                        <a href="/">Answers</a>
                        <a href="/">Contact Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
          </Footer>
      </div>
    );
  }

}
export default HomePage;
