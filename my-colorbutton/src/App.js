import './App.css';
import {useState} from "react";


function App() {

  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

 
  const newButtonColor = buttonColor === "red" ? "blue" : "red";


  return (
    <div className="Style">
        <button 
          disabled={disabled}
          style={{backgroundColor: buttonColor}}
          onClick={() => setButtonColor(newButtonColor)}
          >Change to {newButtonColor}
          </button>

          <input 
            type="checkbox"
            id="enable-button-checkbox"
            defaultChecked={disabled}
            onChange={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
