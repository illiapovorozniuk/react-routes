import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us 🎄</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex rerum
        aliquid amet voluptates.
      </p>

      <Outlet />
    </div>
  );
};

export { About };
