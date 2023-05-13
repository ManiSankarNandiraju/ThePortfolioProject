import React from 'react';
import Card from './Card';
import Instagram from './Instagram.png';
import YouTube from './Youtube.png';

const AllCards = (props) => {
  if (props.subsec === 'Profiles') {
    return (
      <div className='allCards'>
        <Card
          image={Instagram}
          content={'Insta Profile'}
          link='https://www.instagram.com/mani.sankar.nandiraju/'
        />
        <Card
          image={YouTube}
          content={'YouTube Channel'}
          link='https://www.youtube.com/channel/UCPYV9jufsDOVBuS-qfE8yrw'
        />
      </div>
    );
  }
};

export default AllCards;
