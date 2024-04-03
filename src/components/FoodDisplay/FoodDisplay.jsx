import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import "./FoodDispplay.css";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
export default FoodDisplay;