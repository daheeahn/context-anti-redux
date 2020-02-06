import React, { useEffect, useState } from "react";

import Card from "./Card";
import CardNum from "./CardNum";
import Store from "./store";

function App() {
  const [notifications, setNotifications] = useState({
    "1": {
      id: 1,
      text: "Something",
      seen: true
    },
    "2": {
      id: 2,
      text: "Something else",
      seen: false
    },
    "3": {
      id: 3,
      text: "Something else but different",
      seen: false
    }
  });

  const deleteNotif = id => {
    // actions.js 만들어서 따로 빼도 됨.
    const newNotifs = Object.assign({}, notifications);
    delete newNotifs[id];
    setNotifications(newNotifs);
  };

  const checkNotif = id => {
    const newNotifs = Object.assign({}, notifications);
    newNotifs[id].seen = !newNotifs[id].seen;
    setNotifications(newNotifs);
  };

  // useEffect(() => {
  //   setTimeout(() => setMsg(""), 1000);
  // }, []);

  return (
    <Store.Provider value={{ notifications, deleteNotif, checkNotif }}>
      <div className="App">
        <CardNum />
        <Store.Consumer>
          {store =>
            Object.keys(store.notifications).map(key => (
              <Card
                key={store.notifications[key].id}
                id={store.notifications[key].id}
                text={store.notifications[key].text}
                seen={store.notifications[key].seen}
              />
            ))
          }
        </Store.Consumer>
        <br />
      </div>
    </Store.Provider>
  );
}

export default App;
