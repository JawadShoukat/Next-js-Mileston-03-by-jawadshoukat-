import React from 'react'
import ProductCard from './ProductCard';


const productsData = [
{
    img: "/jacket-1.jpeg", 
    title: "Jecket",
    desc: "MEN Yarn Flees Full-Zip Jecket",
    rating: 4,
    price:"45.00",
},
{
    img: "/skirt-1.jpg", 
    title: "Skirt",
    desc: "BLACK T SHIRT F0R NAM & WOMAN",
    rating: 5,
    price:"55.00",
},
{
    img: "/party-wear-1.jpeg",
    title: "Party Were",
    desc: "MAN's Party Were Sandel",
    rating: 3,
    price:"25.00",
},
{
    img: "/shirt-1.jpeg",
    title: "Shirts",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price:"45.00",
},
{
    img: "/sports-1.jpeg",
    title: "Sports",
    desc: "Trekking & Running Shose - Black",
    rating: 3,
    price:"58.00",
},
{
    img: "/watch-1.jpeg",
    title: "Watches",
    desc: "Leather Watch Vital Plus",
    rating: 4,
    price:"100.00",
},
{
    img: "/user-2.jpg",
    title: "Pant Shirt",
    desc: "Gray Pant Shirt For Boys",
    rating: 4,
    price:"150.00",
    
    
},
];


const NewProducts = () => {
  return <div>
               <div className='container pt-16 '> 
                <h2 className='font-bold text-center  text-2xl pb-4'>New Prodect</h2>
              
                <div className='grid grid-cols-1  place-items-center  sm:place-items-start sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-4 gap-x-12 xl:gap-20 xl:gap-x-20 xl:gap-y-10 '> 
               
               
               
                


                 {productsData.map((item,index) => ( 
                    
                  <ProductCard  
                  
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  />  
                  
                 ))}

             </div>
         </div>
      </div>
  
}

export default NewProducts