import { useState } from "react";
import "./image.css";
import Counter from "./Counter";

function Image(props) {
  let [current, setCurrent] = useState(0);

  let handelOnPurchaseEvent = function (data) {
    console.log("data: ", data);
    setCurrent(() => data);
  };

  let handleOnClickEvent = function () {
    console.log("current: ", current);
    props.onPurchase(current);
  };

  return (
    <div className="image-container">
      <p className="image-desc">{props.desc}</p>
      <img
        src={props.source}
        className="logo"
        alt={props.desc}
        width={"250px"}
      />
      <Counter
        index={props.id}
        name={props.desc}
        onPurchase={handelOnPurchaseEvent}
        onClick={handleOnClickEvent}
      />
    </div>
  );
}

export default Image;
