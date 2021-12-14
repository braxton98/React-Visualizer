import "./Vis.css";
import React, { useState, useEffect, useRef } from "react";

function Vis() {
  var [array, setArray] = useState([]);
  var size = array.length;
  const timeoutRef = useRef();
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      bubblesort();
    }, 60);
  }, [i, j]);

  const handleChange = (e) => {
    let str = e.target.value;

    setArray(str.split(",").map((i) => Number(i)));
  };

  const randomValues = () => {
    let arr = [];
    while (arr.length < 20) {
      let rand = Math.floor(Math.random() * 40) + 1;
      if (arr.indexOf(rand) === -1) arr.push(rand);
      document.getElementById("input").value = arr;
      setArray(arr);
    }
  };

  const bubblesort = () => {
    let dataArray = [...array];
    let swap = dataArray[j];

    if (j === size - i - 1) {
      setJ(0);
      setI(i + 1);
    }

    if (i < size - 1 && j < size - i - 1) {
      if (swap > dataArray[j + 1]) {
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = swap;
        setArray(dataArray);
        setJ(j + 1);
      } else {
        setJ(j + 1);
      }
    }
  };

  const reset = (e) => {
    setArray([]);
    setJ(0);
    setI(0);
    document.getElementById("input").value = "";
  };
  return (
    <div>
      <h1 style={{ fontSize: "15 px" }}>
        Enter Values seperated by commas and Click Sort or Click Random Values
        then Sort
      </h1>
      <div className="container">
        <label className="label">Enter the values you want to sort</label>
        <input
          id="input"
          className="input"
          type="text"
          onChange={handleChange}
        />

        <button
          style={{ fontFamily: "monospace" }}
          className="button"
          onClick={() => bubblesort()}
        >
          sort
        </button>
        <button
          style={{ fontFamily: "monospace" }}
          className="button"
          onClick={() => reset()}
        >
          reset
        </button>
        <button
          className="button"
          onClick={randomValues}
          style={{ fontFamily: "monospace" }}
        >
          random values
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        {array.map((element) => (
          <div className="App" style={{ height: (element + 1) * 10 }}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vis;
