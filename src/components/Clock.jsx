import React, { useEffect, useState } from "react";

import "./Clock.css";
const Clock = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();
      setDate(date);
      setTime(time);
    }

    updateTime();
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div id="clock">
      <p className="date">{date}</p>
      <p className="time">{time}</p>
      <p className="text">DIGITAL CLOCK by TejasAngadi9</p>
    </div>
  );
};

export default Clock;
