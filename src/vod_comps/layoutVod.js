import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function LayoutVod(props) {
  return (
    <div >
      <div >
        <nav className='p-3 container-fluid mb-4'>
        <i class="fa fa-video-camera float-start " aria-hidden="true"></i>
          <Link to="/">search by name </Link>
          <span className='mx-3'>|</span>
          <Link to="/years/:years"> search by year</Link>
          <span className='mx-3'></span>
          <p className='float-end'>M O V I E</p>
        </nav>
      </div>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container text-center'>
        <p className="">© Created by Uriya Davidi</p>
      </footer>
    </div>
  )
}

export default LayoutVod