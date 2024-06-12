import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderCard } from './SliderCard';

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      id: 1,
      msg: '"The hype around NFTs has grown incredibly in the last few years leading to the creation of hundreds of great NFT platforms & Marvel Avatar is one of them." ',
      author: 'Shadab Khan',
      designation: 'Software Developer',
    },
    {
      id: 2,
      msg: '"The problem many NFT lovers have is finding the best NFT marketplace for their needs. Finding the right NFT marketplace depends on several different factors & i think I\'m at right place" ',
      author: 'Akshay Shekate',
      designation: 'UI/UX Developer',
    },
    {
      id: 3,
      msg: '"Marvel Avatar is a name that has become almost synonymous with non-fungible token trading. Being a true veteran and pioneer in the space, the marketplace has managed to amass millions of different NFTs on its platform, and allows users from all over the world to trade and exchange these NFTs, at their leisure." ',
      author: 'Kaushik Bedmutha',
      designation: 'ML Expert',
    },
  ];
  return (
    <div className="container overflow-hidden mx-auto px-10">
      <h1 className="text-5xl text-center font-bold text-slate-300 mt-6">Testimonial</h1>
      <Slider {...settings}>
        {data &&
          data.map((testimonial) => <SliderCard key={testimonial.id} testimonial={testimonial} />)}
      </Slider>
    </div>
  );
};
