// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setrecipes] = useState([])
  const [Show, setShow] = useState([])

  const [Show1, setShow1] = useState([])
 
  useEffect(()=>{
    fetch('Recipe.json')
    .then(res => res.json())
    .then(data => setrecipes(data))

  }, [])

const handleClick = (p) => {
  // console.log(p);
  const isExist = Show.find(item=> item.recipe_id == p.recipe_id);
  // console.log(isExist);
  // setShow([...Show, p]);
  if (!isExist){
    setShow([...Show, p]);
  }
  else{
   return alert("already exits")
  }
}
const handleClick2 = (p) => {
  // console.log(p);
  const isExist = Show.filter(item=> item.recipe_id != p.recipe_id);
  setShow(isExist);
  setShow1([...Show1, p]);
}
// console.log(Show);




const handleDetate = (id) =>{
  const newCart = Show.filter(item=>item.recipe_id != id);
  setShow(newCart);
}
console.log(Show)





  return (
    <div className="container mx-auto px-5 my-10">
      <div>
      <div className="text-center">
        <h1 className="text-[#150B2B] text-[40px] font-bold">Our Recipes</h1>
        <p className="my-7">Drizzled with a light olive oil and balsamic vinegar dressing, this salad offers a harmonious blend of textures and flavors, making it a delicious and wholesome meal choice.</p>
      </div>
      </div>
        
        <div className="flex gap-5">
      <div className="w-7/12 grid grid-cols-2 gap-3">
      {
        recipes.map(recipe =><Recipe 
          recipe={recipe}
          handleClick={handleClick}
          key={recipe.id}
          ></Recipe>)
      };
      </div>
      <div className="w-5/12 border rounded-3xl p-5">

<div>
<h3 className='text-[24px] font-bold text-center'>Want to cook: 01</h3>
<hr />
  <ul className='flex justify-between'>
    <li>S.N.</li>
    <li>Name</li>
    <li>Time</li>
    <li>Calories</li>
    <li className="px-10"></li>
  </ul>
  <div className='my-5'>
{
    Show.map((item, index) =>{
      // console.log(item)
      return(
          <ul key={item.recipe_id} className='flex justify-between bg-[#ebedf09d] my-3 items-center px-2'>
            <li>{index+1}.</li>
        <li>{item.recipe_name.slice(0,10)}</li>
        <li>{item.preparing_time}<br /> minutes</li>
        <li>{item.calories} <br /> calories</li>
        <button  onClick={() => handleClick2(item)} className='bg-[#0BE58A] rounded-xl p-2 '>Preparing</button>
      </ul>
    
      )
    })
   }
   <h3 className='text-[24px] font-bold text-center'>Want to cook: 02</h3>

   <hr />
  <ul className='flex justify-between'>
    <li>S.N.</li>
    <li>Name</li>
    <li>Time</li>
    <li>Calories</li>
    <li className="px-10"></li>
  </ul>
  {
    Show1.map((item, index) =>{
      // console.log(item)
      return(
          <ul key={item.recipe_id} className='flex justify-between bg-[#ebedf09d] my-3 items-center px-2'>
            <li>{index+1}.</li>
        <li>{item.recipe_name.slice(0,10)}</li>
        <li>{item.preparing_time}<br /> minutes</li>
        <li>{item.calories} <br /> calories</li>
        <button  onClick={() => handleClick2(item)} className='bg-[#0BE58A] rounded-xl p-2 '>Preparing</button>
      </ul>
    
      )
    })
   }


  </div>
</div>

</div>
        </div>

      
    </div>
  );
};

export default Recipes;