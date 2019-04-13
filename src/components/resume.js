import React,{Component} from 'react';
import {Grid, Cell, Footer,FooterDropDownSection,FooterLinkList,FooterSection,Button} from 'react-mdl';
import Skills from './skills';
import Certification from './certification';
import Experience from './experience';
import Resume_fe from '../download/Resume.pdf';

class Resume extends Component {
  render(){
    return(
        <div className='resume-page'>
          <Grid className='resume-grid' style={{display:'flex', color:"#999"}}>
           <Cell col={5}>
            <img
              src = {require('./image/3.jpg')}
              alt = "avatar"
              className ="avatar-img1"
              />
              <h2 style={{color:'#fff'}}>Shekhar <span style={{color:'#fff'}}>Chaudhary</span></h2>
              <p> <span className='span1' > UI Developer </span> | <span className='span2' style={{color:'#2bb3c0'}}>Focus-ReactJs </span> </p>
              <hr style={{borderTop:'1px Dotted #fff', margin:'2em auto'}}/>
              <p style={{color:'silver', textAlign:'justify'}}>
              Web/UI Developer with 5+ years hands on experience in designing and developing user friendly web sites, web application, mobile application, application architecture, game Development, analysis and implementation of complex software systems with a board range of programming languages and platforms. Experienced in testing, debugging and maintaining the codes. Certified in advance programing language and variety of trending front end developing tools and technologies.
              </p>
              <h2 style={{color:'#', textAlign:'justify'}}><span style={{color:'#df0054'}}>P</span>rofessional Summary</h2>
                <ul style={{textAlign:'left'}}>* Web developer specializing in Front End Development with hand full experience in developing, designing, debbuging and testing of website, web application and mobile application.</ul>
                <ul style={{textAlign:'left'}}>* Experienced working in web development within Finance, Insurance and Retail Domains.</ul>
                <ul style={{textAlign:'left'}}>* Solid understanding of all stages in Software Development Life Cycle(SDLC) for dynamic web projects.</ul>
                <ul style={{textAlign:'left'}}>* Comprehensive knowledge of Development Methodologies such as Agile-Scrum development.</ul>
                <ul style={{textAlign:'left'}}>* Experienced in implementation of best practices in areas including but not limited to web animation, course layout, and design.</ul>
                <ul style={{textAlign:'left'}}>* Experience with HTML5 standards, web animation techniques, and various styling guidelines and layout.</ul>
                <ul style={{textAlign:'left'}}>* Best working experience with different JavaScript libraries and frameworks like <span style={{color:'#2bb3c0'}}>JQuery, React.js, Redux, node.js, ES6 and Angular2.</span></ul>
                <ul style={{textAlign:'left'}}>* Experience in managing and interacting onsite and offshore Developer teams.</ul>
                <ul style={{textAlign:'left'}}>* Good Documentation and Process Management skills with an ability to effectively understand the business requirements to develop and design a quality product</ul>
                <ul style={{textAlign:'left'}}>* Excellent Communication, analytical, Interpersonal and Leadership skills, Self-motivated, quick learner, Good team player and ability to work individually with strong desire to achieve quality results. </ul>

              {/* this section is for the Experience*/}
              <div style={{background:'#222'}}>
              <hr style={{borderTop:'1px solid #222', margin:'2em auto'}}/>
              <h2 style={{color:'#fff', textAlign:'justify'}}><span style={{color:'#df0054'}}>E</span>xperiences</h2>
              <Experience
                startyear={2018}
                eyear ={'Present'}
                title = 'UI/Frontend Developer(React focus)'
                company='ZENNIFY, Sacramento,CA'
              />
              <Experience
                startyear={2017}
                eyear ={'Oct 2018'}
                title = 'UI/Frontend Developer'
                company='Vintex.Inc, SanLeandro,CA'
                jobdescription='Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML, and CSS. Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML5, CSS3, JavaScript, jQuery, React JS and Ajax. Involved in developed React JS pages, Web services calls and AJAX calls for the application. CSS styles were developed to preserve the uniformity of all the screens throughout the application and positioning of screen objects. Help in implemented MVVM architecture using Redux Architecture with React JS.Responsible for design and development of web pages. Worked on Front end by using JavaScript. Worked in using React JS components, Forms, Events, Keys, Router, Animations and Redux concept. Develop various screens for the front end using React JS and used various predefined components from NPM (Node Package Manager) and Redux libraries. Build reat components and functions for other pages.'
                jobdescription1='Responsible for developing a front-end application using React JS and Redux architecture for internal team. Worked on responsive design and developed responsive website that could be served to desktop, Tablets and mobile users using React.js. Implemented the Drag and Drop functionality using React-Draggable. Implemented the Grid and Cell functionality using React-MDL. Thoroughly performed unit testing and integration testing. Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3.Used Firebug for debugging and for element styling.'
              />
              </div>
          </Cell>
            <Cell style={{background:'#000'}} col={7}>
              <h2 style={{ textAlign:'justify'}}>M<span style={{color:'#df0054'}}>y</span> Skills</h2>
              <Skills
                skill='Html/Css'
                progress={98}
              />
              <Skills
                skill='React'
                progress={70}
              />
              <Skills
                skill='Javascript'
                progress={91}
              />
              <Skills
                skill='jQuery'
                progress={81}
                />
              <Skills
                skill='Php/Laravel'
                progress={40}
              />
              <Skills
                skill='Java'
                progress={70}
              />
              {/* this section is for Certification*/}
              <hr style={{borderTop:'1px Dotted #fff', margin:'2em auto'}}/>
              <h2 style={{color:'#fff', textAlign:'justify'}}>Certifications <span style={{color:'orangeRed'}}>&</span> Awards</h2>
              <Certification
                certification='Certification of Advance programing - Berkeley City College'
              />
              <Certification
                certification='Technical Asistance/TA - Berkeley City College'
              />
              <Certification
                certification='Hack Reactor-(BootCamp-continue)'
              />
              <Certification
                certification='SCRUM-certified - SCRUMstudy.com'
              />
              <Certification
                certification='Css group competition (3rd place)- Berkeley City College'
              />
              <Certification
                certification='AS -Moraine Valley College - focus on Computer science '
              />
              <Certification
                certification='General Biology - Troy University '
              />
              <Certification
                certification='Computer Science'
              />
              {/* this section is for more Experience*/}
              <div style={{background:'purple'}}>
              <hr style={{borderTop:'1px solid #222', margin:'2em auto'}}/>
              <h2 style={{color:'#', textAlign:'justify'}}> More <span style={{color:'#df0054'}}>E</span>xperiences</h2>
              <Experience
                startyear={2012}
                eyear ={2013}
                title = 'UI/Frontend Developer'
                company=' rapidWeb.com, Pinole,Ca'
                jobdescription='Developed user interface using HTML5, CSS3, JSON, JavaScript, jQuery, and jQuery UI. Used JQUERY to handle the client side validations. Responsible for transforming designed mock-ups to web pages. Used to update the HTML pages using JQUERY AJAX via JSON response. Designed web pages and used applications that meet business needs and user goals through a user experience. Developed Web applications that are cross - browser compatible.Optimized, and created new sprites with Photoshop to generate CSS3- based elements.Creating browser compatibility web pages using HTML5, CSS3, JavaScript, jQuery and AngularJs.'
              />
              <Experience
                startyear={2012}
                eyear ={2013}
                title = 'UI/Frontend Developer'
                company='Book4Groups,Inc, Chicago,IL'
                jobdescription='Developed the front-end design & development of HTML pages.Integrated HTML into WordPress & CMS platforms by primarily converting them into themes and templates. Responsible for the implementation of Web Design based on CSS, HTML5, and Bootstrap Front-End Framework. Developed WordPress plugins and modules to embed into the active pages using PHP. Successfully performed the RESTful APIs Integration using XML and JSON. Created new websites in WordPress CMS and alsorestructured the existing ones by customizing the templates using Dreamweaver.Modified widgets and plug-ins to stream live data from the social networking sites. Conducted full functional tests, link tests and the browser compatibility tests for the websites. Implemented the SEO Techniques to improve the search results on the web. Streamlined the Responsive Web Design to enhance the Mobile User Experience and developed designs for the prototypes for the Mobile UI.'
              />
              <Experience
                startyear={2013}
                eyear ={2014}
                title = 'QA/UAT Analyst'
                company = 'First Midwest Bank, Itasca, IL'
                jobdescription='As Tester my work was to perform functional testing and User Interface Testing, along writing test cases and test scenario.Analyzed Application design documents, guidelines and artifacts, attended JAD sessions with product owner, scrum master and project team. Documented the Test Requirements and Test Plan using QC ALM to track the stakeholders request for enhancements and changes.Created multiple Test Cases to test scenarios. Validated functionalities providing insight into improving mobile banking experience, performing UX, Functional, System, Integration, Regression, End to End testing.'
              />
                <div style={{ height:'250px', background:'#222', paddingTop:'100px'}}>
                  <p style={{color:'orange'}}>CLICK TO DOWNLOAD MY RESUME</p>
                  <a href={Resume_fe} download>
                    <Button>download</Button>
                  </a>
                </div>
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
export default Resume;
