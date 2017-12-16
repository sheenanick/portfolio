import React, { Component } from 'react';
import profile from '../../img/about/sheena.jpeg';
import web from '../../img/icons/web.png';
import mobile from '../../img/icons/mobile.png';
import agile from '../../img/icons/agile.png';
import Bar from '../../components/Shapes/Bar';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div id='About' className='app-section'>
        <h1>ABOUT ME</h1>
        <Bar />
        <section className='section about-section'>
          <div>
            <img className='profile-img' src={profile} alt='Sheena' />
          </div>
          <div className='about-description'>
            <p>
              After graduating with a B.A. in Business Administration from the University of Washington, I moved to Tokyo where I worked for nearly 5 years localizing the sales and marketing strategies of global brands like Guinness and Smirnoff. I also worked as a Business Consultant on a major software project before moving back to Portland in 2016.
            </p>
            <p>
              Becoming a developer was a natural progression for me where I could utilize my <span className='accent'>problem-solving experience</span> and pursue my <span className='accent'>passion for technology</span>. I started my new career learning Android development, then was hired as a Mobile Developer to work on a React Native project. From there I widened my skillset to include React as well.
            </p>
          </div>
        </section>
        <h1 className='center'>SKILLS & EXPERTISE</h1>
        <Bar />
        <section className='section skills-section'>
          <div className='col-3'>
            <img className='skills-icon' src={web} alt='computer' />
            <h4 className='skills-subtitle'>WEB</h4>
            <p className='skills-description'>I am proficient in <span className='accent'>HTML5</span>, <span className='accent'>CSS3</span>, and <span className='accent'>React + Redux</span>. I also have worked with <span className='accent'>Angular2</span>, <span className='accent'>Ember</span>, and preprocessors like <span className='accent'>SASS</span>.</p>
          </div>
          <div className='col-3'>
            <img className='skills-icon' src={mobile} alt='smartphone' />
            <h4 className='skills-subtitle'>MOBILE</h4>
            <p className='skills-description'>I have one <span className='accent'>Android (Java)</span> app in the Google Play Store, and also have experience with hybrid apps, such as <span className='accent'>React Native (JavaScript)</span>.</p>
          </div>
          <div className='col-3'>
            <img className='skills-icon' src={agile} alt='people' />
            <h4 className='skills-subtitle'>AGILE</h4>
            <p className='skills-description'>I love working in teams and directly with clients. I've worked on projects following <span className='accent'>Agile</span> & <span className='accent'>Scrum</span> methodology using <span className='accent'>JIRA</span>, <span className='accent'>Bitbucket</span>, and <span className='accent'>Git</span>.</p>
          </div>
        </section>
      </div>
    );
  }
}
