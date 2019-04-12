import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';


class Labs extends Component{
  constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories (){
      if (this.state.activeTab === 0){
        return(
          <div className='labs-category'>
          {/* pro-1*/}
            <Card shadow={0} style={{width: '451px', height: '280px', margin: 'auto'}}>
              <CardTitle expand style={{color: '#2bb3c0'}}>React</CardTitle>
              <CardText style={{color: 'orange'}}>
                  This is a application developed using React
                  Click paper-palne for live demo
              </CardText>
              <CardActions border>
              <div className = "my-links">
                <a href ="/" rel="noopener noreferrer" target ="_blank">
                  <i className = " i1 fa fa-paper-plane" aria-hidden="true"/>
                </a>
              </div>
              </CardActions>
            </Card>
        </div>
      );
    }else if (this.state.activeTab === 1) {
      return(
        <div className='labs-category'>
          <Card shadow={0} style={{width: '451px', height: '280px', margin: 'auto'}}>
            <CardTitle expand style={{color: 'orange', background: 'tranparent'}}>JavaScript</CardTitle>
            <CardText style={{color: '#2bb3c0'}}>
                This is javascript application
                Click paper-palne for live demo
            </CardText>
            <CardActions border>
              <div className = "my-links">
                <a href ="http://shekharchaudhary.cf" rel="noopener noreferrer" target ="_blank">
                  <i className = " i1 fa fa-paper-plane" aria-hidden="true"/>
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    }else if (this.state.activeTab === 2) {
      return(
        <div className='labs-category'>
          <Card shadow={0} style={{width: '451px', height: '280px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#2bb3c0', background: 'tranparent'}}>Php/Laravel</CardTitle>
            <CardText style={{color: 'orange'}}>
              This is Laravel application.
              Click paper-palne for live demo
            </CardText>
            <CardActions border>
              <div className = "my-links">
                <a href ="http://www.chitosajilo.com/" rel="noopener noreferrer" target ="_blank">
                  <i className = " i1 fa fa-paper-plane" aria-hidden="true"/>
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    }else if (this.state.activeTab === 3) {
      return(
        <div className='labs-category'>
          <Card shadow={0} style={{width: '451px', height: '280px', margin: 'auto'}}>
            <CardTitle expand style={{color: 'orange', background: 'tranparent'}}>Angular2</CardTitle>
            <CardText style={{color: '#2bb3c0'}}>
                Game in java platforms
                Click paper-palne for live demo
            </CardText>
            <CardActions border>
              <div className = "my-links">
                <a href ="https://shekharchaudhary.github.io/design.html" rel="noopener noreferrer" target ="_blank">
                  <i className = " i1 fa fa-paper-plane" aria-hidden="true"/>
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    }
  }
  render(){
    return(
      <div className='labs-page' style={{background: 'url(http://wall2born.com/data/out/632/image-43848235-wallpaper-lamborghini.jpg) center / cover'}}>
      <Grid className='resume-grid'>
        <Cell col={12}>
          <div className="demo-tabs" >
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                  <Tab style={{color: '#fff'}} >React</Tab>
                  <Tab style={{color: '#fff'}} >jScript</Tab>
                  <Tab style={{color: '#fff'}}>Php/Laravel</Tab>
                  <Tab style={{color: '#fff'}}>Angular2</Tab>
              </Tabs>
              <section>
                {this.toggleCategories()}
              </section>
          </div>
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
export  default Labs;
