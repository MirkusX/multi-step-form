import { useState } from "react";
import "./App.css";
import { PageContext } from "./Components/Context";
import { First } from "./Pages/First";
import { Fourth } from "./Pages/Fourth";
import { Second } from "./Pages/Second";
import { Third } from "./Pages/Third";

function App() {
  const [page, setPage] = useState(0);
  const conditionalRender = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return <Fourth />;
    }
  };

  const increment = () => {
    setPage(page + 1);
    if (page == 3) {
      setPage(0);
    }
  };

  return (
    <div className="App">
      {conditionalRender()}
      <button onClick={() => increment()}>Next</button>
    </div>
  );
}

export default App;
