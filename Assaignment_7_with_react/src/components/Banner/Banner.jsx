import banner from '../../img/banner.avif'

const Banner = () => {
  return (
  <div className='container mx-auto bg-cover bg-no-repeat h-screen rounded-3xl p-2 mx-3' style={{backgroundImage:`url(${banner})`}}>

   <div className='text-center bg-[#00000044] h-screen flex justify-center items-center rounded-3xl '>
        <div>
       <h1 className='text-[#fff] text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
       <p className='text-[#fff] my-8'>
Indulge in a nutritious and flavorful Grilled Chicken Salad, featuring succulent grilled <br /> chicken atop a bed of crisp mixed greens, complemented by sweet cherry tomatoes, <br /> refreshing cucumber, zesty red onion, creamy feta cheese, and crunchy almonds.</p>
       <div className='flex gap-5 justify-center'>
        <button className='bg-[#0BE58A] p-4 px-8 rounded-3xl'>Explore Now</button>
        <button className='text-white p-4 px-8 rounded-3xl border'>Our Feedback</button>
       </div>

        </div>

      </div>
      
  </div>
  );
};

export default Banner;


