import { menu_list } from "../../assets/assets";

import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus
        blanditiis provident a fuga omnis iste at aliquid ea! Tempore ipsa
        voluptatibus sequi aliquam aperiam. Deleniti culpa autem distinctio
        rerum!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
export default ExploreMenu;
