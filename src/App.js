import React, { useState, useEffect } from "react";
import "./App.css";
import Pages from "./pages";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/vicentequesadadeb")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }
  return <Pages user={user} />;
  // return user ? <Pages user={user} /> : <div />;
}
export default App;
