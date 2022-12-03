import { useState } from "react";

export function Header() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1>Note App {time}</h1>
    </div>
  );
}
