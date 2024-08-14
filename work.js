import React from 'react'
import './work.css';
import port1 from '../assets/portfolio1.png';
import port2 from '../assets/portfolio2.png';
import port3 from '../assets/portfolio3.png';
import port4 from '../assets/portfolio4.png';
import port5 from '../assets/portfolio5.png';
import port6 from '../assets/portfolio6.png';

const Work = () => {
  return (
   <section id='works'>
    <h2 className="workstitle">My Portfolio</h2>
    <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia rerum minus similique dicta iusto, ipsa atque totam enim repellat? Natus eaque laudantium porro obcaecati perferendis quis in? Cupiditate, rerum.</span>
    <div className="worksImgs">
        <img src={port1} alt="" className="worksImg" />
        <img src={port2} alt="" className="worksImg" />
        <img src={port3} alt="" className="worksImg" />
        <img src={port4} alt="" className="worksImg" />
        <img src={port5} alt="" className="worksImg" />
        <img src={port6} alt="" className="worksImg" />
    </div>
    <button className="workBtn">See More</button>
   </section>
  )
}

export default Work