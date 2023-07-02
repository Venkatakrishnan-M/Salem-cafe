import { useState } from "react";
import muffin_img from "C:\\Users\\venka\\OneDrive\\Documents\\CodeFile\\WebDevelopment\\React-app\\Salem-Café\\src\\assets\\BlueBerry_Muffin.jpg";
import cookie_img from "C:\\Users\\venka\\OneDrive\\Documents\\CodeFile\\WebDevelopment\\React-app\\Salem-Café\\src\\assets\\ChocoChip_Cookie.jpg";

import Image from "./Components/Image";
import "./App.css";

function App() {
  let [current1, setCurrent1] = useState(0);
  let [current2, setCurrent2] = useState(0);
  let handleOnPurchaseEvent1 = function (data) {
    console.log("Data received App Level: ", data);
    setCurrent1(() => 0);
    setCurrent1(() => data);
  };
  let handleOnPurchaseEvent2 = function (data) {
    console.log("Data received App Level: ", data);
    setCurrent2(() => 0);
    setCurrent2(() => data);
  };

  return (
    <div className="outerContainer">
      <h2>Salem Café</h2>
      <div className="innerContainer">
        <Image
          source={muffin_img}
          desc="BlueBerry-Muffin"
          onPurchase={handleOnPurchaseEvent1}
        />
        <Image
          source={cookie_img}
          desc="ChocoChip-Cookie"
          onPurchase={handleOnPurchaseEvent2}
        />
      </div>
      <p className="total-output">Total Sales : {current1 + current2} </p>
    </div>
  );
}

export default App;
