import React from 'react';


import {MdStar,MdStarHalf} from 'react-icons/md'

const StarRating:React.FC<{rating:number}>= ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<MdStar key={`star-${i}`} color={'orange'} size={28} />);
    }

    if (hasHalfStar) {
        stars.push(<MdStarHalf key={`half-star`} color={'orange'}  size={28} />);
    }

    return <div className="flex">{stars}</div>;
};

export default StarRating;
