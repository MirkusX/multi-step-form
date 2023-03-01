import { useState } from "react";
import "./App.css";
import { ExtraContext, PlanContext, TimeContext } from "./Components/Context";
import { First } from "./Pages/First";
import { Fourth } from "./Pages/Fourth";
import { Second } from "./Pages/Second";
import { Third } from "./Pages/Third";

function App() {
  const [time, setTime] = useState();
  const [plan, setPlan] = useState([]);
  const [extra, setExtra] = useState([]);
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

  const increment = (e) => {
    e.preventDefault();
    setPage(page + 1);
    console.log(page);
    if (page == 3) {
      setPage(0);
    }
  };

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      <PlanContext.Provider value={{ setPlan, plan }}>
        <ExtraContext.Provider value={{ setExtra, extra }}>
          <div className="App">
            <form onSubmit={increment}>
              {conditionalRender()}
              <input type="submit" />
            </form>
            {page > 0 && (
              <button onClick={() => setPage(page - 1)}>Back</button>
            )}
          </div>
        </ExtraContext.Provider>
      </PlanContext.Provider>
    </TimeContext.Provider>
  );
}

export default App;
