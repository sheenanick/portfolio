import React, { Component } from 'react';
import wedding from '../../img/portfolio/wedding.png';
import collage from '../../img/portfolio/collage.png';
import fitness from '../../img/portfolio/fitness.jpg';
import branch from '../../img/portfolio/branch.png';
import todo from '../../img/portfolio/todo.png';
import message from '../../img/portfolio/message.png';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div id='Portfolio' className='app-section'>
        <h1>PERSONAL PROJECTS</h1>
        <h3>A collection of my recent work.</h3>
        <div className='grid'>
          <div className='column'>
            <a href='https://winter-wondoland.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={wedding} alt='Wedding Website' />
              <h2 className='proj-title'>Winter Wondoland</h2>
              <p className='description'>This is my wedding website. It features a countdown component on the home page, and also has a RSVP form which is hooked up to Firebase.</p>
              <p>JAVASCRIPT, REACT, REDUX, SASS, FIREBASE</p>
            </a>
          </div>
          <div className='column'>
            <a href='https://play.google.com/store/apps/details?id=com.doandstevensen.lifecollage&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={collage} alt='Life Collage' />
              <h2 className='proj-title'>Life Collage</h2>
              <p className='description'>Life Collage is a lifestyle photo app that allows users to take pictures and add them to a collage. Users can "pass" ownership of collages to another user via Bluetooth.</p>
              <p>JAVA, ANDROID</p>
            </a>
          </div>
          <div className='column'>
            <a href='https://github.com/sheenanick/fitness-app' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={fitness} alt='Fitness App' />
              <h2 className='proj-title'>Fitness Tracker</h2>
              <p className='description'>With this app, users can log their exercises to keep track of their daily activity. The main screen is a calendar that highlights which days the user has exercised.</p>
              <p>JAVA, ANDROID, FIREBASE</p>
            </a>
          </div>
          <div className='column'>
            <a href='https://github.com/sheenanick/pdx-branch-android' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={branch} alt='pdxBranch App' />
              <h2 className='proj-title'>pdxBranch App</h2>
              <p className='description'>This is an Android app for pdxBranch - a faux networking site for developers in the Portland, Oregon area. Utlizing the Meetup API, 10 Meetup groups in the tech industry are listed on the "Groups" screen.</p>
              <p>JAVA, ANDROID, FIREBASE</p>
            </a>
          </div>
          <div className='column'>
            <a href='https://github.com/sheenanick/to-do-list-app' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={todo} alt='To-Do List App' />
              <h2 className='proj-title'>To-Do List</h2>
              <p className='description'>A simple to-do list app where users can add tasks to the list, and mark tasks as complete. Users can also drag and drop to reorder tasks on the list, and hide/show completed tasks.</p>
              <p>JAVA, ANDROID</p>
            </a>
          </div>
          <div className='column'>
            <a href='https://coachella-message-board.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='proj-container'>
              <img className='proj-img' src={message} alt='Message Board' />
              <h2 className='proj-title'>Message Board</h2>
              <p className='description'>A question and answer message board application where a user submits a question and other users can respond with answers. Users can also star their favorite questions, and vote up or down answers.</p>
              <p>JAVASCRIPT, EMBER, NODE.JS, BOWER</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
