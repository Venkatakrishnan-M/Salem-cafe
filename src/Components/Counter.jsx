import { useState } from "react";
import "./Counter.css";

function Counter(props) {
  let [stockCount, setStockCount] = useState(50);
  let [purchasedCount, setPurchaseCount] = useState(0);

  let handleOnMouseDownEvent = function (event) {
    setStockCount(() => stockCount - 1);
    setPurchaseCount(() => purchasedCount + 1);
    event.stopPropagation();
  };

  let handleOnMouseUpEvent = function () {
    props.onPurchase(purchasedCount);
  };

  return (
    <div onClick={props.onClick}>
      <p className="output">Left in Stock: {stockCount}</p>
      {stockCount > 0 ? (
        <button
          className="submit"
          type="submit"
          onMouseDown={handleOnMouseDownEvent}
          onMouseUp={handleOnMouseUpEvent}
        >
          Buy {props.name}
        </button>
      ) : null}
    </div>
  );
}

export default Counter;
