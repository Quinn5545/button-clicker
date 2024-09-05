import React, { useEffect, useState } from "react";

export default function ButtonScore() {
  const [score, setScore] = useState(10000);
  const [clickValue, setClickValue] = useState(1);
  //Ups
  const [clickCost, setClickCost] = useState(10);
  const [clickLevel, setClickLevel] = useState(1);
  const [firstPassiveCost, setFirstPassiveCost] = useState(20);
  const [firstPassiveValue, setFirstPassiveValue] = useState(0);
  const [firstPassiveLevel, setFirstPassiveLevel] = useState(0);
  const [secondPassiveCost, setSecondPassiveCost] = useState(1000);
  const [secondPassiveValue, setSecondPassiveValue] = useState(0);
  const [secondPassiveLevel, setSecondPassiveLevel] = useState(0);
  //Ups

  //updater
  useEffect(() => {
    const interval = setInterval(() => {
      setScore(
        (prevScore) => prevScore + firstPassiveValue + secondPassiveValue
      );
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [firstPassiveValue, secondPassiveValue]);
  //updater

  // console.log(score);
  // console.log(firstPassiveValue);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "white",
        }}
        className="score-box"
      >
        {`Score: ${score.toFixed(1)}`}
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "white",
        }}
        className="score-box"
      >
        {`+ ${(firstPassiveValue + secondPassiveValue).toFixed(1)}/sec`}
      </div>

      <div
        className="clicker-box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <button onClick={() => setScore(score + clickValue)}>Click Me!</button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px" }}>
          <div style={{ color: "white" }}>
            <div>Click Power</div>
            <div>{`${clickValue.toFixed(1)}/click`}</div>
            <div>{`lvl. ${clickLevel}`}</div>
          </div>
          <button
            style={{ padding: "10px" }}
            onClick={() => {
              if (score >= clickCost) {
                setScore(score - clickCost);
                setClickCost(clickCost + 10);
                setClickLevel(clickLevel + 1);
                setClickValue(clickValue + 0.2);
              }
              return;
            }}
          >
            <div>{`Increase Click By: 0.2`}</div>
            <div>{clickCost}</div>
          </button>
        </div>
        <div className="firstPassive" style={{ padding: "10px" }}>
          <div style={{ color: "white" }}>
            <div>{`Passive 1`}</div>
            <div>{`${firstPassiveValue.toFixed(1)}/sec`}</div>
            <div>{`lvl. ${firstPassiveLevel}`}</div>
          </div>
          <button
            style={{ padding: "10px" }}
            onClick={() => {
              if (score >= firstPassiveCost) {
                setScore(score - firstPassiveCost);
                setFirstPassiveCost(firstPassiveCost + firstPassiveCost * 0.2);
                firstPassiveLevel === 0
                  ? setFirstPassiveValue(1)
                  : setFirstPassiveValue(
                      firstPassiveValue + firstPassiveValue * 0.1
                    );
                setFirstPassiveLevel(firstPassiveLevel + 1);
              }
              return;
            }}
          >
            <div>{`Increase Passive 1 By: ${
              firstPassiveLevel === 0 ? 1 : "10%"
            }`}</div>
            <div>{`Cost: ${firstPassiveCost.toFixed(1)}`}</div>
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <div style={{ color: "white" }}>
            <div>{`Passive 2`}</div>
            <div>{`${secondPassiveValue.toFixed(1)}/sec`}</div>
            <div>{`lvl. ${secondPassiveLevel}`}</div>
          </div>

          <button
            style={{ padding: "10px" }}
            onClick={() => {
              if (score >= secondPassiveCost) {
                setScore(score - secondPassiveCost);
                setSecondPassiveCost(
                  secondPassiveCost + secondPassiveCost * 0.2
                );
                secondPassiveLevel === 0
                  ? setSecondPassiveValue(10)
                  : setSecondPassiveValue(
                      secondPassiveValue + 10 + secondPassiveValue * 0.1
                    );
                setSecondPassiveLevel(secondPassiveLevel + 1);
              }
            }}
          >
            <div>{`Increase Passive 2 by ${
              secondPassiveLevel === 0 ? 10 : "10%"
            }`}</div>
            <div>{`Cost: ${secondPassiveCost.toFixed(1)}`}</div>
          </button>
        </div>
        {/* <button style={{ padding: "10px" }}>click</button>
        <button style={{ padding: "10px" }}>click</button>
        <button style={{ padding: "10px" }}>click</button>
        <button style={{ padding: "10px" }}>click</button>
        <button style={{ padding: "10px" }}>click</button>
        <button style={{ padding: "10px" }}>click</button> */}
      </div>
    </>
  );
}
