"use client";

import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex   fixed top-0 w-5/6 justify-between items-center p-5  ">
        <div className="bg-white rounded-lg">
          <img src="/logo.jpg" className="w-40  " />
        </div>

        <ul className="flex justify-between items-center gap-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Room</a>
          </li>{" "}
          <li>
            <a className="underline underline-offset-4">Play </a>
          </li>{" "}
          <li>
            <a className="underline underline-offset-4">Login</a>
          </li>{" "}
          {/* <Button variant="secondary">Login</Button>
          <Button variant="secondary">Play</Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
