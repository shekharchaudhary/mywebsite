import React,{Component} from 'react';
import {Grid, Cell, Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import Socialmediia from './socialmedia';

class Contact extends Component {
  render(){
    return(
      <div className='contact-page' style={{background: 'url(http://wall2born.com/data/out/632/image-43848235-wallpaper-lamborghini.jpg) center / cover'}}>
        <Grid className='contact-grid'>
          <Cell col={12}>
            <h2>contact me</h2>
            <hr/>
            <p>
            Pinole, California, 94564<br></br> Email: webdevshekhar@gmail.com <br></br> Phone: (510)-417 7347
            </p>
            {/*linkedin*/}
            <div className = "my-links">
              <a href ="https://www.linkedin.com/in/shekhar-chaudhary-b5a759148/" rel="noopener noreferrer" target ="_blank">
                <i className = " i1 fa fa-linkedin-square" aria-hidden="true"/>
              </a>
            </div>
            {/*github*/}
            <div className = "my-links">
              <a href ="https://github.com/shekharchaudhary" rel="noopener noreferrer" target ="_blank">
                <i className = " i2 fa fa-github-square" aria-hidden="true"/>
              </a>
            </div>
          </Cell>
          <Socialmediia
          />
        </Grid>
        <Footer size="mega">
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href="/">About</a>
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
export default Contact;
