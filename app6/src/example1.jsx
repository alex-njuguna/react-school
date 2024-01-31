import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
