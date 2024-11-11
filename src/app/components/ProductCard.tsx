import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}



const ProductCard: React.FC<propsType> = ({

  img,
  title,
  desc,
  rating,
  price,
}) => {


  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        
      return (
        <div className='flex gap-1 text-[20px] text-sky'>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      )


      case 2:
        
      return (
        <div className='flex gap-1 text-[20px] text-sky'>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      case 3:
        
      return (
        <div className='flex gap-1 text-[20px] text-sky'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      )
      case 4:
        
      return (
        <div className='flex gap-1 text-[20px] text-sky'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      )
      case 5:
        
      return (
        <div className='flex gap-1 text-[20px] text-sky'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      )
       
     
      default:
        return null;
    }
  }

  return <div className='gird md:gird-cols-4 gap-4 p-4 px-4 border border-gray rounded-xl max-w-[400px] '>
    <div className='border border-gray rounded-lg p-4'>
        <Image className='w-full h-auto'
        src={img} 
        alt={title}
        width={200}
        height={300} 
        />
    </div>

    <div className='space-y-2 py-2'>
      <h2 className='text-sky font-medium uppercase'>{title}</h2>
      <p className='text-gray max-w-[150px]'>{desc}</p>
      <div>{generateRating(rating)}</div>

      <div className='font-bold flex gap-4'>
        ${price}
        <del className='text-gray font-normal'>${parseInt(price) + 50}. 00</del>
      </div>
    </div>
  </div>
  
}

export default ProductCard
        