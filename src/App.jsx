import React, { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      dispatch({
        type: Type.SET_USER,
        user: authUser || null,
      });
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
