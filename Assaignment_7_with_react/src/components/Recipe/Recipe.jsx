import { IoMdTime} from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
const Recipe = ({recipe, handleClick}) => {
  // console.log(handleClick)
  const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image}=recipe;
  return (
    <div>
      <div className='border p-5'>
            <img className="rounded-xl w-42" src= {recipe_image} alt="t" />
            <h3 className="text-xl font-semibold my-2">{recipe_name}</h3>
            <p>{short_description.slice(0,25)}...</p>
            <h3 className="text-xl font-semibold my-2">ingredients: 6</h3>
            <div className="my-5">
              <ul className="list-disc ml-5">
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li> {ingredients[2]}</li>
              </ul>
            </div>
              <hr />
            <div className='flex gap-10 my-5'>
              <p><IoMdTime className="inline mr-2" />{preparing_time}minutes</p>
              
              <p> <FaFireAlt className="inline mr-2" /> {calories}  calories</p>
            </div>
              <button onClick={() =>handleClick(recipe)} className='bg-[#0BE58A] py-3 rounded-3xl px-12 mb-5'>Want to Cook</button>
          </div>
    </div>
  );
};

export default Recipe;