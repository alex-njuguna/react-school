import "./exercise4.css";
import { useState } from "react";

export default function BackgroundChanger() {
  const colors = ["pink", "blue", "yellow", "orange", "grey", "aliceblue"];

  const [bgColor, setBgColor] = useState(colors[0]);

  return (
    <div className="myBackground" style={{ backgroundColor: bgColor }}>
      {colors.map((color) => (
        <button
          style={{ backgroundColor: color }}
          onClick={() => setBgColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
