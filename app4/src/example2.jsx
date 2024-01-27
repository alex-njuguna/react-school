import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClickNext() {
    setIndex(index + 1);
  }

  function handleClickPrev() {
    if (index !== 0) setIndex(index - 1);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClickNext}>Next</button>
      <button onClick={handleClickPrev}>Prev</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleShowMore}>show more</button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
