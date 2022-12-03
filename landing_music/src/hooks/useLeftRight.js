import { useState } from "react";

const useLeftRight = (length) => {
  const [selected, setSelected] = useState(0);
  const handleLeft = () => {
    let prev = (selected - 1 + length) % length;
    setSelected(prev);
  };
  const handleRight = () => {
    let next = (selected + 1) % length;
    setSelected(next);
  };
  return [selected, handleLeft, handleRight];
};

export default useLeftRight;
