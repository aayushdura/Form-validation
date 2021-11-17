import React from "react";

const Postregister = (props) => {
  const { values } = props;
  return (
    <div>
      <h1>Welcome</h1>
      <h2>hey:{values.username}</h2>
      Hope there is pleasant weather at
    </div>
  );
};

export default Postregister;
