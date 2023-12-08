import { useEffect, useState } from "react";
import "./App.css";
import {
  GroupWineAttribute,
  fetchWineData,
  getDataByClasses,
} from "./_helpers";
import { FlavanoidsTable, GammaTable } from "./components";

function App() {
  const [data, setData] = useState<GroupWineAttribute[]>([]);

  useEffect(() => {
    let ignore = false;
    fetchWineData().then((res) => {
      if (!ignore) setData(getDataByClasses(res));
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="App">
      <FlavanoidsTable data={data} />
      <GammaTable data={data} />
    </div>
  );
}

export default App;
