import React from 'react';
import { Link } from 'react-router-dom';

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Networking For Medical Professionals</h1>
          <p className='lead'>
            Create your profile, share posts and network with other medical
            professionals!
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
