import React from "react";
import Store from "./store";

const getUnseen = notifications => {
  const unseen = [];
  Object.keys(notifications).map(key => {
    if (!notifications[key].seen) {
      return unseen.push(notifications[key]);
    }
  });
  return unseen.length;
};

const CardNum = () => {
  return (
    <div>
      <h2>Count</h2>
      <h2>
        <Store.Consumer>
          {store => getUnseen(store.notifications)}
        </Store.Consumer>
      </h2>
    </div>
  );
};

export default CardNum;
