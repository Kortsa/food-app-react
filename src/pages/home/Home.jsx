import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/header/header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>

  );
}
export default Home;