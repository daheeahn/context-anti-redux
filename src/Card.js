import React from "react";
import Store from "./store";

const Card = ({ id, text, seen }) => {
  return (
    <div>
      <h2>{id}</h2>
      {seen && <h2>봤음</h2>}
      <h1>{text}</h1>
      <Store.Consumer>
        {store => (
          <>
            <button onClick={() => store.checkNotif(id)}>check</button>
            <button onClick={() => store.deleteNotif(id)}>delete</button>
          </>
        )}
      </Store.Consumer>
    </div>
  );
};

export default Card;
