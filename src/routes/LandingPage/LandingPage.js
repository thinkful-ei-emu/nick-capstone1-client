import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {



  return (
    <div className='landing-page'>

      <h1 className='lp-header'>BandBridge</h1>

      <section className='lp-info'>
        <h2>Find your band</h2>
        <p className='bb-desc'>BandBridge helps connect you with artists that share your musical interests.
         Make an account to join the conversation or continue as a guest to check it out.</p>
      </section>

      <section className='lp-links-container'>
        <div className='lp-links'>
          <Link to='/signup'><button className='lp-button'>Sign up</button></Link>
          <Link to='/login'><button className='lp-button'>Login</button></Link>
          <Link to='/posts'><button className='lp-button'>Guest</button></Link>
        </div>
      </section>
    </div>
  )

}

export default LandingPage;