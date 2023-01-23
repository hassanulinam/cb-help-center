import { useState } from "react";
import CustomIframe from "./Components/CustomIframe";
import { urls } from "./constants/urls";

import "./App.css";

function App() {
  const [pgNo, setPgNo] = useState(0);

  const renderButtonsRow = (): JSX.Element => (
    <div className="page-buttons">
      <button onClick={() => setPgNo(0)}>page-1</button>
      <button onClick={() => setPgNo(1)}>page-2</button>
      <button onClick={() => setPgNo(2)}>page-3</button>
    </div>
  );

  return (
    <div className="App">
      {renderButtonsRow()}
      <CustomIframe url={urls[pgNo]} />
    </div>
  );
}

export default App;
