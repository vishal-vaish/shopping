import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const listOptions = [
    {
      path: "/about",
      text: "About"
    },
    {
      path: "/products",
      text: "Products"
    },
    {
      path: "/contact",
      text: "Contact"
    }
  ];
  return (
    <>
      <ul>
        {listOptions.map((listOption) => {
          return (
            <Link to={listOption.path}>
              <li key={listOption.text}>{listOption.text}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
export default Home;
