import React,{Component} from 'react';
import {Grid, Cell, Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';

class About extends Component {
  render(){
    return(
      <div className='aboutme-page' style={{background: 'url(http://wall2born.com/data/out/632/image-43848235-wallpaper-lamborghini.jpg) center / cover'}}>
        <Grid>
          <Cell className=' aboutme-cell1' col={5} style={{}}>
            <p> <span style={{color:'#2bb3c0', fontSize:'30px'}}>In </span>all my heart i am passionate  with everything i sink my teeth in. Programming, writing codes, animation and web designing has been my passion since my dad bought me a computer. Working as UI/Frontend developer, i am not only seeing how much money i making, but rather seeing my passion growing and progressing in daily basis, i am seeing leverging my skills day by day. I keep myself up to date with new tools, technologies and new frameworks. Connecting with new people and learning about new  ideas and opportunities have help me to come this far. If you want to know me better, go to my contact page, all ifo is there.</p>
          </Cell>
          <Cell col={5} style={{}}>
            <p className='aboutme-cell2p1'> I spend my days crafting websites, webb applications, mobile application and creating 3d models and Animations. I have worked for all size of companies from small local businesses, individual client right up to huge international brands like Vogue. I speak, read and write very basic some 5 different languages. Now I am settled in San Francisco , BAY AREA.</p>
            <p className='aboutme-cell2p2'>I’m constantly learning web technologies and other design related topics, currently playing around with ReactJs/redux. Let me tell you a truth about react, well i am loving it. I’m a skilled in many areas of design and development. Some of my skills include:</p>
          </Cell>
          <Cell className=' aboutme-cell3' col={2} style={{color:'/fff',paddingTop:'4em'}}>
              <ul>html5/css3</ul>
              <ul>javascript/JQuery</ul>
              <ul>reactJs/redux</ul>
              <ul>phh/Laravel</ul>
              <ul>webAnimation</ul>
          </Cell>
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
export default About;
