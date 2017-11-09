import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div id='About' className='app-section'>
        <h1>HELLO, MY NAME IS SHEENA.</h1>
        <div className='about-me'>
          <section className='about-section'>
            <h2>About Me</h2>
            <p>
              A Portland native, I love exploring the great outdoors - especially hiking, camping, and snowboarding. I received my B.A. in Business Administration with a focus in Marketing from the University of Washington in Seattle. I was also a member of the Japan track of the International Studies in Business Program. I grew up in a bilingual household, so I wanted to combine my language and business skills. After college, I moved to Japan where I lived for nearly 5 years working to help localize the sales and marketing strategies of global brands like Guinness and Smirnoff. I also worked as a Business Consultant for a short time before moving back to Portland in 2016, which is when I decided to make a big career change!
            </p>
          </section>
          <section className='about-section'>
            <h2>Why Coding?</h2>
            <p>
              Because technology is really cool! Working as a Consultant on a major software project in Japan had opened my eyes to a whole new world of programming and technology. Even before that as a marketer, technology played a key role in how we reached our consumers and how we learned more about them. Becoming a developer seemed like a natural progression for me where I could utilize my problem-solving experience and pursue my passion for technology. I started out my new career learning Android development, and then was hired as a Mobile Developer to work on a React Native project. From there I widened my skillset to include React as well. Check out the Projects tab to see some of my work.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
