import React from 'react';

const Card = (props) => {
  return (
    <div className='eachCard'>
      <a href={props.link}>
        <img className='lulli' src={props.image} alt='' />
        <p className='bio'>{props.content}</p>
      </a>
    </div>
  );
};

export default Card;
