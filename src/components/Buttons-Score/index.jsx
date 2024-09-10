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
  const [clickCost, setClickCost] = useState(
    getFromLocalStorage("clickCost", 10)
  );
  const [clickLevel, setClickLevel] = useState(
    getFromLocalStorage("clickLevel", 0)
  );
  const [totalClicks, setTotalClicks] = useState(
    getFromLocalStorage("totalClicks", 0)
  );
  const [firstPassiveCost, setFirstPassiveCost] = useState(
    getFromLocalStorage("firstPassiveCost", 100)
  );
  const [firstPassiveValue, setFirstPassiveValue] = useState(
    getFromLocalStorage("firstPassiveValue", 0)
  );
  const [firstPassiveLevel, setFirstPassiveLevel] = useState(
    getFromLocalStorage("firstPassiveLevel", 0)
  );
  const [secondPassiveCost, setSecondPassiveCost] = useState(
    getFromLocalStorage("secondPassiveCost", 1000)
  );
  const [secondPassiveValue, setSecondPassiveValue] = useState(
    getFromLocalStorage("secondPassiveValue", 0)
  );
  const [secondPassiveLevel, setSecondPassiveLevel] = useState(
    getFromLocalStorage("secondPassiveLevel", 0)
  );
  const [thirdPassiveCost, setThirdPassiveCost] = useState(
    getFromLocalStorage("thirdPassiveCost", 10000)
  );
  const [thirdPassiveValue, setThirdPassiveValue] = useState(
    getFromLocalStorage("thirdPassiveValue", 0)
  );
  const [thirdPassiveLevel, setThirdPassiveLevel] = useState(
    getFromLocalStorage("thirdPassiveLevel", 0)
  );
  const [fourthPassiveCost, setFourthPassiveCost] = useState(
    getFromLocalStorage("fourthPassiveCost", 100000)
  );
  const [fourthPassiveValue, setFourthPassiveValue] = useState(
    getFromLocalStorage("fourthPassiveValue", 0)
  );
  const [fourthPassiveLevel, setFourthPassiveLevel] = useState(
    getFromLocalStorage("fourthPassiveLevel", 0)
  );
  const [fifthPassiveCost, setFifthPassiveCost] = useState(
    getFromLocalStorage("fifthPassiveCost", 1000000)
  );
  const [fifthPassiveValue, setFifthPassiveValue] = useState(
    getFromLocalStorage("fifthPassiveValue", 0)
  );
  const [fifthPassiveLevel, setFifthPassiveLevel] = useState(
    getFromLocalStorage("fifthPassiveLevel", 0)
  );
  const [sixthPassiveCost, setSixthPassiveCost] = useState(
    getFromLocalStorage("sixthPassiveCost", 10000000)
  );
  const [sixthPassiveValue, setSixthPassiveValue] = useState(
    getFromLocalStorage("sixthPassiveValue", 0)
  );
  const [sixthPassiveLevel, setSixthPassiveLevel] = useState(
    getFromLocalStorage("sixthPassiveLevel", 0)
  );
  const [seventhPassiveCost, setSeventhPassiveCost] = useState(
    getFromLocalStorage("seventhPassiveCost", 100000000)
  );
  const [seventhPassiveValue, setSeventhPassiveValue] = useState(
    getFromLocalStorage("seventhPassiveValue", 0)
  );
  const [seventhPassiveLevel, setSeventhPassiveLevel] = useState(
    getFromLocalStorage("seventhPassiveLevel", 0)
  );
  const [eighthPassiveCost, setEighthPassiveCost] = useState(
    getFromLocalStorage("eighthPassiveCost", 1000000000)
  );
  const [eighthPassiveValue, setEighthPassiveValue] = useState(
    getFromLocalStorage("eighthPassiveValue", 0)
  );
  const [eighthPassiveLevel, setEighthPassiveLevel] = useState(
    getFromLocalStorage("eighthPassiveLevel", 0)
  );
  const [ninthPassiveCost, setNinthPassiveCost] = useState(
    getFromLocalStorage("ninthPassiveCost", 10000000000)
  );
  const [ninthPassiveValue, setNinthPassiveValue] = useState(
    getFromLocalStorage("ninthPassiveValue", 0)
  );
  const [ninthPassiveLevel, setNinthPassiveLevel] = useState(
    getFromLocalStorage("ninthPassiveLevel", 0)
  );
  const [tenthPassiveCost, setTenthPassiveCost] = useState(
    getFromLocalStorage("tenthPassiveCost", 100000000000)
  );
  const [tenthPassiveValue, setTenthPassiveValue] = useState(
    getFromLocalStorage("tenthPassiveValue", 0)
  );
  const [tenthPassiveLevel, setTenthPassiveLevel] = useState(
    getFromLocalStorage("tenthPassiveLevel", 0)
  );
  // States

  // powerup

  // powerup

  //localStorage saved values
  const stateKeys = {
    score: score,
    clickValue: clickValue,
    clickLevel: clickLevel,
    clickCost: clickCost,
    totalClicks: totalClicks,
    firstPassiveValue: firstPassiveValue,
    firstPassiveLevel: firstPassiveLevel,
    firstPassiveCost: firstPassiveCost,
    secondPassiveValue: secondPassiveValue,
    secondPassiveLevel: secondPassiveLevel,
    secondPassiveCost: secondPassiveCost,
    thirdPassiveValue: thirdPassiveValue,
    thirdPassiveLevel: thirdPassiveLevel,
    thirdPassiveCost: thirdPassiveCost,
    fourthPassiveValue: fourthPassiveValue,
    fourthPassiveLevel: fourthPassiveLevel,
    fourthPassiveCost: fourthPassiveCost,
    fifthPassiveValue: fifthPassiveValue,
    fifthPassiveLevel: fifthPassiveLevel,
    fifthPassiveCost: fifthPassiveCost,
    sixthPassiveValue: sixthPassiveValue,
    sixthPassiveLevel: sixthPassiveLevel,
    sixthPassiveCost: sixthPassiveCost,
    seventhPassiveValue: seventhPassiveValue,
    seventhPassiveLevel: seventhPassiveLevel,
    seventhPassiveCost: seventhPassiveCost,
    eighthPassiveValue: eighthPassiveValue,
    eighthPassiveLevel: eighthPassiveLevel,
    eighthPassiveCost: eighthPassiveCost,
    ninthPassiveValue: ninthPassiveValue,
    ninthPassiveLevel: ninthPassiveLevel,
    ninthPassiveCost: ninthPassiveCost,
    tenthPassiveValue: tenthPassiveValue,
    tenthPassiveLevel: tenthPassiveLevel,
    tenthPassiveCost: tenthPassiveCost,
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
            fifthPassiveValue +
            sixthPassiveValue +
            seventhPassiveValue +
            eighthPassiveValue +
            ninthPassiveValue +
            tenthPassiveValue) *
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
    sixthPassiveValue,
    seventhPassiveValue,
    eighthPassiveValue,
    ninthPassiveValue,
    tenthPassiveValue,
  ]);
  // updater

  const formatNumber = (num) => {
    if (num >= 1e18) return (num / 1e18).toFixed(3) + " quintillion";
    if (num >= 1e15) return (num / 1e15).toFixed(3) + " quadrillion";
    if (num >= 1e12) return (num / 1e12).toFixed(3) + " trillion";
    if (num >= 1e9) return (num / 1e9).toFixed(3) + " billion";
    if (num >= 1e6) return (num / 1e6).toFixed(3) + " million";
    if (num >= 1e3) return (num / 1e3).toFixed(3) + "K";
    return num.toFixed(0);
  };

  return (
    <div className="game-container">
      <div className="score-box">
        <h2>{`$${formatNumber(score)}`}</h2>
        <p>{`+$${formatNumber(
          firstPassiveValue +
            secondPassiveValue +
            thirdPassiveValue +
            fourthPassiveValue +
            fifthPassiveValue +
            sixthPassiveValue +
            seventhPassiveValue +
            eighthPassiveValue +
            ninthPassiveValue +
            tenthPassiveValue
        )}/sec`}</p>
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
            Upgrade Click <br /> (+ $0.20) <br /> Cost: $
            {formatNumber(clickCost)}
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
          {
            name: "Passive 6",
            value: sixthPassiveValue,
            level: sixthPassiveLevel,
            cost: sixthPassiveCost,
            increment: 80000,
            setValue: setSixthPassiveValue,
            setCost: setSixthPassiveCost,
            setLevel: setSixthPassiveLevel,
          },
          {
            name: "Passive 7",
            value: seventhPassiveValue,
            level: seventhPassiveLevel,
            cost: seventhPassiveCost,
            increment: 800000,
            setValue: setSeventhPassiveValue,
            setCost: setSeventhPassiveCost,
            setLevel: setSeventhPassiveLevel,
          },
          {
            name: "Passive 8",
            value: eighthPassiveValue,
            level: eighthPassiveLevel,
            cost: eighthPassiveCost,
            increment: 8000000,
            setValue: setEighthPassiveValue,
            setCost: setEighthPassiveCost,
            setLevel: setEighthPassiveLevel,
          },
          {
            name: "Passive 9",
            value: ninthPassiveValue,
            level: ninthPassiveLevel,
            cost: ninthPassiveCost,
            increment: 80000000,
            setValue: setNinthPassiveValue,
            setCost: setNinthPassiveCost,
            setLevel: setNinthPassiveLevel,
          },
          {
            name: "Passive 10",
            value: tenthPassiveValue,
            level: tenthPassiveLevel,
            cost: tenthPassiveCost,
            increment: 800000000,
            setValue: setTenthPassiveValue,
            setCost: setTenthPassiveCost,
            setLevel: setTenthPassiveLevel,
          },
        ].map((passive, index) => (
          <div key={index} className="upgrade-box">
            <h3>{passive.name}</h3>
            <p>{`$${formatNumber(passive.value)}/sec`}</p>
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
                  passive.setCost(passive.cost + passive.cost * 0.18);
                  passive.setValue(passive.value + passive.increment);
                  passive.setLevel(passive.level + 1);
                }
              }}
            >
              Upgrade {passive.name} (+ ${formatNumber(passive.increment)}){" "}
              <br /> Cost: ${formatNumber(passive.cost)}
            </button>
          </div>
        ))}
      </div>
      <div>
        Click the big button to earn money, spend that money on upgrades to make
        more money!
      </div>
      {/* <div className="upgrades-container">
        {[
          {
            name: "click powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
          {
            name: "1 powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
          {
            name: "2 powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
          {
            name: "3 powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
          {
            name: "4 powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
          {
            name: "5 powerup",
            level: 0,
            cost: 1000,
            increment: 1000,
            value: 100,
          },
        ].map((passive, index) => (
          <div key={index} className="upgrade-box">
            <h3>{passive.name}</h3>
            <p>{`$${formatNumber(passive.value)}/sec`}</p>
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
              Upgrade {passive.name} (+ ${formatNumber(passive.increment)}){" "}
              <br /> Cost: ${formatNumber(passive.cost)}
            </button>
          </div>
        ))}
        Powerups
      </div> */}
    </div>
  );
}
