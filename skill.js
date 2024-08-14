import React from 'react';
import './skill.css';
import ui_ux from '../assets/ui-ux-designer.jpg';
import webdev from '../assets/webdevelper.png';
import appdev from '../assets/appdeveloper.png';

const Skill = () => {
  return (
  <section id='skills'>
    <span className='what'>What i do</span>
    <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores quo, ut nulla, eius voluptatem quidem odio incidunt fuga ma</span>
    <div className="skillbars">
    <div className="skillbar">
        <img src={ui_ux} alt="ui/ux designer" className="skillbarimg" />
        <div className="skillbarText">
        <h2>UI/UX Designer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
    </div>
    <div className="skillbar">
        <img src={webdev} alt="web dveloper" className="skillbarimg" />
        <div className="skillbarText">
        <h2>Web developer & Designer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div className="skillbar">
        <img src={appdev} alt="app developer" className="skillbarimg" />
        <div className="skillbarText">
        <h2>App developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    </div>
  </section>
  )
}

export default Skill