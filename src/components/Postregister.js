import React from "react";

const Postregister = ({ name, address, age }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>hey:{name}</h2>
      Hope there is pleasant weather at {address}
    </div>
  );
};

export default Postregister;
