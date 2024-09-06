import React, { useEffect, useState } from "react";
import "./ButtonScore.css"; // Import a CSS file for styling

export default function ButtonScore() {
  const saveToLocalStorage = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
      }
    }
  };

  const getFromLocalStorage = (key, defaultValue) => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  };

  const [score, setScore] = useState(getFromLocalStorage("score", 0));
  const [clickValue, setClickValue] = useState(
    getFromLocalStorage("clickValue", 1)
  );
  // States
  const [clickCost, setClickCost] = useState(10);
  const [clickLevel, setClickLevel] = useState(
    getFromLocalStorage("clickLevel", 0)
  );
  const [totalClicks, setTotalClicks] = useState(
    getFromLocalStorage("totalClicks", 0)
  );
  const [firstPassiveCost, setFirstPassiveCost] = useState(100);
  const [firstPassiveValue, setFirstPassiveValue] = useState(
    getFromLocalStorage("firstPassiveValue", 0)
  );
  const [firstPassiveLevel, setFirstPassiveLevel] = useState(
    getFromLocalStorage("firstPassiveLevel", 0)
  );
  const [secondPassiveCost, setSecondPassiveCost] = useState(1000);
  const [secondPassiveValue, setSecondPassiveValue] = useState(
    getFromLocalStorage("secondPassiveValue", 0)
  );
  const [secondPassiveLevel, setSecondPassiveLevel] = useState(
    getFromLocalStorage("secondPassiveLevel", 0)
  );
  const [thirdPassiveCost, setThirdPassiveCost] = useState(10000);
  const [thirdPassiveValue, setThirdPassiveValue] = useState(
    getFromLocalStorage("thirdPassiveValue", 0)
  );
  const [thirdPassiveLevel, setThirdPassiveLevel] = useState(
    getFromLocalStorage("thirdPassiveLevel", 0)
  );
  const [fourthPassiveCost, setFourthPassiveCost] = useState(100000);
  const [fourthPassiveValue, setFourthPassiveValue] = useState(
    getFromLocalStorage("fourthPassiveValue", 0)
  );
  const [fourthPassiveLevel, setFourthPassiveLevel] = useState(
    getFromLocalStorage("fourthPassiveLevel", 0)
  );
  const [fifthPassiveCost, setFifthPassiveCost] = useState(100000);
  const [fifthPassiveValue, setFifthPassiveValue] = useState(
    getFromLocalStorage("fifthPassiveValue", 0)
  );
  const [fifthPassiveLevel, setFifthPassiveLevel] = useState(
    getFromLocalStorage("fifthPassiveLevel", 0)
  );
  // States

  //localStorage saved values
  const stateKeys = {
    score: score,
    clickValue: clickValue,
    clickLevel: clickLevel,
    totalClicks: totalClicks,
    firstPassiveValue: firstPassiveValue,
    firstPassiveLevel: firstPassiveLevel,
    secondPassiveValue: secondPassiveValue,
    secondPassiveLevel: secondPassiveLevel,
    thirdPassiveValue: thirdPassiveValue,
    thirdPassiveLevel: thirdPassiveLevel,
    fourthPassiveValue: fourthPassiveValue,
    fourthPassiveLevel: fourthPassiveLevel,
    fifthPassiveValue: fifthPassiveValue,
    fifthPassiveLevel: firstPassiveLevel,
  };
  //localStorage saved values

  // updater
  useEffect(() => {
    saveToLocalStorage(stateKeys);

    const interval = setInterval(() => {
      setScore(
        (prevScore) =>
          prevScore +
          (firstPassiveValue +
            secondPassiveValue +
            thirdPassiveValue +
            fourthPassiveValue +
            fifthPassiveValue) *
            0.1
      );
    }, 100);

    return () => clearInterval(interval);
  }, [
    score,
    firstPassiveValue,
    secondPassiveValue,
    thirdPassiveValue,
    fourthPassiveValue,
    fifthPassiveValue,
  ]);
  // updater

  return (
    <div className="game-container">
      <div className="score-box">
        <h2>{`$${score.toFixed(0)}`}</h2>
        <p>{`+$${(
          firstPassiveValue +
          secondPassiveValue +
          thirdPassiveValue +
          fourthPassiveValue +
          fifthPassiveValue
        ).toFixed(1)}/sec`}</p>
      </div>

      <div className="clicker-box">
        <button
          className="click-button"
          onClick={() => {
            setTotalClicks(totalClicks + 1);
            setScore(score + clickValue);
          }}
        >
          Click Me!
        </button>
      </div>

      <div className="upgrades-container">
        {/* Click Power Upgrade */}
        <div className="upgrade-box">
          <h3>Click Power</h3>
          <p>{`$${clickValue.toFixed(1)}/click`}</p>
          <p>{`lvl. ${clickLevel}`}</p>
          <button
            className={
              score < clickCost ? "upgrade-button-disabled" : "upgrade-button"
            }
            onClick={() => {
              if (score >= clickCost) {
                setScore(score - clickCost);
                setClickCost(clickCost + 10);
                setClickLevel(clickLevel + 1);
                setClickValue(clickValue + 0.2);
              }
            }}
          >
            Upgrade Click <br /> (+ $0.20) <br /> Cost: ${clickCost}
          </button>
        </div>

        {/* Passive Upgrades */}
        {[
          {
            name: "Passive 1",
            value: firstPassiveValue,
            level: firstPassiveLevel,
            cost: firstPassiveCost,
            increment: 1,
            setValue: setFirstPassiveValue,
            setCost: setFirstPassiveCost,
            setLevel: setFirstPassiveLevel,
          },
          {
            name: "Passive 2",
            value: secondPassiveValue,
            level: secondPassiveLevel,
            cost: secondPassiveCost,
            increment: 8,
            setValue: setSecondPassiveValue,
            setCost: setSecondPassiveCost,
            setLevel: setSecondPassiveLevel,
          },
          {
            name: "Passive 3",
            value: thirdPassiveValue,
            level: thirdPassiveLevel,
            cost: thirdPassiveCost,
            increment: 80,
            setValue: setThirdPassiveValue,
            setCost: setThirdPassiveCost,
            setLevel: setThirdPassiveLevel,
          },
          {
            name: "Passive 4",
            value: fourthPassiveValue,
            level: fourthPassiveLevel,
            cost: fourthPassiveCost,
            increment: 800,
            setValue: setFourthPassiveValue,
            setCost: setFourthPassiveCost,
            setLevel: setFourthPassiveLevel,
          },
          {
            name: "Passive 5",
            value: fifthPassiveValue,
            level: fifthPassiveLevel,
            cost: fifthPassiveCost,
            increment: 8000,
            setValue: setFifthPassiveValue,
            setCost: setFifthPassiveCost,
            setLevel: setFifthPassiveLevel,
          },
        ].map((passive, index) => (
          <div key={index} className="upgrade-box">
            <h3>{passive.name}</h3>
            <p>{`$${passive.value.toFixed(1)}/sec`}</p>
            <p>{`lvl. ${passive.level}`}</p>
            <button
              className={
                score < passive.cost
                  ? "upgrade-button-disabled"
                  : "upgrade-button"
              }
              onClick={() => {
                if (score >= passive.cost) {
                  setScore(score - passive.cost);
                  passive.setCost(passive.cost + passive.cost * 0.15);
                  passive.setValue(passive.value + passive.increment);
                  passive.setLevel(passive.level + 1);
                }
              }}
            >
              Upgrade {passive.name} (+ ${passive.increment}) <br /> Cost: $
              {passive.cost.toFixed(1)}
            </button>
          </div>
        ))}
      </div>
      <div>
        Click the big button to earn money, spend that money on upgrades to make
        more money!
      </div>
    </div>
  );
}
