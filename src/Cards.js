
import React from 'react';
function Card(props){
    // console.log(props);
    return(
      <>
        <div className='cards'>
        <div className='card'>
        <img src={props.imgsrc} alt='mypic' className='card-img'></img>
        <div className='card-info'></div>
        <span className='card-category'>{props.title}</span>
        <h3 className='card-title'>{props.sname}</h3>
        <a href={props.link} target='_blank'>
          <button>Watch Now</button>
        </a>
      </div>
    </div>
      </>
    )
  }

  export default Card;