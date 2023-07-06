import React from "react";
import { useState } from "react";

export default function State() {
  const [state, setState] = useState(0);
  const [animal, setAnimal] = useState([
    { name: "Dog", age: 3 },
    { name: "Cat", age: 2 },
    { name: "Fish", age: 5 },
  ]);
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>Click</button>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {animal.map((anim) => {
          return (
            <li
              style={{
                padding: "50px",
                border: "2px solid red",
                color: "red",
                width: "80px",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              Name:{anim.name}
              <br></br>
              Age:{anim.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
