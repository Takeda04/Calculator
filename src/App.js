import React, { useState } from "react";
import './App.css';
const App = () => {
  const [result, setResult] = useState("");
  const pushBtn = (event) => {
    setResult(result.concat(event.target.value))
  }
  const C = () => {
    setResult("");
  }
  const equal = () => {
    setResult(eval(result).toString());
  }
  return (
    <div>
      <div className="window">
        <input className="window2" type="text" placeholder="0" id="answer" value={result} />
        <div className="buttons">         
          <input type="button" value="1" className="button" onClick={pushBtn} />
          <input type="button" value="2" className="button" onClick={pushBtn} />
          <input type="button" value="3" className="button" onClick={pushBtn} />
          <input id="s1" type="button" value="+" className="button" onClick={pushBtn} />
          <input type="button" value="4" className="button" onClick={pushBtn} />
          <input type="button" value="5" className="button" onClick={pushBtn} />
          <input type="button" value="6" className="button" onClick={pushBtn} />
          <input id="s1" type="button" value="-" className="button" onClick={pushBtn} />
          <input type="button" value="7" className="button" onClick={pushBtn} />
          <input type="button" value="8" className="button" onClick={pushBtn} />
          <input type="button" value="9" className="button" onClick={pushBtn} />
          <input id="s1" type="button" value="*" className="button" onClick={pushBtn} />
          <input id="clear" type="button" value="Clear" className="button" onClick={C} />
          <input type="button" value="0" className="button" onClick={pushBtn} />
          <input  id="equal" type="button" value="=" className="button" onClick={equal} />
          <input id="s1" type="button" value="/" className="button" onClick={pushBtn} />
        </div>
      </div>
    </div>
  )
}

export default App;
