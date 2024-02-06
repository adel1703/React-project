import React from 'react';
import aboutCss from './about.module.css';

export default function About() {
  return <>
  
  <div className= { aboutCss.about + ' pt-5 pb-5 text-white'}>
    <div className="container pt-5 pb-5">
        <div className='text-center pt-5'>
            <h2 className='fw-bolder pt-5'>ABOUT COMPONENT</h2>
        </div>
        <div className="row pt-5 pb-5">
            <div className="col-6 pb-5">
                <div>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            <div className="col-6">
                <div>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  
  </>
}
