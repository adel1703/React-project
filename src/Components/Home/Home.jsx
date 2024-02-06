import React, { Component } from 'react';
import homeCss from './home.module.css'
import avatar from '../../images/avataaars.svg';

export default class Home extends Component {
    
    render() {
        return <>
        <div className= { homeCss.home + ' text-center pb-5 pt-5'}>
        <img src={avatar} className='w-25 d-block ms-auto me-auto' alt="human" />
        <h3 className='mt-3 fs-1 text-white'>START FRAMEWORK</h3>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </>
    }
}